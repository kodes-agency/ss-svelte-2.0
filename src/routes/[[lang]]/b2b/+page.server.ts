import query from "$lib/db/layoutPages";
import { PUBLIC_API_URL, PUBLIC_GRAPHQL_URL } from "$env/static/public";
import { z } from "zod";
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const b2bFormSchema = z.object({
  email: z.string().email({message: 'Invalid email address'}),
  phoneNumber: z.string().regex(phoneRegex, 'Invalid phone number').min(5, {message: 'Invalid phone number'}).refine(value => value != '', 'Phone number is required'),
  offering: z.string(),
  knowledge: z.string(),
  interests: z.enum(['Бели вина', 'Червени вина', 'Розе вина', 'Колекционни вина', 'Посещения']).array(),
  businessActivity: z.string(),
  companyName: z.string(),
  contactPerson: z.string(),
});


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params}) => {
    try { 
        const response = await fetch(PUBLIC_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query(params.lang ? params.lang : "bg", "b2b"),
            })
        });
        
        const data = await response.json();

        const form = await superValidate(zod(b2bFormSchema))
        
        return {
            b2bPageData: data.data.Pages.docs[0],
            form
        }
    } catch (error) {
        console.log(error);
    }
}

export const actions = {
  default: async ({ request, fetch }) => {
    const form = await superValidate(request, zod(b2bFormSchema));

    // console.log(form)

    if (!form.valid) {
      // Again, return { form } and things will just work.
      return fail(400, { form });
    }

    let data = {
      email: form.data.email,
      phone: form.data.phoneNumber,
      companyName: form.data.companyName,
      contactName: form.data.contactPerson,
      message: `Предмет на дейност: ${form.data.businessActivity} | \n
Интерес към: ${form.data.interests.join(", ")}| \n
Ниво на познание: ${form.data.knowledge}| \n
Текущо предлагане: ${form.data.offering}`
    };

    const req = await fetch(`${PUBLIC_API_URL}/messages`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const res = await req.json();

    if(!req.ok){
      return message(form, {success: false})
    }

    return message(form, {success: true})
  },
};
