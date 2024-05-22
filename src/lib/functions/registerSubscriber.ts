import { EMAIL_API_URL } from "$env/static/private";

async function registerSubscriber(email:string, phone:string, name: string, country: string, city: string) {
    const request = await fetch(EMAIL_API_URL, {
            // Use environment variable for URL
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                phone: phone,
                name: name,
                country: country,
                city: city,
            }),
    });

    const response = await request.json();

    if(request.ok){
         return { succss: true, response: response }
    } else {
        return  { success: false, response: response}
    }
}