import { json } from "@sveltejs/kit";
import { SHOP_API_URL } from "$env/static/private";
export async function GET({ cookies }) {
  const obj: any = {
    "Content-Type": "application/json",
  };

  cookies.getAll().forEach((cookie) => {
    obj[cookie.name] = cookie.value;
  });

  const responseGet = await fetch(`${SHOP_API_URL}/cart`, {
    method: "GET",
    headers: obj,
  });

  const dataGet = await responseGet.json();

  return json(dataGet);
}
