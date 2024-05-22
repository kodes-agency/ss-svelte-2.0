<script lang=ts>
  import { isInverted } from '$lib/store/store.js';
  import LogoColorChange from '$lib/components/global/LogoColorChange.svelte';
  import Layout from '$lib/components/global/Layout.svelte';
  import { goto, invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';

  
  export let data
  
  $isInverted = true;

  async function addToCart(id: string) {
        const response = await fetch ('/api/cart/add-item', {
            method: "POST",
            body: JSON.stringify({
                quantity: 1,
                id: id
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

  {#if data.visitsPageData && data.visitsPageData.layout }
    {#each data.visitsPageData.layout as element }
              <!-- Text Section -->
              {#if element.__typename === "TextSection" && element.anchor === "package"}
              <section class="flex flex-col items-center justify-center mt-20 space-y-10 px-5 lg:px-0">
                {#if element.anchor }
                  <div id={element.anchor}></div>
                {/if}
                <!-- ЗАГЛАВИЕ: Дегустационен пакет за ОБЩО  -->
                <h2 class="text-gray font-serif text-center text-3xl">{element.blocks[0].subtitle}</h2>
                <div class="text-center max-w-4xl space-y-4 font-serif text-gray text-lg content">{@html element.blocks[5].text_html}</div>
                <div class="text-center max-w-4xl space-y-4 font-serif text-gray text-lg content">{@html element.blocks[6].text_html}</div>

                <div class="lg:w-[70vw] flex flex-col lg:flex-row justify-around space-y-20 lg:space-y-0 lg:space-x-20 ">
                  <div class="space-y-10 flex flex-col items-center justify-center">
                    <!-- ЗАГЛАВИЕ: Дегустационен пакет за ЕНТУСИАСТИ  -->
                    <h2 class="text-gray font-serif underline text-center text-2xl">{element.blocks[1].subtitle}</h2>
                    <!-- ПОДЗАГЛАВИЕ: Дегустационен пакет за ЕНТУСИАСТИ  -->
                    <div class="text-center max-w-4xl space-y-4 font-serif text-gray text-lg content">{@html element.blocks[3].text_html}</div>        
                    <button
                      class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
                      on:click={()=>{addToCart(element.blocks[7].buttonLink)}}
                      >{element.blocks[7].buttonText}
                    </button>       
                  </div>

                  <div class="space-y-10 flex flex-col items-center justify-center">
                    <!-- ЗАГЛАВИЕ: Дегустационен пакет за ЦЕНИТЕЛИ  -->
                    <h2 class="text-gray font-serif underline text-center text-2xl">{element.blocks[2].subtitle}</h2>
                    <!-- Пред-Финал: Дегустационен пакет за Ценители  -->
                    <div class="text-center max-w-4xl space-y-4 font-serif text-gray text-lg content">{@html element.blocks[4].text_html}</div>                
                    <button
                      class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
                      on:click={()=>{addToCart(element.blocks[8].buttonLink)}}
                      >{element.blocks[8].buttonText}
                    </button>                         
                  </div>
                </div>

                
              </section>
            {/if}
    {/each}
  {/if}
</div>

<style>
    :global(.content ul){
      list-style: inside;
      text-align: start;
  }

  :global(.content li){
      padding-left: 10px;
      padding-bottom: 10px;
      font-style: italic;
  }


    :global(.policy h2){
      font-size: 20px;
      font-weight: bold;
    }
  
    :global(.policy h3){
      font-size: 180px;
      font-weight: bold;
    }
  
    :global(.policy h4){
      font-size: 18px;
      font-weight: bold;
    }
  
    :global(.policy ul){
      list-style: inside;
    }
  
    :global(.policy li){
      padding: 5px;
    }

    :global(.policy a){
        color: #847748;
        text-decoration: underline;
    }
</style>