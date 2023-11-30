<script lang="ts">
    export let src: string
    export let alt: string

    let isLoaded: HTMLImageElement
</script>

<section class="overflow-hidden h-screen relative">
    <img src={src+"?format=webp&width=50"} {alt} class="w-full absolute blur-md scale-125 h-screen object-cover">
    <img bind:this={isLoaded} src={src+"?format=webp"} {alt} class="w-full {isLoaded ? "opacity-100" : "opacity-0"} absolute transition-all duration-1000 delay-200 h-screen object-cover">
</section>