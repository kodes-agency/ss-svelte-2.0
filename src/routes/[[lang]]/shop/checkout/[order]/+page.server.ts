import { SHOP_API_URL } from "$env/static/private";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, cookies, url }) => {
  let response = await fetch(SHOP_API_URL + "/order/" + params.order + "?" + `key=${url.searchParams.get("key")}&billing_email=${url.searchParams.get("billing_email")}`, {
  });

  let order = await response.json();

  return order;
};


