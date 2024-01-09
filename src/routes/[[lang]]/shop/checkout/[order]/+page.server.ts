import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/checkoutPage";
import { SHOP_API_URL } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, cookies, url }) => {
  let response = await fetch(SHOP_API_URL + "/order/" + params.order + "?" + `key=${url.searchParams.get("key")}&billing_email=${url.searchParams.get("billing_email")}`, {
  });

  let order = await response.json();

  console.log(order)

  return order;
};


