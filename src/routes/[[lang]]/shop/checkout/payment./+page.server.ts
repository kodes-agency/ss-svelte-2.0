import { BORICA_DEV_PASSPHRASE, BORICA_DEV_PRIVATE_KEY, BORICA_DEV_GATEWAY, BORICA_TERMINAL } from "$env/static/private";
import { PUBLIC_SHOP_API_URL } from "$env/static/public";
import type { Actions } from "@sveltejs/kit";
import * as crypto from "crypto";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ cookies, fetch }) => {
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
      { key: BORICA_DEV_PRIVATE_KEY, passphrase: BORICA_DEV_PASSPHRASE },
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

    const request = await fetch(
      BORICA_DEV_GATEWAY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      }
    );

    if (request.ok) {
      cookies.delete("orderNumber", {
        path: "/",
      });

      let transactionData = await request.json();
      if (transactionData.RC === "00") {
        return {
          status: 201,
          success: true,
          cookies: {
            nounce: cookies.get("nonce"),
            cartToken: cookies.get("cart-token"),
          }
        };
      } else {
        return {
          status: 402,
          success: false,
          message: transactionData.STATUSMSG,
        };
      }
    } else {
      return {
        status: 400,
        success: false,
        message: "Error checking transaction status",
      };
    }
  } else {
    return {
      status: 403,
      success: false,
      message: "No order number",
    };
  }
};
