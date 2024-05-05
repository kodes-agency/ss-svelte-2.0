
<script lang='ts'>
    import { page } from '$app/stores';
    import { PUBLIC_SHOP_API_URL } from '$env/static/public';
    import { onMount } from 'svelte';
    export let data

    onMount(async () => {
        if(data.status !== 201) return
        if(!data.cookies?.nounce || !data.cookies.cartToken) return

        try {
            let order = {
                billing_address: {},
                customerNote: window.localStorage.getItem("customerNote") || "",
                payment_method: "cod",
                create_account: false,
            };

            let checkoutReq = await fetch(PUBLIC_SHOP_API_URL + "/cart", {
                headers: {
                Nonce: `${data.cookies?.nounce}`,
                "Cart-token": `${data.cookies?.cartToken}`,
                },
            });

            let wooReq = await fetch(PUBLIC_SHOP_API_URL + "/checkout", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Nonce: `${data.cookies?.nounce}`,
                "Cart-token": `${data.cookies?.cartToken}`,
                },
                body: JSON.stringify(order),
            });

            console.log(wooReq);

            return { success: true };

        } catch (error) {
            console.error(error);
            return { success: false, error: "An error occurred during checkout" };
        }
    })


</script>

<div class=" pt-52 flex flex-col space-y-10 items-center justify-center p-5">
    {#if data.status === 201 }     
        <div class="p-10 rounded-sm bg-brown max-w-md flex flex-col items-center *:text-white *:text-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-white" height="50" width="50" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>            
            <h1 class=" font-sansy bold text-2xl">Поръчката беше заплатена успешно!</h1>
            <p>На посоченият от Вас имейл, ще получите потвържение на поръчката. Скоро ще се свържем с Вас, за да уточним детайлите по доставката.</p>
            <div class=" w-full flex flex-col items-start">
                <p>С уважение,</p>
                <p>Винарско имение Санта Сара</p>
            </div>
        </div>
        <a 
            class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1" 
            href={$page.params.lang ? "/" + $page.params.lang : "/bg" }
        >Към начало</a>
    {:else if data.status === 402 || data.status === 400}
        <div class="p-10 rounded-sm bg-brown max-w-md flex flex-col items-center *:text-white *:text-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-white" height="50" width="50" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
            <h1 class=" font-sansy bold text-2xl">Неуспешна поръчка!</h1>
            <p>Възникна грешка при обработката на картовото разплащане. Ако видите това съобщение отново, моля да се свържете с нас, на посочените контактни данни в долната част на страницата.</p>
            <div class=" w-full flex flex-col items-start">
                <p>С уважение,</p>
                <p>Винарско имение Санта Сара</p>
            </div>
        </div>
        <a 
            class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1" 
            href={$page.params.lang ? "/" + $page.params.lang + "/shop/checkout" : "/bg/shop/checkout" }
        >Опитайте отново</a>

    {:else if data.status === 403}
        <div class="p-10 rounded-sm bg-brown max-w-md flex flex-col items-center *:text-white *:text-center space-y-4">
            <h1 class=" font-sansy bold text-2xl">Нямаме данни за скорошно направена от Вас поръчка! </h1>
            <p>Ако сте направили поръчка, но не получавате потвържение, моля да се свържете с нас, на посочените контактни данни в долната част на страницата. </p>
            <div class=" w-full flex flex-col items-start">
                <p>С уважение,</p>
                <p>Винарско имение Санта Сара</p>
            </div>
        </div>
    {/if}
</div>