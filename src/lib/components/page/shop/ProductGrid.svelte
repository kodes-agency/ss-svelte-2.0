<script lang=ts>
    import type { ProductEntity, ProductTypeEntity } from "../../../../__generated__/graphql";
    import { page } from "$app/stores";
    import Product from "./Product.svelte";

    export let products: ProductEntity[];
    export let productTypes: ProductTypeEntity[];
</script>

    {#if $page.url.searchParams.toString()}
    <section class="max-w-[1124px] grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
      {#each products as product }
          <Product 
            packageTitle={product.attributes?.packageTitle}
            category={product.attributes?.productType?.data?.attributes?.productType}
            regularPrice={product.attributes?.regularPrice}
            salePrice={product.attributes?.salePrice}
            id={product.attributes?.productCode}
            wine={product.attributes?.wine}
            slug={product.attributes?.slug}
            productCode={product.attributes?.productCode}
          />
      {/each}
    </section>
    {:else}
      {#each productTypes as category }
        <div class="flex space-x-4 items-center justify-center w-full p-5">
          <div class="w-full h-px bg-brown"></div>
          <p class="text-brown italic font-serif text-2xl whitespace-nowrap">{category.attributes?.productType}</p>
          <div class="w-full h-px bg-brown"></div>
        </div>
        <section class="max-w-[1124px] grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {#each products as product }
            {#if product.attributes?.productType?.data?.attributes?.productType == category.attributes?.productType}
              <Product 
                packageTitle={product.attributes?.packageTitle}
                category={product.attributes?.productType?.data?.attributes?.productType}
                regularPrice={product.attributes?.regularPrice}
                salePrice={product.attributes?.salePrice}
                id={product.attributes?.productCode}
                wine={product.attributes?.wine}
                slug={product.attributes?.slug}
                productCode={product.attributes?.productCode}
              />
            {/if}
          {/each}
        </section>
      {/each}
    {/if}
