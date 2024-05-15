
<script lang='ts'>
    import { browser } from '$app/environment';
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    export let data
    export let form
    console.log(form)

    const translations = {
        bg: [
            {
                status: [201],
                heading: "Поръчката беше завършена успешно!",
                message: "На посоченият от Вас имейл, ще получите потвържение на поръчката. Скоро ще се свържем с Вас, за да уточним детайлите по доставката.",
                signature: "Винарско имение Санта Сара",
                button: "Към начало"
            },
            {
                status: [402, 400],
                heading: "Неуспешна поръчка!",
                message: "Възникна грешка при обработката на картовото разплащане. Ако видите това съобщение отново, моля да се свържете с нас, на посочените контактни данни в долната част на страницата.",
                signature: "Винарско имение Санта Сара",
                button: "Опитайте отново"
            },
            {
                status: [403],
                heading: "Нямаме данни за скорошно направена от Вас поръчка!",
                message: "Ако сте направили поръчка, но не получавате потвържение, моля да се свържете с нас, на посочените контактни данни в долната част на страницата.",
                signature: "Винарско имение Санта Сара",
                button: "Към начало"
            }
        ],
        en: [
            {
                status: [201],
                heading: "Order completed successfully!",
                message: "Shortly, you will receive an email confirmation of your order. We will contact you soon to confirm the delivery details.",
                signature: "Santa Sara Winery",
                button: "Go to homepage"
            },
            {
                status: [402, 400],
                heading: "Order unsuccessful!",
                message: "An error occurred during the processing of the card payment. If you see this message again, please contact us using the contact details at the bottom of the page.",
                signature: "Santa Sara Winery",
                button: "Try again"
            },
            {
                status: [403],
                heading: "No data found for your recent order!",
                message: "If you have placed an order but have not received a confirmation, please contact us using the contact details at the bottom of the page.",
                signature: "Santa Sara Winery",
                button: "Go to homepage"
            }
        ]
    }

    onMount(async () => {
        if(form?.success === true) return
        if(data.status !== 201) return
        console.log("Status checked")
        if(data.method !== "other_method") return
        console.log("Method checked")

        try {
            let orderForm = document.forms.namedItem("order")
            if(orderForm) orderForm.submit()
            return { success: false, error: "An error occurred during checkout" };
        } catch (error) {
            console.error(error);
            return { success: false, error: "An error occurred during checkout" };
        }
    })
</script>

<div class="pt-52 flex flex-col space-y-10 items-center justify-center p-5">
    {#if data.status === 201}
        <div class="p-10 rounded-sm bg-brown max-w-md flex flex-col items-center *:text-white *:text-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-white" height="50" width="50" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            <h1 class="font-sansy bold text-2xl">{data.lang === 'BG' ? translations.bg[0].heading : translations.en[0].heading}</h1>
            <p>{data.lang === 'BG' ? translations.bg[0].message : translations.en[0].message}</p>
            <div class="w-full flex flex-col items-center">
                <p>{data.lang === 'BG' ? translations.bg[0].signature : translations.en[0].signature}</p>
            </div>
        </div>
        <a
            class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1"
            href={$page.params.lang ? "/" + $page.params.lang : "/bg"}
        >
            {data.lang === 'BG' ? translations.bg[0].button : translations.en[0].button}
        </a>
    {:else if data.status === 402 || data.status === 400}
        <div class="p-10 rounded-sm bg-brown max-w-md flex flex-col items-center *:text-white *:text-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-white" height="50" width="50" viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
            <h1 class="font-sansy bold text-2xl">{data.lang === 'BG' ? translations.bg[1].heading : translations.en[1].heading}</h1>
            <p>{data.lang === 'BG' ? translations.bg[1].message : translations.en[1].message}</p>
            <div class="w-full flex flex-col items-center">
                <p>{data.lang === 'BG' ? translations.bg[1].signature : translations.en[1].signature}</p>
            </div>
        </div>
        <a
            class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1"
            href={$page.params.lang ? "/" + $page.params.lang + "/shop/checkout" : "/bg/shop/checkout"}
        >
            {data.lang === 'BG' ? translations.bg[1].button : translations.en[1].button}
        </a>

    {:else if data.status === 403}
        <div class="p-10 rounded-sm bg-brown max-w-md flex flex-col items-center *:text-white *:text-center space-y-4">
            <h1 class="font-sansy bold text-2xl">{data.lang === 'BG' ? translations.bg[2].heading : translations.en[2].heading}</h1>
            <p>{data.lang === 'BG' ? translations.bg[2].message : translations.en[2].message}</p>
            <div class="w-full flex flex-col items-center">
                <p>{data.lang === 'BG' ? translations.bg[2].signature : translations.en[2].signature}</p>
            </div>
        </div>
        <a
            class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1"
            href={$page.params.lang ? "/" + $page.params.lang : "/bg"}
        >
            {data.lang === 'BG' ? translations.bg[2].button : translations.en[2].button}
        </a>
    {/if}
</div>

{#if browser }
    <form use:enhance class="hidden" id="order" action="?/order" method="POST">
        <input
            hidden
            autocomplete="off"
            aria-hidden="true"
            name="customerNote"
            type="text"
            value={window.sessionStorage.getItem("customerNote")}
        />
    </form>
{/if}
