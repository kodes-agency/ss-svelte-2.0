import { json } from "@sveltejs/kit";
import { PUBLIC_SHOP_API_URL } from "$env/static/public";

export async function POST({ request, cookies, fetch }) {
  try {
    const item = await request.json();

    let nonce = cookies.get("nonce");
    let cartToken = cookies.get("cart-token");

    let response = await fetch(`${PUBLIC_SHOP_API_URL}/cart/remove-item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Nonce: `${nonce}`,
        "Cart-token": `${cartToken}`,
      },
      body: JSON.stringify({
        key: item.key,
      }),
    });

    let data = await response.json();
    console.log("Remove from cart data:", data)

    return json(data);
  } catch (error) {
    console.log(error);
    return json({ error: error });
  }
}
