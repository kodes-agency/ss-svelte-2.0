import {
  BORICA_DEV_PASSPHRASE,
  BORICA_DEV_PRIVATE_KEY,
  BORICA_DEV_GATEWAY,
  BORICA_TERMINAL,
  BORICA_PRODUCTION_PASSPHRASE,
  BORICA_PRODUCTION_PRIVATE_KEY,
  BORICA_PRODUCTION_GATEWAY,
} from "$env/static/private";
import { PUBLIC_SHOP_API_URL } from "$env/static/public";
import { fail, type Actions } from "@sveltejs/kit";
import * as crypto from "crypto";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ cookies, fetch, url }) => {
  const TERMINAL = BORICA_TERMINAL;
  const TRTYPE = "90";
  const ORDER = cookies.get("orderNumber");
  const TRAN_TRTYPE = "1";
  const NONCE = crypto.randomBytes(16).toString("hex").toUpperCase(); // Формиране на сигнатура за подписване, Размер: 1-64

  if (ORDER) {
    const P_SIGN =
      `${TERMINAL.length}${TERMINAL}` +
      `${TRTYPE.length}${TRTYPE}` +
      `${ORDER.length}${ORDER}` +
      `${NONCE.length}${NONCE}`;

    const sign = crypto.createSign("SHA256");

    // Update the sign object with the P_SIGN data
    sign.update(P_SIGN);

    // Sign the data and convert it to a hex string
    const signature = sign.sign(
      { key: BORICA_PRODUCTION_PRIVATE_KEY, passphrase: BORICA_PRODUCTION_PASSPHRASE },
      "hex"
    );

    let data = {
      TERMINAL: TERMINAL,
      TRTYPE: TRTYPE,
      ORDER: ORDER,
      TRAN_TRTYPE: TRAN_TRTYPE,
      NONCE: NONCE,
      P_SIGN: signature.toUpperCase(),
    };

    const request = await fetch(BORICA_DEV_GATEWAY, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });

    if (request.ok) {
    let transactionData = await request.json();

      if (transactionData.RC === "00") {
        cookies.delete("cart-token", { path: "/" });
        cookies.delete("nonce", { path: "/" });

        return {
          status: 201,
          success: true,
          method: "other_method",
          lang: cookies.get("locale")
        };
      } else {
        return {
          status: 402,
          success: false,
          message: transactionData.STATUSMSG,
          lang: cookies.get("locale"),
          orderNumber: ORDER,
        };
      }
    } else {
      return {
        status: 400,
        success: false,
        message: "Error checking transaction status",
        lang: cookies.get("locale"),
        orderNumber: ORDER,
      };
    }
  } else if (
    url.searchParams.get("method") === "cod" &&
    url.searchParams.get("status") === "201"
  ) {
    return {
      status: 201,
      success: true,
      lang: cookies.get("locale")
    };
  } else {
    return {
      status: 403,
      success: false,
      message: "No order number",
      lang: cookies.get("locale")
    };
  }
};

export const actions: Actions = {
  order: async ({ cookies, request }) => {
    try {
      const formData = await request.formData();

      const order = {
        billing_address: {},
        customerNote: formData.get("customerNote"),
        payment_method: "other_payment",
        create_account: false,
      };

      const wooReq = await fetch(PUBLIC_SHOP_API_URL + "/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Nonce: `${cookies.get("nonce") || ""}`,
          "Cart-token": `${cookies.get("cart-token") || ""}`,
        },
        body: JSON.stringify(order),
      });

      const wooRes = await wooReq.json();

      if (wooReq.ok && wooRes.order_id) { 
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(error);
      return fail(500, {
        error: "An error occurred during recording the order",
        success: false,
      });
    }
  },
};
