import query from "$lib/db/checkoutPage";
import { PUBLIC_GRAPHQL_URL, PUBLIC_SHOP_API_URL } from "$env/static/public";
import { EMAIL_API_URL } from "$env/static/private";
import type { Product } from "$lib/types/payloadTypes.js";
import type { Actions } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate, setError, fail } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { redirect } from "@sveltejs/kit";
import { sign } from "$lib/functions/sign.js";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const customerDetailsSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid phone number")
    .min(5, { message: "Invalid phone number" })
    .refine((value) => value != "", "Phone number is required"),
  country: z.string(),
  city: z.string(),
  state: z.string(),
  postcode: z.string(),
  address_1: z.string(),
  billingAddress_2: z.string(),
  billingCompany: z.string(),
  shippingAddress_2: z.string(),
  shippingCompany: z.string(),
  customerNote: z.string(),
  subscribe: z.boolean(),
});

const paymentSchema = z.object({
  paymentMethod: z.enum(["cod", "borica_3ds_mpi"]),
});

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, cookies, request }) => {
  try {
    // Get cart items
    let checkoutReq = await fetch(PUBLIC_SHOP_API_URL + "/cart", {
      headers: {
        Nonce: `${cookies.get("nonce") || ""}`,
        "Cart-token": `${cookies.get("cart-token") || ""}`,
      },
    });

    let checkoutData = await checkoutReq.json();

    // Get cart items data
    let cartItemsIds = await checkoutData.items.map((item: any) => {
      return `"${item.id}"`;
    });

    const payloadReq = await fetch(PUBLIC_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query(params.lang ? params.lang : "bg", cartItemsIds),
      }),
    });

    const data = await payloadReq.json();

    // Add product name and slug to cart items
    checkoutData.items.forEach((item: any) => {
      let productId = item.id;

      const correspondingProduct: Product = data.data.Products.docs.find(
        (product: Product) => productId === Number(product.productId)
      );

      item.productName =
        correspondingProduct.productKind === "bottle"
          ? `${correspondingProduct.productTitle} ${new Date(
              // @ts-expect-error
              correspondingProduct?.productBasicInformation?.harvestYear
            ).getFullYear()} ${correspondingProduct.stockManagement.volume.replace(
              "_",
              ""
            )}ml`
          : correspondingProduct.productTitle;
      item.productSlug = correspondingProduct.slug;
      item.productType = correspondingProduct.productKind;
      item.q = 1 * item.quantity;
      if (
        correspondingProduct.productBundle &&
        correspondingProduct.productBundle?.length > 0
      ) {
        item.q =
          correspondingProduct.productBundle.reduce(
            (sum, value) => sum + value.quantity,
            0
          ) * item.quantity;
      }
    });

    let numberOfItems = checkoutData.items.reduce(
      (acc: number, item: any) => acc + item.q,
      0
    );

    checkoutData.items.forEach((item: any) => {
      if (item.productType === "other") {
        numberOfItems = 6;
      }
    });

    console.log(checkoutData.items);

    // Validate payment forms
    let customerDetailsForm;
    const paymentForm = await superValidate(zod(paymentSchema));

    // Validate customer details form

    const customerDetails = {
      first_name: checkoutData.billing_address.first_name,
      last_name: checkoutData.billing_address.last_name,
      email: checkoutData.billing_address.email,
      phone: checkoutData.billing_address.phone,
      country: checkoutData.billing_address.country,
      city: checkoutData.billing_address.city,
      postcode: checkoutData.billing_address.postcode,
      address_1: checkoutData.billing_address.address_1,
      billingAddress_2: checkoutData.billing_address.address_2,
      billingCompany: checkoutData.billing_address.company,
      shippingAddress_2: checkoutData.shipping_address.address_2,
      shippingCompany: checkoutData.shipping_address.company,
    };

    if (
      checkoutData.billing_address.first_name !== "" ||
      checkoutData.billing_address.last_name !== "" ||
      checkoutData.billing_address.email !== "" ||
      checkoutData.billing_address.phone !== "" ||
      checkoutData.billing_address.city !== "" ||
      checkoutData.billing_address.postcode !== "" ||
      checkoutData.billing_address.address_1 !== ""
    ) {
      customerDetailsForm = await superValidate(
        customerDetails,
        zod(customerDetailsSchema)
      );
    } else {
      customerDetailsForm = await superValidate(zod(customerDetailsSchema));
    }

    // let signitureData = await sign(params.lang == "bg" ? "BGN": "EUR", checkoutData.totals.total_price, checkoutData.id, `Поръчка №${checkoutData.id}`)

    let signitureData = await sign(
      (Number(checkoutData.totals.total_price) / 100).toFixed(2).toString()
    );

    return {
      checkoutData,
      customerDetailsForm,
      paymentForm,
      signitureData,
      numberOfItems,
    };
  } catch (error) {
    console.log(error);
  }
};

