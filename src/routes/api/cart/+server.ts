import { json } from "@sveltejs/kit";
import { PUBLIC_SHOP_API_URL } from "$env/static/public";
export async function GET({ cookies }) {
  const obj: any = {
    "Content-Type": "application/json",
  };

  try {
    cookies.getAll().forEach((cookie) => {
      obj[cookie.name] = cookie.value;
    });

    const getCartReq = await fetch(`${PUBLIC_SHOP_API_URL}/cart`, {
      method: "GET",
      headers: obj,
    });

    const getCartRes = await getCartReq.json();

    return json(getCartRes);
  } catch (error) {
    console.log(error);
    return json({ error: error });
  }
}
