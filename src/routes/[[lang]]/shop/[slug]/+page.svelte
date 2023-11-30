<script lang="ts">
  import type {
    Product,
    ShopPage,
    ComponentProductProductName,
    SingleWinePage
  } from "../../../../__generated__/graphql.js";
  import { page } from "$app/stores";
  import { isInverted } from "$lib/store/store.js";
  import Hero from "$lib/components/page/product/Hero.svelte";
  import ProductInfo from "$lib/components/page/product/ProductInfo.svelte";
  import AddToCart from "$lib/components/page/product/AddToCart.svelte";

  export let data;

  let product: Product;
  let pageData: ShopPage;
  let wines: ComponentProductProductName[]
  let winePageData: SingleWinePage
  $: product = data.data.products.data[0].attributes
  $: pageData = data.data.shopPage?.data?.attributes;
  $: winePageData = data.data.singleWinePage?.data?.attributes;
  $: wines = data.data.products.data[0].attributes.wine

  $isInverted = false;
</script>

<div class="flex flex-col py-20 md:py-40 space-y-0 md:space-y-20 min-h-screen">
  <Hero 
    pageData={pageData}
    wines={wines}
    product={product}
  />
  <div class="flex flex-col md:flex-row w-full">
    <section class="flex flex-col space-y-12 md:space-y-20 lg:space-y-32 items-center md:w-3/4">
      {#each wines as el }
        <ProductInfo 
          winePageData={winePageData}
          wines={wines}
          el={el}
        />
      {/each}
    </section>
    <section class="md:w-1/4">
      <AddToCart 
        pageData={pageData}
        product={product}
        wine={wines}
      />
    </section>
  </div>
</div>
