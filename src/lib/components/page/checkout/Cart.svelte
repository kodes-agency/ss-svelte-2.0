<script lang=ts>
    import type { Order } from "$lib/types/orderTypes"
    import CheckoutItem from "./CheckoutItem.svelte";
    import { page } from "$app/stores";
    import { slide } from "svelte/transition";
    export let toggleSteps: any
    export let nextButton: any = "Напред"
    export let cart: Order    
</script>

<section class="flex flex-col items-center py-10 md:py-20 h-screen">
    <div class="flex flex-col items-center space-y-10 md:space-y-20 max-w-5xl w-full">
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
                <h1 class="font-serif text-2xl md:text-3xl italic text-gray">Сума</h1>
                <p class="font-serif text-2xl md:text-3xl text-brown">{(Number(cart.totals.total_price)/100).toFixed(2)} лв.</p>
            </div>
            <a 
                href="{$page.params.lang ? "/"+$page.params.lang+"/shop" : "/bg/shop"}"
                class="uppercase flex items-center justify-center font-sansy text-sm text-brown h-8 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500">Продължи с пазаруването</a>
        </div>
        <section class="flex flex-col w-full space-y-10">
            <div class="md:flex w-full px-6 hidden">
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

                    {#each cart.items as el, i }
                        <div transition:slide>
                            <CheckoutItem 
                                name={el.name}
                                price={el.prices.price}
                                quantity={el.quantity}
                                cartItemKey={el.key}
                            />
                        </div>
                        {#if cart.items.length != i+1 }
                            <div class="w-full bg-brown bg-opacity-40 h-px"></div>
                        {/if}
                    {/each}
            </div>
            <div class="w-full flex flex-col items-end pt-10">
                <button
                    on:click={()=>{
                        toggleSteps("forwards")
                    }}
                    class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1">{nextButton}
                </button>
            </div>
        </section>
    </div>
</section>