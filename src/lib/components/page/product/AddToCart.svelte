<script lang=ts>
    import type {
        Product,
        ShopPage,
        ComponentProductProductName,
    } from "../../../../__generated__/graphql.js";
    import ProductItem from "../product/Product.svelte";
    import { page } from "$app/stores";
    import { goto, invalidateAll } from "$app/navigation";

    export let product: Product
    export let wine: ComponentProductProductName[]

    let volume: number = 0
    let quantity: number = 1
    $:quantity

    wine.forEach((item)=>{
        if(item.quantity){
            volume += Number(item.volume) * Number(item.quantity)
        } else {
            volume += Number(item.volume)
        }
    })

    function adjustQunatity(direction: "add" | "substract"){
        if(direction === "add"){
            quantity += 1
        }
        if(direction === "substract" && quantity > 1) {
            quantity -= 1
        }
    }

    async function addToCart() {
        const response = await fetch ('/api/cart/add-item', {
            method: "POST",
            body: JSON.stringify({
                quantity: quantity,
                id: product.productCode
            })
        })
        invalidateAll()
    }



</script>

<div class="w-full border-l hidden md:block border-brown sticky md:top-20 lg:top-28">
    <div class="p-5 lg:p-10 flex flex-col space-y-6">
        <div>
            <p class="text-brown font-sansy uppercase">{product.productType?.data?.attributes?.productType}</p>
            {#if wine.length > 1 }
                <div class="mt-2">
                    {#each wine as el }
                        <p class="text-xs font-serif italic text-gray">{el.quantity} x {el.vina?.data?.attributes?.name}</p>
                    {/each}
                </div>
            {/if}
        </div>
        <div>
            <p class="font-serif text-gray text-2xl">{Number(product.regularPrice).toFixed(2)} лв.</p>
            <p class="font-serif text-brown text-sm">{(Number(product.regularPrice)/volume).toFixed(2)} лв./л</p>
        </div>
        <div class="flex space-x-3 lg:space-x-6">
            <div class="border border-brown justify-between w-16 h-10 rounded-md flex">
                <div class="flex flex-col items-center justify-center w-full">
                    <p class="text-brown font-serif">{quantity}</p>
                </div>
                <div class="flex border-l border-brown flex-col w-8">
                    <button
                        on:click={async()=>{
                            adjustQunatity("add")
                        }}
                        class="h-full items-center flex justify-center relative"><span class="w-2 absolute h-0.5 rounded-full bg-brown"></span><span class="w-2 absolute rotate-90 h-0.5 rounded-full bg-brown"></span></button>
                    <div class="h-0.5 w-full bg-brown"></div>
                    <button
                        on:click={()=>{
                            adjustQunatity("substract")
                            
                        }}
                        class="h-full items-center flex justify-center"><span class="w-2 h-0.5 rounded-full bg-brown"></span></button>
                </div>
            </div>
            <button 
                on:click={async ()=>{
                    await addToCart()
                    goto('/shop/checkout')
                }}
                class="uppercase font-sansy text-white bg-brown bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 px-5 lg:px-10">Добави</button>
        </div>
        <ProductItem 
            packageTitle={product.packageTitle}
            wine={wine}
        />
    </div>
</div>

<div class="fixed bottom-0 w-full md:hidden">
    <div class="h-10 w-full bg-gradient-to-t from-white to-[rgba(0,0,0,0)]"></div>
    <div class="bg-white w-full flex flex-col space-y-1 items-center justify-center px-3 pb-4">
        {#if wine.length > 1}
            <p class="font-serif italic text-center leading-tight text-gray text-lg">{product.packageTitle}</p>
        {:else}
            <p class="font-serif italic text-center leading-tight text-gray text-lg">{wine[0].vina?.data?.attributes?.name}</p>
        {/if}
        <div class="flex items-baseline space-x-2">
            <p class="font-serif text-gray text-lg">{Number(product.regularPrice).toFixed(2)} лв.</p>
            <p class="font-serif text-brown text-sm">({(Number(product.regularPrice)/volume).toFixed(2)} лв./л)</p>
        </div>
        <button
            on:click={async()=>{
                await addToCart()
                goto('/shop/checkout')
            }}
            class="w-full h-12 bg-brown bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 rounded-md">
            <p class="uppercase font-sansy text-white">Добави в количка</p>
        </button>
    </div>
</div>