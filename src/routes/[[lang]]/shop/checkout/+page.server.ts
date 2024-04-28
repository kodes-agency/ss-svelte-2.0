import query from "$lib/db/checkoutPage";
import { PUBLIC_API_URL, PUBLIC_GRAPHQL_URL, PUBLIC_SHOP_API_URL } from "$env/static/public";
import type { Product } from "$lib/types/payloadTypes.js";
import type { Actions } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { PAYLOAD_SECRET } from "$env/static/private";
import { sign } from '$lib/functions/sign.js'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const customerDetailsSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email({message: 'Invalid email address'}),
  phone: z.string().regex(phoneRegex, 'Invalid phone number').min(5, {message: 'Invalid phone number'}).refine(value => value != '', 'Phone number is required'),
  country: z.string(),
  city: z.string(),
  state: z.string(),
  postcode: z.string(),
  address_1: z.string(),
  companyName: z.string(),
  companyVat: z.string(),
  companyCountry: z.string(),
  companyCity: z.string(),
  companyAddress: z.string(),
  customerNote: z.string(),
});

const paymentSchema = z.object({
  paymentMethod: z.enum(['cod', 'borica_3ds_mpi']),
})


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, cookies,request }) => {
  try {
    let checkoutReq = await fetch(PUBLIC_SHOP_API_URL + "/cart", {
      headers: {
        Nonce: `${cookies.get("nonce") || ""}`,
        "Cart-token": `${cookies.get("cart-token") || ""}`,
      },
    });
  
    let checkoutData = await checkoutReq.json();
  
    let cartItemsIds = await checkoutData.items.map((item:any) => {
      return `"${item.id}"`
    });

    const payloadReq = await fetch(PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query(params.lang ? params.lang : "bg", cartItemsIds),
      })
    });

    const data = await payloadReq.json();

    checkoutData.items.forEach((item:any) => {
      let productId = item.id
      
      const correspondingProduct: Product = data.data.Products.docs.find(
        (product: Product) => productId === Number(product.productId)
      );    
      
      item.productName = correspondingProduct.productKind === "bottle" ? `${correspondingProduct.productTitle} ${new Date(correspondingProduct?.productBasicInformation.harvestYear).getFullYear()} ${correspondingProduct.stockManagement.volume.replace("_", "")}ml` : correspondingProduct.productTitle;
      item.productSlug = correspondingProduct.slug;
      item.productType = correspondingProduct.productKind;
    });

    let customerDetailsForm 
    const paymentForm = await superValidate(zod(paymentSchema))

    if(checkoutData.billing_address.first_name !== '' || checkoutData.billing_address.last_name !== '' || checkoutData.billing_address.email !== '' || checkoutData.billing_address.phone !== '' || checkoutData.billing_address.city !== '' || checkoutData.billing_address.postcode !== '' || checkoutData.billing_address.address_1 !== '') {
      customerDetailsForm = await superValidate(checkoutData.billing_address, zod(customerDetailsSchema))
    } else {
      customerDetailsForm = await superValidate(zod(customerDetailsSchema))
    }
    
    let signitureData = sign()

    return {checkoutData, customerDetailsForm, paymentForm, signitureData}
  } catch (error) {
    console.log(error);
  }
};

export const actions: Actions = {

  customerDetails: async ({ cookies, fetch, request }) => {
    const customerDetailsForm = await superValidate(request, zod(customerDetailsSchema));
    if (!customerDetailsForm.valid) {
      // Again, return { customerDetailsForm } and things will just work.
      return fail(400, { customerDetailsForm });
    }
    
    let billing_address = {
      first_name: customerDetailsForm.data.first_name,
      last_name: customerDetailsForm.data.last_name,    
      email: customerDetailsForm.data.email, 
      company: customerDetailsForm.data.companyName ? `Име: ${customerDetailsForm.data.companyName} \n ЕИК: ${customerDetailsForm.data.companyVat} \n Държава на регистрация: ${customerDetailsForm.data.companyCountry}` : "",
      phone: customerDetailsForm.data.phone,
      country: customerDetailsForm.data.country,
      city: customerDetailsForm.data.city,
      state: customerDetailsForm.data.state,
      postcode: customerDetailsForm.data.postcode,
      address_1: customerDetailsForm.data.address_1
    }

    let shipping_address = {
      first_name: customerDetailsForm.data.first_name,
      last_name: customerDetailsForm.data.last_name,
      company: customerDetailsForm.data.companyName ? `Име: ${customerDetailsForm.data.companyName} \n ЕИК: ${customerDetailsForm.data.companyVat} \n Държава на регистрация: ${customerDetailsForm.data.companyCountry}` : "",
      country: customerDetailsForm.data.country,
      city: customerDetailsForm.data.city,
      state: customerDetailsForm.data.state,
      postcode: customerDetailsForm.data.postcode,
      address_1: customerDetailsForm.data.address_1,
      phone: customerDetailsForm.data.phone,
    }    

    let req = await fetch(PUBLIC_SHOP_API_URL + "/cart/update-customer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Nonce': `${cookies.get("nonce") || ""}`,
        'Cart-token': `${cookies.get("cart-token") || ""}`,
      },
      body: JSON.stringify({shipping_address, billing_address})
    });

    let res = await req.json()

    return {customerDetailsForm};

  },

  order: async ({ cookies, request }) => {
    const formData = await request.formData();

    let order = {
      billing_address: {},
      customerNote: formData.get('customerNote'),
      payment_method: "cod",
      create_account: false,
    }

    let checkoutReq = await fetch(PUBLIC_SHOP_API_URL + "/cart", {
      headers: {
        Nonce: `${cookies.get("nonce") || ""}`,
        "Cart-token": `${cookies.get("cart-token") || ""}`,
      },
    });

    let checkoutRes = await checkoutReq.json();

    // let wooReq = await fetch(PUBLIC_SHOP_API_URL + "/checkout", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Nonce': `${cookies.get("nonce") || ""}`,
    //     'Cart-token': `${cookies.get("cart-token") || ""}`,
    //   },
    //   body: JSON.stringify(order)
    // });

    // let wooRes = await wooReq.json()

    if(order) {
      let payloadOrder = {
        orderId: '453',
        status: 'pending',
        first_name: checkoutRes.billing_address.first_name,
        last_name: checkoutRes.billing_address.last_name,
        email: checkoutRes.billing_address.email,
        phone: checkoutRes.billing_address.phone,
        country: checkoutRes.billing_address.country,
        city: checkoutRes.billing_address.city,
        state: checkoutRes.billing_address.state,
        postcode: checkoutRes.billing_address.postcode,
        address_1: checkoutRes.billing_address.address_1,
        customer_note: formData.get('customerNote') + "\n" + checkoutRes.billing_address.company,
        products: [...checkoutRes.items.map((item:any) => {
          return {
            product: item.description.replace(/<[^>]*>?/gm, ''),
            quantity: item.quantity,
            // price: Number(item.prices.price),
            // price_readOnly: Number(item.prices.price),
            // total: item.totals.total_price
          }}
        )]
      }

      let payloadReq = await fetch("http://localhost:3001/api" + "/orders", {
        method: "POST",
        headers: {
          Authorization: `users API-Key ${PAYLOAD_SECRET}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payloadOrder)
      });

      let payloadRes = await payloadReq.json()
      return {success: true}
    }
  }
};