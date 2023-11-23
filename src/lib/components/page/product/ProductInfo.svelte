<script lang=ts>
    import Awards from "../product/Awards.svelte";
    import { page } from "$app/stores";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import { slide } from "svelte/transition";
    import type { ComponentProductProductName, SingleWinePage } from "../../../../__generated__/graphql";
    export let winePageData: SingleWinePage;
    export let wines: ComponentProductProductName[]
    export let el: ComponentProductProductName

    let isOpen: boolean = false
</script>

<article class="max-w-4xl flex flex-col space-y-10">
    {#if wines.length > 1 }
    <div>
      <h2 class="font-serif italic text-center text-3xl text-gray">{el.vina?.data?.attributes?.name}</h2>
      <p class="text-center font-sansy text-brown mt-4">{el.vintage}</p>
    </div>
    {/if}
    <div class="flex flex-col items-center h-20 md:h-32 lg:h-48">
      <img class="-translate-y-1/3 -mt-3 w-20 md:w-32 lg:w-48 object-contain rotate-90" src="{PUBLIC_IMG_URL+el.vina?.data?.attributes?.image?.data?.attributes?.url}" alt="">
    </div>
    <div>
      <p class="text-center italic text-gray font-serif">{el.vina?.data?.attributes?.longDescription}</p>
    </div>
    <div class="flex flex-col items-center {isOpen ? "hidden" : ""}">
        <button
            class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
            on:click={()=>{
                isOpen = !isOpen
            }}
        >
          Научи повече
        </button>
    </div>
    {#if isOpen }
        <section transition:slide class="flex flex-col items-center space-y-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-4xl">
                <div class="flex flex-col items-center space-y-1 m-4 mx-20 ">
                    <h2 class="text-brown whitespace-nowrap font-sansy text-center">Тип вино</h2>
                    <p class="text-gray whitespace-nowrap font-serif italic">{el.vina?.data?.attributes?.wineType?.data?.attributes?.wineType}</p>
                </div>
                <div class="flex flex-col items-center space-y-1 m-4">
                    <h2 class="text-brown up whitespace-nowrap font-sansy text-center">{winePageData.volume}</h2>
                    <p class="text-gray whitespace-nowrap font-serif italic">{Number(el.volume).toFixed(3)} L</p>
                </div>
                <div class="flex flex-col items-center space-y-1 m-4">
                    <h2 class="text-brown up whitespace-nowrap font-sansy text-center">{winePageData.alchohol}</h2>
                    <p class="text-gray whitespace-nowrap font-serif italic">{Number(el.vina?.data?.attributes?.wineDetails?.alchohol).toFixed(2)}</p>
                </div>
                <div class="flex flex-col items-center space-y-1 m-4 mx-20">
                    <h2 class="text-brown whitespace-nowrap font-sansy text-center">{winePageData.closing}</h2>
                    <div class="flex space-x-2">
                        {#if el?.vina?.data?.attributes?.wineDetails?.closing }
                            {#each el.vina.data?.attributes?.wineDetails?.closing.data as element }
                                <p class="text-gray whitespace-nowrap font-serif italic">{element?.attributes?.capType}</p>
                            {/each}
                        {/if}
                    </div>
                </div>
            </div>

            {#if el.vina?.data?.attributes?.wineAwards && el.vina?.data?.attributes?.wineAwards?.length > 0}
                <Awards heading={winePageData.rewardsHeading} awards={el.vina?.data?.attributes?.wineAwards} />
            {/if}
            <div class="flex flex-col items-center space-y-2">
                <h2 class="font-serif italic text-center text-2xl text-gray">{winePageData.food}</h2>
                <p class="text-center italic text-gray font-serif max-w-2xl">{el.vina?.data?.attributes?.wineInformation?.food}</p>
            </div>
            <a
                href="{$page.params.lang ? "/"+$page.params.lang+"/wine/"+el.vina?.data?.attributes?.slug : "/bg/wine/"+el.vina?.data?.attributes?.slug}"
                class="uppercase font-sansy w-fit text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
                on:click={()=>{
                    isOpen = !isOpen
                }}
            >
                Подробна информация
            </a>
        </section>
    {/if}
</article>