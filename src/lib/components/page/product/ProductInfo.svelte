<script lang=ts>
    import Awards from "../product/Awards.svelte";
    import { page } from "$app/stores";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import { slide } from "svelte/transition";
    

    export let wine: any;
    export let pageData: any;
    export let many: boolean;
    export let wineTypes: any
    export let closingTypes: any

    let wineType = wineTypes.find((el:any)=>el.filterName === wine.productBasicInformation.wineSort)
    let closingType = closingTypes.find((el:any)=>el.value === wine.wineDetails.bottleClosingType)

    let isOpen: boolean = false 

</script>

<article class="max-w-4xl flex flex-col space-y-10 p-5">
    {#if many }    
        <div>
            <h2 class="font-serif italic text-center text-2xl md:text-3xl text-gray">{wine.productTitle}</h2>
            <p class="text-center font-sansy text-brown md:mt-2">{new Date(wine.productBasicInformation.harvestYear).getFullYear()}</p>
        </div>
    {/if}
    <div class="flex flex-col items-center h-20 md:h-32 ">
      <img class="-translate-y-1/3 -mt-3 w-20 md:w-32 object-contain rotate-90" src="{PUBLIC_IMG_URL+wine.productBasicInformation.img.url}" alt={wine.productBasicInformation.img.alt}>
    </div>
    <div>
      <p class="text-center italic text-gray pt-5 font-serif">{wine.productBasicInformation.longDescription}</p>
    </div>
    <div class="flex flex-col items-center {isOpen ? "hidden" : ""}">
        <button
            class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
            on:click={()=>{
                isOpen = !isOpen
            }}
        >
          {pageData.shop.buttonLearnMore}
        </button>
    </div>
    {#if isOpen }
        <section transition:slide class="flex flex-col items-center space-y-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-4xl">
                {#if wine.productBasicInformation && wine.productBasicInformation.wineSort }
                    <div class="flex flex-col items-center space-y-1 m-4 mx-20 ">
                        <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.shop.filterWineType}</h2>
                        <p class="text-gray whitespace-nowrap font-serif italic">{wineType.wineType}</p>
                    </div>
                {/if}
                {#if wine.stockManagement.volume }          
                    <div class="flex flex-col items-center space-y-1 m-4">
                        <h2 class="text-brown up whitespace-nowrap font-sansy text-center">{pageData.wines.bottleVolumeSize}</h2>
                        <p class="text-gray whitespace-nowrap font-serif italic">{wine.stockManagement.volume.replace("_", "")} ml</p>
                    </div>
                {/if}
                {#if wine.wineDetails.alchoholContent }
                    <div class="flex flex-col items-center space-y-1 m-4">
                        <h2 class="text-brown up whitespace-nowrap font-sansy text-center">{pageData.wines.alchoholContent}</h2>
                        <p class="text-gray whitespace-nowrap font-serif italic">{Number(wine.wineDetails.alchoholContent).toFixed(2)}</p>
                    </div>
                {/if}
                {#if wine.wineDetails.bottleClosingType }
                    <div class="flex flex-col items-center space-y-1 m-4 mx-20">
                        <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.wines.closingType}</h2>
                        <p class="text-gray whitespace-nowrap font-serif italic">{closingType.name}</p>
                    </div>
                {/if}
            </div>

            {#if wine.productBasicInformation.wineAwards && wine.productBasicInformation.wineAwards.length > 0}
                <Awards heading={pageData.wines.rewardsTitle} awards={wine.productBasicInformation.wineAwards} />
            {/if}
            {#if wine.wineRemarks.food }   
                <div class="flex flex-col items-center space-y-2">
                    <h2 class="font-serif italic text-center text-2xl text-gray">{pageData.wines.food}</h2>
                    <p class="text-center italic text-gray font-serif max-w-2xl">{wine.wineRemarks.food}</p>
                </div>
            {/if} 
            {#if wine.wineRemarks.degustation }   
                <div class="flex flex-col items-center space-y-2">
                    <h2 class="font-serif italic text-center text-2xl text-gray">{pageData.wines.degustation}</h2>
                    <p class="text-center italic text-gray font-serif max-w-2xl">{wine.wineRemarks.degustation}</p>
                </div>
            {/if} 
            {#if wine.productType.productPosition == 'catalog_shop'}
                <a
                    href="{$page.params.lang ? "/"+$page.params.lang+"/wines/"+wine.slug : "/bg/wines/"+wine.slug}"
                    class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
                    on:click={()=>{
                        isOpen = !isOpen
                    }}
                >
                    {pageData.shop.buttonLearnMore}
                </a>
            {/if}
        </section>
    {/if}
</article>