<script lang="ts">
  import type {
    Product,
    ShopPage,
    ComponentProductProductName,
    SingleWinePage
  } from "../../../../__generated__/graphql.js";
  import { page } from "$app/stores";
  import { PUBLIC_IMG_URL } from "$env/static/public";

  import { isInverted } from "$lib/store/store.js";
  import Awards from "$lib/components/page/wineSingle/Awards.svelte";

  export let data;

  let product: Product;
  let pageData: ShopPage;
  let wines: ComponentProductProductName[]
  let winePageData: SingleWinePage
  $: product = data.data.products.data[0].attributes
  $: pageData = data.data.shopPage?.data?.attributes;
  $: winePageData = data.data.singleWinePage?.data?.attributes;
  $isInverted = false;

  $: wines = data.data.products.data[0].attributes.wine

</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
  <section class="flex flex-col items-center space-y-10">
    <div class="flex flex-col items-center space-y-4">
      <p class="font-sansy uppercase text-brown">{pageData.singleProductHeading}</p>
      <div class="w-16 h-px bg-brown"></div>
    </div>
    {#if wines?.length > 1}
      <div class="flex flex-col space-y-6">
        <h1 class="font-serif text-4xl text-gray">{product?.packageTitle}</h1>
        <div class="flex flex-col items-center space-y-1">
          {#each wines as el }
            <p class="text-center font-serif italic text-xl text-gray">{el.quantity} x {el.vina?.data?.attributes?.name}</p>
          {/each}
          <p class="font-sansy uppercase pt-6 text-brown">{product.productType?.data?.attributes?.productType}</p>
        </div>
      </div>
    {:else}
      <div>
        <h1 class="font-serif text-4xl text-gray">{wines[0]?.vina?.data?.attributes?.name}</h1>
        <p class="text-center font-sansy mt-4 text-brown">{wines[0].vintage}</p>
      </div>
    {/if} 
  </section>
  <div id="container-flex-row">
    <section class="flex flex-col space-y-16 items-center">
        {#each wines as el }
          <article class="max-w-4xl flex flex-col space-y-10">
            {#if wines.length > 1 }
            <div>
              <h2 class="font-serif italic text-center text-3xl text-gray">{el.vina?.data?.attributes?.name}</h2>
              <p class="text-center font-sansy text-brown mt-4">{el.vintage}</p>
            </div>
            {/if}
            <div class="flex flex-col items-center h-20 md:h-32 lg:h-48">
              <img class="-translate-y-1/3 -mt-3 w-20 md:w-32 lg:w-48 object-contain rotate-90" src="{PUBLIC_IMG_URL+el.vina?.data?.attributes?.image?.data?.attributes?.url}" alt="">
            </div>
            <div>
              <p class="text-center italic text-gray font-serif">{el.vina?.data?.attributes?.longDescription}</p>
            </div>
            <button
            >
              Научи повече
            </button>
            {#if wines }
              <section class="flex flex-col items-center space-y-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-4xl">
                  <div class="flex flex-col items-center space-y-1 m-4 mx-20 ">
                    <h2 class="text-brown whitespace-nowrap font-sansy text-center">Тип вино</h2>
                    <p class="text-gray whitespace-nowrap font-serif italic">{el.vina?.data?.attributes?.wineType?.data?.attributes?.wineType}</p>
                  </div>
                  <div class="flex flex-col items-center space-y-1 m-4">
                      <h2 class="text-brown up whitespace-nowrap font-sansy text-center">{winePageData.volume}</h2>
                      <p class="text-gray whitespace-nowrap font-serif italic">{Number(el.volume).toFixed(3)} L</p>
                  </div>
                  <div class="flex flex-col items-center space-y-1 m-4">
                    <h2 class="text-brown up whitespace-nowrap font-sansy text-center">{winePageData.alchohol}</h2>
                    <p class="text-gray whitespace-nowrap font-serif italic">{Number(el.vina?.data?.attributes?.wineDetails?.alchohol).toFixed(2)}</p>
                  </div>
                  <div class="flex flex-col items-center space-y-1 m-4 mx-20">
                    <h2 class="text-brown whitespace-nowrap font-sansy text-center">{winePageData.closing}</h2>
                    <div class="flex space-x-2">
                        {#each el.vina.data?.attributes?.wineDetails?.closing.data as element }
                            <p class="text-gray whitespace-nowrap font-serif italic">{element.attributes.capType}</p>
                        {/each}
                    </div>
                  </div>
                </div>
                {#if el.vina?.data?.attributes?.wineAwards?.length > 0}
                  <Awards heading={winePageData.rewardsHeading} awards={el.vina?.data?.attributes?.wineAwards} />
                {/if}
                <div class="flex flex-col items-center space-y-2">
                  <h2 class="font-serif italic text-center text-2xl text-gray">{winePageData.food}</h2>
                  <p class="text-center italic text-gray font-serif max-w-2xl">{el.vina?.data?.attributes?.wineInformation?.food}</p>
                </div>
              </section>
            {/if}
          </article>
        {/each}
    </section>
  </div>
</div>
