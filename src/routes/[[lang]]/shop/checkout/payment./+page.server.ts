import { json } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url, params, request }) => {
 console.log(request)

 return request.body
}