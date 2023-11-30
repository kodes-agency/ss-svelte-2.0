import { json } from '@sveltejs/kit'
import { SHOP_API_URL } from '$env/static/private';

export async function POST({request, cookies, fetch}){

    const item = await request.json()

    let nonce = cookies.get('nonce')
    let cartToken = cookies.get('cart-token')

    let response = await fetch(`${SHOP_API_URL}/cart/update-item`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Nonce': `${nonce}`,
            'Cart-token': `${cartToken}`
        },
        body: JSON.stringify({
            key: item.key,
            quantity: (item.quantity)
        })
    })

    return json(item)
}