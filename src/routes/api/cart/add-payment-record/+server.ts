import { PUBLIC_API_URL } from "$env/static/public";
import { json } from "@sveltejs/kit";

export async function POST({ request, fetch }) {
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

  if(recordRec.ok){
      console.log('Record added')
      console.log(recordRes)
  }else{  
      console.log('Record not added')
      console.log(recordRes)
  }

    return json(recordRes);
  } catch (error) {
    console.log(error);
    return json({ error: error });
  }
}
