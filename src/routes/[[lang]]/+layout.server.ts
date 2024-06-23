import { PUBLIC_GRAPHQL_URL, PUBLIC_SHOP_API_URL } from "$env/static/public";
import query from "$lib/db/navMenu";

const cookieOptions = {
    path: "/",
    maxAge: 60 * 60 * 12 * 1,
    secure: false,
    httpOnly: true,
    sameSite: "lax",
};

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params, fetch, cookies}) => {
    try {
        const responsePageData = await fetch(PUBLIC_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query(params.lang ? params.lang : "bg"),
            })
        });
        
        const pageData = await responsePageData.json();
    
        let response = await fetch(PUBLIC_SHOP_API_URL + "/cart", {
            headers: {
                "Nonce": `${cookies.get('nonce') || ""}`,
                "Cart-token": `${cookies.get('cart-token') || ""}`
            }
        })

        let cartData = await response.json()

        // @ts-expect-error
        cookies.set('nonce', response.headers.get('nonce') || "", cookieOptions)
        
        if(!cookies.get('cart-token')) {
        // @ts-expect-error
            cookies.set('cart-token', response.headers.get('cart-token') || "", cookieOptions)
        }
    
        return {
            layoutData: pageData.data.General,
            cartData,
            verified: cookies.get('verified'),
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            error
        }
    }
}


