import { PUBLIC_API_URL } from "$env/static/public";
import { json } from "@sveltejs/kit";

export async function POST({ request, fetch, cookies }) {
  try {
    const record = await request.json();
    const recordRec = await fetch(`${PUBLIC_API_URL}/payments`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
  })

  let recordRes = await recordRec.json()

  console.log(recordRes)

  if(recordRec.ok){
      console.log('Record added')
      cookies.set("orderNumber", record.ORDER, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
  })
  }else{  
      console.log('Record not added')
  }
    return json(recordRes);
  } catch (error) {
    console.log(error);
    return json({ error: error });
  }
}
