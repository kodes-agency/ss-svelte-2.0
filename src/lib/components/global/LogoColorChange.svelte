<script lang="ts">
    import { isInverted } from "$lib/store/store";
    import gsap from 'gsap/dist/gsap'
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  import { onMount } from "svelte";

    let sectionEl: HTMLElement;

    onMount(()=>{
        let ctx = gsap.context(()=>{
            ScrollTrigger.create({
                trigger: sectionEl,
                start: "top top",
                end: "bottom +=60",
                onLeave: () => {
                    $isInverted = false
                },
                onEnterBack: () => {
                    $isInverted = true
                }
            })
        })

        return()=>{
            ctx.revert()
        }
    })
</script>

<section bind:this={sectionEl} class="h-screen absolute w-full">

</section>
