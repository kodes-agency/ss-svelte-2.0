<script lang=ts>
    import { page } from "$app/stores";
    import Product from "./Product.svelte";

    export let products: any
    export let productTypes: any

    // export let productTypes: ProductTypeEntity[];
</script>

    {#if $page.url.searchParams.toString()}
    <section class="max-w-[1124px] grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
      {#each products as product }
          <Product 
            wine={product}
          />
      {/each}
    </section>
    {:else}
      {#each productTypes as category }
        <div class="flex space-x-2 items-center justify-center w-full p-5 md:p-0">
          <div class="w-full h-px bg-brown"></div>
          <p class="text-brown italic font-serif text-2xl whitespace-nowrap">{category.label}</p>
          <div class="w-full h-px bg-brown"></div>
        </div>
        <section class="max-w-[1124px] grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {#each products as product }
            {#if product.productKind === category.value }
              <Product 
                wine={product}
              />
            {/if}
          {/each}
        </section>
      {/each}
    {/if}
