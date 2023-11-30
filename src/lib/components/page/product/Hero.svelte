<script lang=ts>
    import type { Product, ComponentProductProductName, ShopPage } from "../../../../__generated__/graphql";
    export let pageData: ShopPage;
    export let wines: ComponentProductProductName[]
    export let product: Product;
</script>


<section class="flex flex-col items-center space-y-6 md:space-y-10 p-5">
    <div class="flex flex-col items-center space-y-4">
      <p class="font-sansy uppercase text-brown">{pageData.singleProductHeading}</p>
      <div class="w-16 h-px bg-brown"></div>
    </div>
    {#if wines?.length > 1}
      <div class="flex flex-col space-y-3 md:space-y-6">
        <h1 class="font-serif text-center text-3xl md:text-4xl text-gray">{product?.packageTitle}</h1>
        <div class="flex flex-col items-center md:space-y-1">
          {#each wines as el }
            <p class="text-center font-serif italic md:text-xl text-gray">{el.quantity} x {el.vina?.data?.attributes?.name}</p>
          {/each}
          <p class="font-sansy uppercase pt-6 text-brown">{product.productType?.data?.attributes?.productType}</p>
        </div>
      </div>
    {:else}
      <div>
        <h1 class="font-serif text-3xl md:text-4xl text-gray">{wines[0]?.vina?.data?.attributes?.name}</h1>
        <p class="text-center font-sansy mt-4 text-brown">{wines[0].vintage}</p>
      </div>
    {/if} 
</section>