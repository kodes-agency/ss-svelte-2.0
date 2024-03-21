<script lang=ts>
    import ProductItem from "../product/Product.svelte";
    import { goto, invalidateAll } from "$app/navigation";
    import { page } from "$app/stores";

    export let wine: any;
    export let pageData: any;
    export let productTypes: any;

    let productType = productTypes.find((el:any)=>el.value === wine.productKind)

    let volume: number = 0
    let quantity: number = 1
    let maxQuantity: number = 10

    // @ts-ignore
    $:maxQuantity
    $:quantity

    if(wine.productBundle.length > 0){  
        wine.productBundle.forEach((item:any)=>{
            let itemVolume = Number(item.product.stockManagement.volume.replace("_", ""))
            volume += itemVolume * item.quantity
        })
    } else {
        volume = Number(wine.stockManagement.volume.replace("_", ""))
    }


    function adjustQunatity(direction: "add" | "substract"){
        if(direction === "add" && quantity < maxQuantity){
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
                id: wine.productId
            })
        })
        invalidateAll()
    }
</script>

<div class="w-full border-l hidden md:block border-brown sticky md:top-20 lg:top-28">
    <div class="p-5 lg:p-10 flex flex-col space-y-6">
        <div>
            <p class="text-brown font-sansy uppercase">{productType.label}</p>
            {#if wine.productBundle.length > 1 }
                <div class="mt-2">
                    {#each wine.productBundle as el }
                        <p class="text-xs font-serif italic text-gray">{el.quantity} x {el.product.productTitle}</p>
                    {/each}
                </div>
            {/if}
        </div>
        {#if wine.priceManagement.salePrice && Number(wine.priceManagement.salePrice) < Number(wine.priceManagement.regularPrice) }
            <div>
                <p class="font-serif text-gray text-2xl">{$page.params.lang === "bg" ? (Number(wine.priceManagement.salePrice)).toFixed(2)+" лв." : (Number(wine.priceManagement.salePrice)/2).toFixed(2) +" €"}</p>
                <p class="font-serif text-brown text-sm">{$page.params.lang === "bg" ? ((Number(wine.priceManagement.salePrice)) / volume*1000).toFixed(2)+ " лв./л" : ((Number(wine.priceManagement.salePrice)) / volume*1000/2).toFixed(2)  +" €/L"} </p>
            </div>
        {:else}
            <div>
                <p class="font-serif text-gray text-2xl">{$page.params.lang === "bg" ? (Number(wine.priceManagement.regularPrice)).toFixed(2)+" лв." : (Number(wine.priceManagement.regularPrice)/2).toFixed(2) +" €"}</p>
                <p class="font-serif text-brown text-sm">{$page.params.lang === "bg" ? ((Number(wine.priceManagement.regularPrice)) / volume*1000).toFixed(2)+ " лв./л" : ((Number(wine.priceManagement.regularPrice)) / volume*1000/2).toFixed(2)  +" €/L"}</p>
            </div>
        {/if}
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
                disabled={wine.stockManagement.quantity && wine.stockManagement.quantity < 1}
                on:click={async ()=>{
                    await addToCart()
                    goto('/shop/checkout')
                }}
                class="uppercase font-sansy disabled:bg-gray disabled:bg-opacity-50 text-white bg-brown bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 whitespace-nowrap px-5">{pageData.shop.buttonAddToCart}</button>
        </div>
        <ProductItem 
            wine={wine}
        />
    </div>
</div>

<div class="fixed bottom-0 w-full md:hidden">
    <div class="h-10 w-full bg-gradient-to-t from-white to-[rgba(0,0,0,0)]"></div>
    <div class="bg-white w-full flex flex-col space-y-1 items-center justify-center px-3 pb-4">
        <p class="font-serif italic text-center leading-tight text-gray text-lg">{wine.productTitle}</p>

        {#if wine.priceManagement.salePrice && Number(wine.priceManagement.salePrice) < Number(wine.priceManagement.regularPrice) }
            <div class="flex items-baseline space-x-2">
                <p class="font-serif text-gray text-lg">{$page.params.lang === "bg" ? (Number(wine.priceManagement.salePrice)).toFixed(2)+" лв." : (Number(wine.priceManagement.salePrice)/2).toFixed(2) +" €"}</p>
                <p class="font-serif text-brown text-sm">{$page.params.lang === "bg" ? ((Number(wine.priceManagement.salePrice)) / volume*1000).toFixed(2)+ " лв./л" : ((Number(wine.priceManagement.salePrice)) / volume*1000/2).toFixed(2)  +" €/L"}</p>
            </div>
        {:else}
            <div class="flex items-baseline space-x-2">
                <p class="font-serif text-gray text-lg">{$page.params.lang === "bg" ? (Number(wine.priceManagement.regularPrice)).toFixed(2)+" лв." : (Number(wine.priceManagement.regularPrice)/2).toFixed(2) +" €"}</p>
                <p class="font-serif text-brown text-sm">{$page.params.lang === "bg" ? ((Number(wine.priceManagement.regularPrice)) / volume*1000).toFixed(2)+ " лв./л" : ((Number(wine.priceManagement.regularPrice)) / volume*1000/2).toFixed(2)  +" €/L"}</p>
            </div>
        {/if}
        <button
            disabled={wine.stockManagement.quantity && wine.stockManagement.quantity < 1}
            on:click={async()=>{
                await addToCart()
                goto('/shop/checkout')
            }}
            class="w-full h-12 bg-brown disabled:bg-gray disabled:bg-opacity-50 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 rounded-md">
            <p class="uppercase font-sansy text-white">{pageData.shop.buttonAddToCart}</p>
        </button>
    </div>
</div>