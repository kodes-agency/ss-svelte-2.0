import { json } from "@sveltejs/kit";


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

