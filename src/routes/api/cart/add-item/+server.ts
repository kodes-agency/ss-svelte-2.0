import { json } from '@sveltejs/kit'
import { SHOP_API_URL } from '$env/static/private';

export async function POST({request, cookies, fetch}){

    const item = await request.json()


    let nonce = cookies.get('nonce')
    let cartToken = cookies.get('cart-token')

    let response = await fetch(`${SHOP_API_URL}/cart/add-item`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Nonce': `${nonce}`,
            'Cart-token': `${cartToken}`
        },
        body: JSON.stringify({
            id: item.id,
            quantity: item.quantity
        })
    })

    let data = await response.json()

    return json(data)
}