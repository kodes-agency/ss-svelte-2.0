<script lang="ts">
  import { isInverted } from "$lib/store/store.js";
  import Hero from "$lib/components/page/product/Hero.svelte";
  import ProductInfo from "$lib/components/page/product/ProductInfo.svelte";
  import AddToCart from "$lib/components/page/product/AddToCart.svelte";

  export let data;

  $isInverted = false;
</script>

<div class="flex flex-col pt-20 md:pt-40 space-y-0 md:space-y-10 min-h-screen">
  <Hero 
    pageData={data.layoutData}
    wine={data.productPage}
  />
  <div class="flex flex-col md:flex-row w-full">
    <section class="flex flex-col space-y-12 md:space-y-20 items-center md:w-3/4">
      {#if data.productPage.productBundle.length > 0 }    
        {#each data.productPage.productBundle as el }
          <ProductInfo 
            pageData={data.layoutData}
            wine={el.product}
            many={true}
            wineTypes={data.wineType}
            closingTypes={data.closingType}
          />
        {/each}
      {:else}
        <ProductInfo 
          pageData={data.layoutData}
          wine={data.productPage}
          many={false}
          wineTypes={data.wineType}
          closingTypes={data.closingType}
        />
      {/if}
    </section>
    <section class="md:w-1/4">
      <AddToCart 
        pageData={data.layoutData}
        wine={data.productPage}
        productTypes={data.productType}
      />
    </section>
  </div>
</div>
