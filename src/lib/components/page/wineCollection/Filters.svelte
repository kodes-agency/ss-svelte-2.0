<script lang=ts>
    import type { Maybe } from "../../../__generated__/graphql";
    import { slide } from "svelte/transition";
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'
    import { page } from "$app/stores";
     export let isOpen: boolean
     export let wineCategories: []
     export let hideFilters: Maybe<string> | undefined
     export let showFilters: Maybe<string> | undefined
     export let heroSubheading: Maybe<string> | undefined
</script>

<section class="flex flex-col items-center space-y-4 relative">
    <button 
        class="text-brown font-sansy uppercase" 
        on:click={()=>{
            isOpen = !isOpen
            ScrollTrigger.refresh(true)
        }}
    >{isOpen ? hideFilters : showFilters} {isOpen ? "↑" : "↓"}</button>

    {#if isOpen }     
        <div transition:slide class="w-full bg-white mix-blend-multiply flex flex-col justify-center items-center space-y-2 md:space-y-10 py-10 md:py-20 {isOpen ? "" : ""}">
            <a class="font-sansy uppercase text-brown text-xl" data-sveltekit-noscroll href={$page.params.lang ? "/"+$page.params.lang+"/wine" : "/bg/wine"}>{heroSubheading}</a> 
            <div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-20">
                {#each wineCategories as category } 
                    <a class="font-sansy uppercase text-brown text-xl" data-sveltekit-noscroll href={$page.params.lang ? "/"+$page.params.lang+`/wine?type=${category.attributes?.filterName}` : "/bg"+`/wine?type=${category.attributes?.filterName}`}>{category.attributes?.wineType}</a>
                {/each}
            </div>
        </div>
    {/if}
</section> 