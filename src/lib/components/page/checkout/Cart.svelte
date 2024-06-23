<script lang="ts">
  import type { Order } from "$lib/types/orderTypes";
  import type { General } from "$lib/types/payloadTypes";
  import { formatPrice } from "$lib/functions/formatPrice";
  import CheckoutItem from "./CheckoutItem.svelte";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  export let toggleSteps: any;
  export let cart: Order;
  export let pageData: General
  export let numberOfItems: number
</script>

<section class="flex flex-col items-center py-10 md:py-20">
  <div class="flex flex-col items-center space-y-10 md:space-y-20 max-w-5xl w-full">
    {#if numberOfItems < 6 }
      <div class=" rounded-md bg-brown text-white p-8" transition:slide>
        <p class="text-lg">{pageData.shop.minumumItemsText}</p>
      </div>
    {/if}
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-6" >
        <h1 class="font-serif text-2xl md:text-3xl italic text-gray">
          {pageData.shop.cartTitle}
        </h1>
        <p class="font-serif text-2xl md:text-3xl text-brown">
          {formatPrice($page.params.lang, cart.totals.total_price)}
        </p>
      </div>
      <a
        href={$page.params.lang
          ? "/" + $page.params.lang + "/shop"
          : "/bg/shop"}
        class="uppercase flex items-center justify-center font-sansy text-sm text-brown h-8 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
        >{pageData.shop.buttonContinueShopping}</a
      >
    </div>
    <section class="flex flex-col w-full space-y-10">
      <div class="md:flex w-full px-6 hidden">
        <div class="w-4/12">
          <p class=" uppercase text-sm font-sansy text-brown">
            {pageData.shop.checkoutTableTitle}
          </p>
        </div>
        <div class="w-3/12">
          <p class=" uppercase text-sm text-center font-sansy text-brown">
            {pageData.shop.checkoutTableQuantity}
          </p>
        </div>
        <div class="w-2/12">
          <p class=" uppercase text-sm text-center font-sansy text-brown">
            {pageData.shop.checkoutTablePrice}
          </p>
        </div>
        <div class="w-2/12">
          <p class=" uppercase text-sm text-center font-sansy text-brown">
            {pageData.shop.checkoutTableTotal}
          </p>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="flex flex-col border-y border-brown">
        {#if cart.items }
          {#each cart.items as el, i}
            <div transition:slide>
              <CheckoutItem
                name={el.productName}
                price={el.prices.price}
                quantity={el.quantity}
                cartItemKey={el.key}
                slug={el.productSlug}
                total={el.totals.line_total}
                type={el.productType}
              />
            </div>
            {#if cart.items.length != i + 1}
              <div class="w-full bg-brown bg-opacity-40 h-px"></div>
            {/if}
          {/each}
        {/if}
      </div>
      <div class="w-full flex flex-col items-end md:pt-10">
        <button
        disabled={numberOfItems < 6}
        on:click={() => {
            if(numberOfItems < 6) return
            toggleSteps("forwards");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          class=" font-sansy uppercase disabled:bg-gray disabled:bg-opacity-50 disabled:text-opacity-70 disabled:cursor-not-allowed text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
          >{pageData.shop.buttonContinueToCheckout}
        </button>
      </div>
    </section>
  </div>
</section>
