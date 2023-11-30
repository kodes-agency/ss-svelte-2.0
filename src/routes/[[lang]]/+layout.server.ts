import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/navMenu";
import { cart } from "$lib/store/store.js";



/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params, fetch, cookies}) => {
    const data = getClient().query({
        query: query(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
        }
    })

    async function getCart () {
        let url = "https://ss.kodes.agency/wp-json/wc/store/v1/cart"
        let response = await fetch(url, {
            headers: {
                "Nonce": `${cookies.get('nonce') || ""}`,
                "Cart-token": `${cookies.get('cart-token') || ""}`
            }
        })
        let cartData = await response.json()
        cart.set(cartData)
        
        cookies.set('nonce', response.headers.get('nonce') || "", {
            path: "/",
            maxAge: 60 * 60 * 12 * 1,
            secure: false,
            httpOnly: true,
            sameSite: "lax",
        })
        
        if(!cookies.get('cart-token')) {
            cookies.set('cart-token', response.headers.get('cart-token') || "", {
                path: "/",
                maxAge: 60 * 60 * 12 * 1,
                secure: false,
                httpOnly: true,
                sameSite: "lax",
            })
        }

        return cartData
    }

    // cart.subscribe((value)=>{
    //     console.log(value)
    // })

    let cartData = await getCart()

    return {
        data,
        cartData
    }
}


