<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { formatPrice } from "$lib/functions/formatPrice";
  import { page } from "$app/stores";
  export let name: string;
  export let slug: string;
  export let quantity: number;
  export let price: string;
  export let total: string;
  export let cartItemKey: string;
  export let type: string

  async function handleItem(action: "delete" | "update", updater?: number) {
    if (action === "update" && typeof updater != "undefined") {
      let newQuantity = quantity + updater;
      try {
        const response = await fetch("/api/cart/update-item", {
          method: "POST",
          body: JSON.stringify({
            key: cartItemKey,
            quantity: newQuantity,
          }),
        });
      } catch (er) {
        console.log(er);
      }
    }

    if (action === "delete") {
      try {
        const response = await fetch("/api/cart/remove-item", {
          method: "POST",
          body: JSON.stringify({
            key: cartItemKey,
          }),
        });
      } catch (er) {
        console.log(er);
      }
    }
    invalidateAll();
  }
</script>

<article>
  <div class="p-4 flex md:hidden justify-between items-center">
    <a
      href={$page.params.lang
        ? "/" + $page.params.lang + "/shop/" + slug
        : "/bg/shop/" + slug}
    >
      <p class="font-serif italic text-gray">{name}</p>
    </a>
    <button
      on:click={() => {
        handleItem("delete");
      }}
      class="w-4 flex flex-col justify-center items-center rounded-full h-4 bg-brown relative"
    >
      <div class="h-0.5 w-3 bg-white rounded-full absolute -rotate-45"></div>
      <div class="h-0.5 w-3 bg-white rounded-full absolute rotate-45"></div>
    </button>
  </div>
  <div class="grid grid-cols-3 md:flex w-full h-10 md:h-auto md:py-4 md:px-6">
    <div class="hidden md:block md:w-4/12">
      {#if type !== "other" }
        <a
          href={$page.params.lang
            ? "/" + $page.params.lang + "/shop/" + slug
            : "/bg/shop/" + slug}
        >
          <p class="font-serif italic text-gray">{name}</p>
        </a>
      {:else}
        <p class="font-serif italic text-gray">{name}</p>
      {/if}
    </div>
    <div class=" md:w-3/12 flex md:block items-center justify-center">
      <div class="flex justify-center items-center">
        <button
          on:click={() => {
            handleItem("update", -1);
          }}
          class=""
        >
          <div
            class="w-8 md:w-6 h-4 flex flex-col items-center justify-center bg-white"
          >
            <div class="h-0.5 w-3 md:w-2 bg-brown rounded-full"></div>
          </div>
        </button>
        <p class="font-serif text-center text-gray">{quantity}</p>
        <button
          on:click={() => {
            handleItem("update", 1);
          }}
        >
          <div class="relative w-8 md:w-6 h-4 flex items-center justify-center">
            <div class="h-0.5 w-3 md:w-2 bg-brown rounded-full absolute"></div>
            <div
              class="h-0.5 w-3 md:w-2 bg-brown rounded-full absolute rotate-90"
            ></div>
          </div>
        </button>
      </div>
    </div>
    <div
      class="md:w-2/12 border-x border-gray md:border-0 border-opacity-20 flex md:block items-center justify-center"
    >
      <p class="font-serif text-center text-gray">
        {formatPrice($page.params.lang, price)}
      </p>
    </div>
    <div class=" md:w-2/12 flex md:block items-center justify-center">
      <p class="font-serif text-center text-gray">
        {formatPrice($page.params.lang, total)}
      </p>
    </div>
    <div class="hidden md:w-1/12 md:flex justify-end items-center">
      <button
        on:click={() => {
          handleItem("delete");
        }}
        class="w-4 flex flex-col justify-center items-center rounded-full h-4 bg-brown relative"
      >
        <div class="h-0.5 w-3 bg-white rounded-full absolute -rotate-45"></div>
        <div class="h-0.5 w-3 bg-white rounded-full absolute rotate-45"></div>
      </button>
    </div>
  </div>
</article>