export const actions: Actions = {
  customerDetails: async ({ cookies, fetch, request }) => {
    try {
      const customerDetailsForm = await superValidate(
        request,
        zod(customerDetailsSchema)
      );
      console.log("running");
      if (!customerDetailsForm.valid) {
        // Again, return { customerDetailsForm } and things will just work.
        return fail(400, { customerDetailsForm, error: "Invalid form data" });
      }

      if (customerDetailsForm.data.subscribe) {
        registerSubscriber(
          customerDetailsForm.data.email,
          customerDetailsForm.data.phone,
          `${customerDetailsForm.data.first_name} ${customerDetailsForm.data.last_name}`,
          customerDetailsForm.data.country,
          customerDetailsForm.data.city
        );
      }

      let billing_address = {
        first_name: customerDetailsForm.data.first_name,
        last_name: customerDetailsForm.data.last_name,
        email: customerDetailsForm.data.email,
        phone: customerDetailsForm.data.phone,
        country: customerDetailsForm.data.country,
        city: customerDetailsForm.data.city,
        state: "",
        postcode: customerDetailsForm.data.postcode,
        address_1: customerDetailsForm.data.address_1,
        address_2: customerDetailsForm.data.billingAddress_2,
        company: customerDetailsForm.data.billingCompany,
      };

      let shipping_address = {
        first_name: customerDetailsForm.data.first_name,
        last_name: customerDetailsForm.data.last_name,
        country: customerDetailsForm.data.country,
        city: customerDetailsForm.data.city,
        postcode: customerDetailsForm.data.postcode,
        state: "",
        phone: customerDetailsForm.data.phone,
        address_1: customerDetailsForm.data.address_1,
        address_2: customerDetailsForm.data.shippingAddress_2,
        company: customerDetailsForm.data.shippingCompany,
      };

      const wooUpdateCustomerRequest = await fetch(
        PUBLIC_SHOP_API_URL + "/cart/update-customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Nonce: `${cookies.get("nonce")}`,
            "Cart-token": `${cookies.get("cart-token")}`,
          },
          body: JSON.stringify({ shipping_address, billing_address }),
        }
      );
      // return setError(customerDetailsForm, "first_name", "Invalid form data");

      // console.log(await wooUpdateCustomerRequest.json());

      const wooUpdateCustomerResponse = await wooUpdateCustomerRequest.json();
      if (!wooUpdateCustomerRequest.ok)
        return setError(
          customerDetailsForm,
          "first_name",
          `Sorry, an error has occured${
            wooUpdateCustomerResponse?.data?.details?.billing_address?.code
              ? ": " +
                wooUpdateCustomerResponse.data.details.billing_address.code.replace(
                  "_",
                  " "
                )
              : ""
          }.`
        );
      if (
        wooUpdateCustomerResponse.code &&
        wooUpdateCustomerResponse.data.status
      )
        return setError(
          customerDetailsForm,
          "first_name",
          "Sorry, an error occurred during customer details update. Please try again later."
        );
      if (
        wooUpdateCustomerResponse.billing_address.first_name.length < 1 ||
        wooUpdateCustomerResponse.billing_address.last_name.length < 1 ||
        wooUpdateCustomerResponse.billing_address.email.length < 1 ||
        wooUpdateCustomerResponse.billing_address.phone.length < 1
      ) {
        return fail(402, {
          customerDetailsForm,
          error:
            "Sorry, an error occurred during sending your billing address to the server. Please try again later.",
        });
      }

      return { customerDetailsForm };
    } catch (error) {
      console.error(error);
      return fail(500, {
        error:
          "Sorry, an error occurred during customer details update. Please try again later.",
      });
    }
  },

  // order: async ({ cookies, request }) => {
  //   try {
  //     const formData = await request.formData();

  //     const order = {
  //       billing_address: {},
  //       customerNote: formData.get("customerNote"),
  //       payment_method: "cod",
  //       create_account: false,
  //     };

  //     const checkoutReq = await fetch(PUBLIC_SHOP_API_URL + "/cart", {
  //       headers: {
  //         Nonce: `${cookies.get("nonce") || ""}`,
  //         "Cart-token": `${cookies.get("cart-token") || ""}`,
  //       },
  //     });

  //     const wooReq = await fetch(PUBLIC_SHOP_API_URL + "/checkout", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Nonce: `${cookies.get("nonce") || ""}`,
  //         "Cart-token": `${cookies.get("cart-token") || ""}`,
  //       },
  //       body: JSON.stringify(order),
  //     });

  //     const wooRes = await wooReq.json();

  //     if(wooReq.ok && wooRes.order_id){
  //       return { success: true }
  //     } else {
  //       return { success: false }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return fail(500, { error: "An error occurred during recording the order", success: false });
  //   }
  // },
};
async function registerSubscriber(
  email: string,
  phone: string,
  name: string,
  country: string,
  city: string
) {
  try {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("phone", phone);
    params.append("name", name);
    params.append("country", country);
    params.append("city", city);

    const req = await fetch(EMAIL_API_URL + `&${params.toString()}`, {
      method: "POST",
    });

    const res = await req.json();
  } catch (error) {
    console.error(error);
  }
}
