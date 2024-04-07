<script lang=ts>
  import { isInverted } from '$lib/store/store.js';
  import LogoColorChange from '$lib/components/global/LogoColorChange.svelte';
  import Layout from '$lib/components/global/Layout.svelte';
  import { goto, invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';

  export let data

  $isInverted = true;

  async function addToCart() {
        const response = await fetch ('/api/cart/add-item', {
            method: "POST",
            body: JSON.stringify({
                quantity: 1,
                id: "301"
            })
        })
        if (response.ok){
          goto($page.params.lang
              ? "/" + $page.params.lang + "/shop/checkout"
              : "/bg/shop/checkout", {
                invalidateAll: true
              })
          // invalidateAll()
        }
    }
</script>

<LogoColorChange />

<div class="flex flex-col">
  <Layout pageData={data.visitsPageData}/>
  <div class="w-full items-center justify-center flex pt-10">
    <button
      class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
      on:click={addToCart}
    >Купи дегустационен пакет</button>
  </div>
</div>

