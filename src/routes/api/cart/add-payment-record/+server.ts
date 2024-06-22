import { PUBLIC_API_URL, PUBLIC_SHOP_API_URL } from "$env/static/public";
import { fail, json } from "@sveltejs/kit";

export async function POST({ request, fetch, cookies }) {
  try {
    const cookieObj = {
      "cart-token": cookies.get("cart-token"),
      nonce: cookies.get("nonce"),
    };

    const headerObject: any = {
      "Content-Type": "application/json",
      ...cookieObj,
    };

    const getWooCartRequest = await fetch(`${PUBLIC_SHOP_API_URL}/cart`, {
      method: "GET",
      headers: headerObject,
    });

    const getWooCartResponse = await getWooCartRequest.json();
    const boricaFormRecord = await request.json();

    // Validation
    if (!boricaFormRecord.ORDER) {
      console.log(
        "Problem with sending transaction data. Please try again later."
      );
      return json({
        success: false,
        error: "Problem with sending transaction data. Please try again later.",
      });
    }
    if (!getWooCartRequest.ok) {
      console.log(
        "Problem with sending request for cart retrival. Please try again later."
      );
      return json({
        success: false,
        error:
          "Problem with sending request for cart retrival. Please try again later.",
      });
    }
    if (getWooCartResponse.code && getWooCartResponse.data.status) {
      console.log("Problem with retriving your cart. Please try again later.");
      return json({
        success: false,
        error: "Problem with retriving your cart. Please try again later.",
      });
    }

    if (
      getWooCartResponse.billing_address.first_name.length < 1 ||
      getWooCartResponse.billing_address.last_name.length < 1 ||
      getWooCartResponse.billing_address.email.length < 1 ||
      getWooCartResponse.billing_address.phone.length < 1 ||
      getWooCartResponse.billing_address.address_1.length < 1 ||
      getWooCartResponse.billing_address.city.length < 1 ||
      getWooCartResponse.billing_address.postcode.length < 1 ||
      getWooCartResponse.billing_address.country.length < 1
    ) {
      console.log(
        "Please fill all the required fields in the checkout form and make sure that they are valid."
      );
      return json({
        success: false,
        error:
          "Please fill all the required fields in the checkout form and make sure that they are valid.",
      });
    }

    const payloadPaymentRecordRequest = await fetch(
      `${PUBLIC_API_URL}/payments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...boricaFormRecord,
          orderData: {
            ...getWooCartResponse,
            customerNote: boricaFormRecord.customerNote,
            ...cookieObj,
          },
        }),
      }
    );

    let payloadPaymentRecordResponse = await payloadPaymentRecordRequest.json();
    console.log(payloadPaymentRecordResponse);

    if (!payloadPaymentRecordRequest.ok) {
      console.log(
        "Problem with sending payment record. Please try again later."
      );
      return json({
        error: "Problem with sending payment record. Please try again later.",
      });
    }

    console.log(
      "Record sent successfully to the Payload CardPayment collection."
    );

    cookies.set("orderNumber", boricaFormRecord.ORDER, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return json({ success: true, payloadPaymentRecordResponse });
  } catch (error) {
    console.log(error);
    return json({
      success: false,
      error:
        "Sorry, there was a general request error. Please try again later.",
      errorMessage: error,
    });
  }
}
