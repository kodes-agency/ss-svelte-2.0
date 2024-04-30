import { json } from "@sveltejs/kit";
import { PUBLIC_SHOP_API_URL } from "$env/static/public";

export async function POST({ request, cookies, fetch }) {
  try {
    const req = await request.json();

    console.log(req);

    return json(req);
  } catch (error) {
    console.log(error);
    return json({ error: error });
  }
}
