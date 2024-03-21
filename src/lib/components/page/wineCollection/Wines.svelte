<script lang=ts>
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import { page } from "$app/stores";
    import gsap from 'gsap/dist/gsap'
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'
    import { blur } from "svelte/transition";
    import { afterUpdate, onMount } from "svelte";

    export let wines:any

    let targetWine: number | null
    let winesEls: NodeListOf<HTMLElement>
    let displayWidth: number
    let ctx: any

    if (typeof window !== "undefined") {
        displayWidth = window.innerWidth
    }

    afterUpdate(()=>{
        ScrollTrigger.refresh(true)
        winesEls = document.querySelectorAll(".wine")
        let mm = gsap.matchMedia()
        ctx = gsap.context(()=>{
            mm.add('(max-width: 1024px)' ,()=>{
                winesEls.forEach((el)=>{
                    let tlEnter = gsap.timeline({
                        reversed: true
                    })
    
                    tlEnter.to(el, {
                        opacity: 1,
                        duration: 0,
                        ease: "none"
                    })
    
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top +=300",
                        end: "top -=200",
                        onToggle: () => {
                            tlEnter.reversed(!tlEnter.reversed())
                        }
                    })
                })
            })
        })
    })

    onMount(()=>{
        return()=>{
            ctx.revert()
        }
    })
</script>

<section class="w-full flex flex-col items-center min-h-[70vh] p-5 relative">
    <div class="absolute hidden lg:flex top-0 h-full justify-center">
        {#each wines as wine, i } 
            {#if targetWine == i }
                <img in:blur={{amount:10}} class="sticky top-20 h-[70vh]" src={PUBLIC_IMG_URL+ wine.productBasicInformation.img.url} alt={wine.productBasicInformation.img.alt}>
            {/if}
        {/each}
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-x-60 lg:gap-x-96 gap-y-10 lg:gap-y-28">
        {#each wines as wine, i }
            <article 
                on:mouseenter={()=>{
                    if(displayWidth >= 1024){
                        targetWine = i
                        winesEls.forEach((el, id)=>{
                            if(i != id) {
                                el.style.opacity = "0.4"
                            }
                        })
                    }
                }} 
                on:mouseleave={()=>{
                    if(displayWidth >= 1024){
                        targetWine = null
                        winesEls.forEach((el, id)=>{
                            el.style.opacity = "1"
                        })
                    }
                }}
                class="wine transition-all {displayWidth <= 1024 ? "opacity-30" : ""} duration-300 lg:opacity-100"
            >
                <a href={$page.params.lang ? "/"+$page.params.lang+"/wines/"+wine.slug : "/bg/wines/"+wine.slug}>
                    <div class="max-w-xs flex flex-col items-center space-y-2">
                        <div class="relative lg:hidden h-48">
                            <img  class="rotate-90 h-[250px]" src={PUBLIC_IMG_URL+ wine.productBasicInformation.img.url} alt={wine.productBasicInformation.img.alt}>
                        </div>
                        <h2 class=" text-center text-xl md:text-2xl font-serif italic text-gray">{wine.productTitle}</h2>
                        <p class=" text-center text-brown font-serif">{new Date(wine.productBasicInformation.harvestYear).getFullYear()}</p>
                        <p class=" text-center text-gray italic font-serif">{wine.productBasicInformation.shortDescription}</p>
                    </div>
                </a>
            </article>
        {/each}
    </div>
</section>