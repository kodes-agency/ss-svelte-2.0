import { PUBLIC_SHOP_API_URL } from "$env/static/public";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, cookies, url }) => {
  let response = await fetch(PUBLIC_SHOP_API_URL + "/order/" + params.order + "?" + `key=${url.searchParams.get("key")}&billing_email=${url.searchParams.get("billing_email")}`, {
  });

  let order = await response.json();

  return order;
};


