<script lang=ts>
    import { PUBLIC_IMG_URL } from "$env/static/public";
    export let wine: any;
</script>

<article class="border-y border-brown border-opacity-40">
        <div class="w-full flex flex-col items-center pt-14 pb-10 px-5 relative h-full ">
            {#if wine.productBundle.length == 0 }
                <div class="">
                    <img class="pb-4 h-52" src="{PUBLIC_IMG_URL + wine.productBasicInformation.img.url}" alt="{wine.productBasicInformation.img.alt}">
                </div>
                <h3 class="text-brown italic font-serif text-lg text-center">{wine.productTitle}</h3>
            {/if}

            <div class="w-full flex flex-col items-center">
                {#if wine.productBundle.length == 2 }
                    <div class="grid grid-cols-2 h-48 w-full">
                        {#each wine.productBundle as el }
                            <div class="relativ w-full flex justify-center">
                                <img class="class absolute max-w-[70px] -translate-x-6 scale-95 opacity-80 object-contain h-40" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                <img class="class absolute opacity-80 translate-x-6 scale-95 max-w-[70px] object-contain h-40" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                <img class="class absolute max-w-[70px] object-contain h-40" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                            </div>
                        {/each}
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{wine.productTitle}</h3>
                {/if}
            </div>

            <div class="w-full flex flex-col items-center">
                {#if wine.productBundle.length == 3 }
                    <div class="grid grid-cols-3 h-48 w-full pb-4">
                        {#each wine.productBundle as el }
                            <div class="relative flex justify-center -translate-x-2">
                                <img class="class absolute translate-x-4 opacity-80 scale-95 h-40" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                                <img class="class absolute h-40" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                            </div>
                        {/each}
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{wine.productTitle}</h3>
                {/if}
            </div>


            <div class="w-full flex flex-col items-center">
                {#if wine.productBundle.length > 3 }
                    <div class="grid grid-cols-3 h-48 w-full pb-4 -translate-x-4">
                        {#each wine.productBundle as el, i }
                        <div class="flex flex-col items-center">
                            <img class="class h-40 {i > 2 ? " -translate-y-full translate-x-6 scale-95 z-0 opacity-90" : "scale-100 z-10"}" src="{PUBLIC_IMG_URL + el.product.productBasicInformation.img.url}" alt="{el.product.productBasicInformation.img.alt}">
                        </div>
                        {/each}
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{wine.productTitle}</h3>
                {/if}
            </div>
        </div>
</article>