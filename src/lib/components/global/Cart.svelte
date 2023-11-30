<script lang=ts>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Input from "$lib/components/elements/global/Input.svelte";
    import CheckoutItem from "$lib/components/page/checkout/CheckoutItem.svelte";
    import type { Order } from "$lib/types/orderTypes"
    export let cart: Order    
</script>

<section class="flex flex-col items-center py-20 pt-52 h-screen">
    <div class="flex flex-col items-center space-y-20 max-w-5xl w-full">
        <div class="flex space-x-10">
            <div class="flex space-x-6">
                <h1 class="font-serif text-3xl italic text-gray">Количка</h1>
                <p class="font-serif text-3xl text-brown">{(Number(cart.totals.total_price)/100).toFixed(2)} лв.</p>
            </div>
            <a href="/shop" class="uppercase font-sansy text-sm text-brown h-8 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500">Продължи с пазаруването</a>
        </div>

        <section class="flex flex-col w-full space-y-10">
            <div class="flex w-full px-6">
                <div class="w-4/12">
                    <p class=" uppercase text-sm font-sansy text-brown">Продукт</p>
                </div>
                <div class="w-3/12">
                    <p class=" uppercase text-sm text-center font-sansy text-brown">Количество</p>
                </div>
                <div class="w-2/12"> 
                    <p class=" uppercase text-sm text-center font-sansy text-brown">Цена</p>
                </div>
                <div class="w-2/12">    
                    <p class=" uppercase text-sm text-center font-sansy text-brown">Общо</p>
                </div>
                <div class="w-1/12">

                </div>
            </div>
            <div class="flex flex-col border-y border-brown">
                {#if cart.items.length > 0 }
                    {#each cart.items as el, i }
                        <CheckoutItem 
                            name={el.name}
                            price={el.prices.price}
                            quantity={el.quantity}
                            cartItemKey={el.key}
                        />
                        {#if cart.items.length != i+1 }
                            <div class="w-full bg-brown h-px"></div>
                        {/if}
                    {/each}
                {/if}
            </div>
            <div class="w-full flex flex-col items-end pt-10">
                <button class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1">Напред</button>
            </div>
        </section>
    </div>
</section>
<section class="h-screen flex flex-col items-center">
    <div class="flex flex-col items-center space-y-20 max-w-4xl w-full">
        <form action="" class="w-full flex flex-col items-center space-y-10">
            <div class="w-full space-y-2 flex flex-col">
                <p class="uppercase text-sm font-sansy text-brown">Данни за фактуриране</p>
                <div class="w-full h-px bg-brown"></div>
            </div>
            <div class="flex space-x-8 w-full">
                <div class="flex flex-col space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Име и фамилия"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Име на фирма"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Област"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Номер къща/блок"
                        required={true}
                    />
                </div>
                <div class="h-full w-1 rounded-full bg-brown"></div>
                <div class="flex flex-col space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Държава"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Град"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Адрес"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Пощенски код"
                        required={true}
                    />
                </div>
                <div class="h-full w-1 rounded-full bg-brown"></div>
                <div class="flex flex-col space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Телефон"
                        required={true}
                    />
                    <Input 
                        type="email"
                        formClass="form-input"
                        label="Имел"
                        required={true}
                    />
                </div>
            </div>
            <div class="w-full space-y-2 flex flex-col">
                <div class="flex justify-between">
                    <p class="uppercase text-sm font-sansy text-brown">Данни за фактуриране</p>
                    <p class="uppercase text-sm font-sansy text-brown">Цена за доставка</p>
                </div>
                <div class="w-full h-px bg-brown"></div>
                <div class="flex p-3 justify-between">
                    <p class="italic text-gray font-serif">Стандартна доставка</p>
                    <p class="italic text-gray font-serif">5.99 лв.</p>
                </div>
                <div class="w-full h-px bg-brown"></div>
            </div>
            <div class="w-full space-y-2 flex flex-col">
                <p class="uppercase text-sm font-sansy text-brown">Метод на плащане</p>
                <div class="w-full h-px bg-brown"></div>
                <div class="flex p-3 space-x-40">
                    <p class="italic text-gray font-serif">С карта</p>
                    <p class="italic text-gray font-serif">В брой</p>
                </div>
                <div class="w-full h-px bg-brown"></div>
            </div>
            <div class="w-full flex flex-col items-end">
                <button class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1">Напред</button>
            </div>
        </form>
    </div>  
</section>
