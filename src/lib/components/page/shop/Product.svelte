<script lang=ts>
    import { page } from "$app/stores";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import { invalidateAll } from "$app/navigation";
    import type { Product } from "$lib/types/payloadTypes";

    export let wine: Product

    async function addToCart() {
        const response = await fetch ('/api/cart/add-item', {
            method: "POST",
            body: JSON.stringify({
                quantity: 1,
                id: wine.productId
            })
        })
        invalidateAll()
    }
     
</script>

{#if wine && wine.productBasicInformation }
    <article class="group relative">
        <button
            on:click={()=>{
                addToCart()
            }}
            class="absolute z-10 top-3 right-3 bg-brown h-8 w-8 rounded-full opacity-0 md:hover:scale-110 md:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center ">
            <div class="h-0.5 rounded-full w-4 absolute bg-white"></div>
            <div class="h-0.5 rounded-full w-4 absolute rotate-90 bg-white"></div>
        </button>

        <a class="" href="{$page.params.lang ? "/"+$page.params.lang+"/shop/"+ wine.slug : "/bg/shop/"+wine.slug}">
            <div class="w-full flex flex-col items-center pt-14 pb-10 px-5 relative h-full border border-brown md:group-hover:border-opacity-100 transition-all duration-300 border-opacity-40 rounded-lg">
                <p class="absolute -top-2 text-xs uppercase font-sansy text-brown bg-white px-3">{wine.productKind}</p>
                {#if wine.productBundle.length == 0 }
                    {#if wine.productBasicInformation.img }
                        <div class="">
                            <img class="pb-4 object-contain h-60" src="{PUBLIC_IMG_URL + wine.productBasicInformation.img.url}" alt="{wine.productBasicInformation.img.alt}">
                        </div>
                    {/if}
                    <h3 class="text-brown italic font-serif text-lg text-center leading-tight">{wine.productTitle}</h3>
                    <p class="text-brown opacity-80 pb-4 font-serif text-center">{new Date(wine.productBasicInformation.harvestYear).getFullYear()}</p>
                    <div class="">
                        {#if wine.saleGroup.onSale == "_1" && wine.priceManagement.salePrice && Number(wine.priceManagement.salePrice) < Number(wine.priceManagement.regularPrice) }
                            <p class="text-gray italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.salePrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.salePrice))/2).toFixed(2) +" €"} </p>
                        {:else}
                            <p class="text-gray italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.regularPrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.regularPrice))/2).toFixed(2) +" €"} </p>
                        {/if}
                    </div>
                    <p class="text-brown opacity-80 font-sansy text-center">{wine.stockManagement.volume.replace("_", "")} ml</p>
                {/if}


                <div class="w-full flex flex-col items-center">
                    {#if wine.productBundle.length == 2 }
                        <div class="grid grid-cols-2 h-52 w-full">
                            {#each wine.productBundle as el }
                                <div class="relativ w-full flex justify-center">
                                    <img class="object-contain absolute max-w-[70px] -translate-x-8 scale-95 opacity-80 object-contain h-52" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                    <img class="object-contain absolute opacity-80 translate-x-8 scale-95 max-w-[70px] object-contain h-52" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                    <img class="object-contain absolute max-w-[70px] object-contain h-52" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                </div>
                            {/each}
                        </div>
                        <div class="w-full flex flex-col items-center pt-10">
                            <h3 class="text-brown italic font-serif text-lg text-center leading-tight">{wine.productTitle}</h3>
                            <div class="flex flex-col items-center pt-2">
                                {#each wine.productBundle as el }
                                    <div class="flex space-x-1">
                                        <p class="text-gray text-xs font-serif">{el.quantity}</p>
                                        <p class="text-gray whitespace-nowrap text-xs font-serif">{el.product.productTitle}</p>
                                        <p class="text-gray text-xs font-serif">{new Date(el.product.productBasicInformation.harvestYear).getFullYear()}</p>
                                        <p class="text-gray whitespace-nowrap text-xs font-serif">{el.product.stockManagement.volume.replace("_", "")} ml</p>
                                    </div>
                                {/each}
                            </div>
                            <div>
                                {#if wine.saleGroup.onSale == "_1" && wine.priceManagement.salePrice && Number(wine.priceManagement.salePrice) < Number(wine.priceManagement.regularPrice) }
                                    <p class="text-gray pt-1 italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.salePrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.salePrice))/2).toFixed(2) +" €"} </p>
                                {:else}
                                    <p class="text-gray pt-1 italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.regularPrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.regularPrice))/2).toFixed(2) +" €"} </p>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
    
                <div class="w-full flex flex-col items-center">
                    {#if wine.productBundle.length == 3 }
                        <div class="grid grid-cols-3 h-52 w-full pb-4">
                            {#each wine.productBundle as el }
                                <div class="relative flex justify-center -translate-x-2">
                                    <img class="object-contain absolute object-contain translate-x-4 opacity-80 scale-95 h-52" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                    <img class="object-contain object-contain absolute h-52" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                </div>
                            {/each}
                        </div>
                        <div class="w-full flex flex-col items-center pt-10">
                            <h3 class="text-brown italic font-serif text-lg text-center leading-tight">{wine.productTitle}</h3>
                            <div class="flex flex-col items-center pt-2">
                                {#each wine.productBundle as el }
                                    <div class="flex">
                                        <p class="text-gray text-xs font-serif">{el.quantity}&nbsp;x&nbsp;</p>
                                        <p class="text-gray whitespace-nowrap text-xs font-serif">{el.product.productTitle} &nbsp;</p>
                                        <p class="text-gray text-xs font-serif">{new Date(el.product.productBasicInformation.harvestYear).getFullYear()} &nbsp;</p>
                                        <p class="text-gray whitespace-nowrap text-xs font-serif">{el.product.stockManagement.volume.replace("_", "")} ml</p>
                                    </div>
                                {/each}
                            </div>
                            <div>
                                {#if wine.saleGroup.onSale == "_1" && wine.priceManagement.salePrice && Number(wine.priceManagement.salePrice) < Number(wine.priceManagement.regularPrice) }
                                    <p class="text-gray pt-1 italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.salePrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.salePrice))/2).toFixed(2) +" €"} </p>
                                {:else}
                                    <p class="text-gray pt-1 italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.regularPrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.regularPrice))/2).toFixed(2) +" €"} </p>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>


                <div class="w-full flex flex-col items-center">
                    {#if wine.productBundle.length > 3 }
                        <div class="grid grid-cols-3 h-52 w-full pb-4 -translate-x-4">
                            {#each wine.productBundle as el, i }
                            <div class="flex flex-col items-center">
                                <img class="object-contain h-52 {i > 2 ? " -translate-y-full translate-x-8 scale-95 z-0 opacity-90" : "scale-100 z-10"}" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                            </div>
                            {/each}
                        </div>
                        <div class="flex flex-col items-center space-y-10">
                            <div class="w-full flex flex-col items-center pt-10">
                                <h3 class="text-brown italic font-serif text-lg text-center leading-tight">{wine.productTitle}</h3>
                                <div class="flex flex-col items-center">
                                    {#each wine.productBundle as el }
                                        <div class="flex flex-wrap justify-center space-x-1">
                                            <p class="text-gray text-xs font-serif">{el.quantity}</p>
                                            <p class="text-gray whitespace-nowrap text-xs font-serif">{Number(el.product.productTitle?.length) > 25 ? el.product.productTitle?.slice(0, 25) + ".." : el.product.productTitle}</p>
                                            <p class="text-gray text-xs font-serif">{new Date(el.product.productBasicInformation.harvestYear).getFullYear()}</p>
                                            <p class="text-gray whitespace-nowrap text-xs font-serif">{el.product.stockManagement.volume.replace("_", "")} ml</p>
                                        </div>
                                    {/each}
                                </div>
                                <div>
                                    {#if wine.saleGroup.onSale == "_1" && wine.priceManagement.salePrice && Number(wine.priceManagement.salePrice) < Number(wine.priceManagement.regularPrice) }
                                        <p class="text-gray pt-1 italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.salePrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.salePrice))/2).toFixed(2) +" €"} </p>
                                    {:else}
                                        <p class="text-gray pt-1 italic font-serif text-lg text-center">{$page.params.lang === "bg" ? (Number(wine.priceManagement.regularPrice)).toFixed(2) +" лв." : ((Number(wine.priceManagement.regularPrice))/2).toFixed(2) +" €"} </p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </a>
    </article>
{/if}