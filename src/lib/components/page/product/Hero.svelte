<script lang=ts>
    import { page } from "$app/stores";
    export let pageData: any
    export let wine: any
</script>


<section class="flex flex-col items-center space-y-6 md:space-y-10 p-5">
    <div class="flex flex-col items-center space-y-4">
      <a href={$page.params.lang ? "/" + $page.params.lang+"/shop" : "/bg" + "/shop"}>
        <p class="font-sansy uppercase text-brown">{pageData.wines.pageTitleSingleWine}</p>
      </a>
      <div class="w-16 h-px bg-brown"></div>
    </div>
    {#if wine.productBundle.length > 0}
      <div class="flex flex-col space-y-3 md:space-y-6">
        <h1 class="font-serif text-center text-3xl md:text-4xl text-gray">{wine.productTitle}</h1>
        <div class="flex flex-col items-center md:space-y-1">
          {#each wine.productBundle as el }
            <p class="text-center font-serif italic md:text-xl text-gray">{el.quantity} x {el.product.productTitle} - {new Date(el.product.productBasicInformation.harvestYear).getFullYear()}</p>
          {/each}
        </div>
      </div>
    {:else}
      <div>
        <h1 class="font-serif text-3xl md:text-4xl text-gray">{wine.productTitle}</h1>
        <p class="text-center font-sansy mt-4 text-brown">{new Date(wine.productBasicInformation.harvestYear).getFullYear()}</p>
      </div>
    {/if} 
</section>