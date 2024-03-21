import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/checkoutPage";
import { SHOP_API_URL } from "$env/static/private";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
import type { Product } from "$lib/types/payloadTypes.js";
import type { Actions } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, cookies }) => {
  try {
    let checkoutResponse = await fetch(SHOP_API_URL + "/cart", {
      headers: {
        Nonce: `${cookies.get("nonce") || ""}`,
        "Cart-token": `${cookies.get("cart-token") || ""}`,
      },
    });
  
    let checkoutData = await checkoutResponse.json();
  
    let cartItemsIds = await checkoutData.items.map((item:any) => {
      return `"${item.id}"`
    });

    const response = await fetch(PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query(params.lang ? params.lang : "bg", cartItemsIds),
      })
    });

    const data = await response.json();

    checkoutData.items.forEach((item:any) => {
      let productId = item.id
      
      const correspondingProduct: Product = data.data.Products.docs.find(
        (product: Product) => productId === Number(product.productId)
      );
      
      item.productName = correspondingProduct.productKind === "bottle" ? `${correspondingProduct.productTitle} ${new Date(correspondingProduct?.productBasicInformation.harvestYear).getFullYear()} ${correspondingProduct.stockManagement.volume.replace("_", "")}ml` : correspondingProduct.productTitle;
      item.productSlug = correspondingProduct.slug;
    });

    return checkoutData
  } catch (error) {
    console.log(error);
  }
};


export const actions: Actions = {
  customerDetails: async ({ cookies, fetch, request }) => {
    const formData = await request.formData();

    let billing_address = {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),    
      email: formData.get('email'),
      company: formData.get('companyName') ? `Име: ${formData.get('companyName')} \n ЕИК: ${formData.get('companyVat')} \n Държава на регистрация: ${formData.get('companyCountry')}` : "",
      phone: formData.get('phone'),
      country: formData.get('country'),
      city: formData.get('companyCity') || formData.get('city'),
      state: formData.get('region'),
      postcode: formData.get('postCode'),
      address_1: formData.get('companyAddress') ||  formData.get('address')
    }

    let shipping_address = {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      company: formData.get('companyName') ? `Име: ${formData.get('companyName')} \n ЕИК: ${formData.get('companyVat')} \n Държава на регистрация: ${formData.get('companyCountry')}` : "",
      country: formData.get('country'),
      city: formData.get('city'),
      state: formData.get('region'),
      postcode: formData.get('postCode'),
      address_1: formData.get('address'),
      phone: formData.get('phone'),
    }    

    let response = await fetch(SHOP_API_URL + "/cart/update-customer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Nonce': `${cookies.get("nonce") || ""}`,
        'Cart-token': `${cookies.get("cart-token") || ""}`,
      },
      body: JSON.stringify({shipping_address, billing_address})
    });

    let json = await response.json()
  },

  order: async ({ cookies, fetch, request }) => {
    const formData = await request.formData();

    let order = {
      billing_address: {
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),    
        email: formData.get('email'),
        company: formData.get('companyName') ? `Име: ${formData.get('companyName')} \n ЕИК: ${formData.get('companyVat')} \n Страна: ${formData.get('companyCountry')} \n Адрес: ${formData.get('companyAddress')}` : "",
        phone: formData.get('phone'),
        country: formData.get('country'),
        city: formData.get('city'),
        state: formData.get('region'),
        postcode: formData.get('postCode'),
        address_1: formData.get('address')
      },
      shipping_address: {
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        country: formData.get('country'),
        email: formData.get('email'),
        city: formData.get('city'),
        state: formData.get('region'),
        postcode: formData.get('postCode'),
        address_1: formData.get('address'),
        phone: formData.get('phone'),
      },
      customerNote: formData.get('customerNote'),
      payment_method: "cod",
      create_account: false,
    }

    let response = await fetch(SHOP_API_URL + "/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Nonce': `${cookies.get("nonce") || ""}`,
        'Cart-token': `${cookies.get("cart-token") || ""}`,
      },
      body: JSON.stringify(order)
    });
  }
};