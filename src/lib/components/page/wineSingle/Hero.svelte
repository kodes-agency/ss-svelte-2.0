<script lang=ts>
    import { page } from '$app/stores';
    import Button from '$lib/components/elements/global/Button.svelte';
    export let heading: any;
    export let name: any;
    export let src: any;
    export let alt: any;
    export let date: any;
    export let text: any;
    export let slug: any;
    export let buttonText: any;
</script>

<section class="flex flex-col items-center p-5">
    <div class="max-w-4xl flex flex-col items-center space-y-10">
        <div class="flex flex-col items-center space-y-4">
        <a href={$page.params.lang ? "/"+ $page.params.lang + "/wines" : "/bg/wines"}>
            <p class="font-sansy text-brown text-xl uppercase ">{heading}</p>
        </a>
            <div class="h-px w-20 bg-brown"></div>
        </div> 
        <div class="flex flex-col items-center space-y-4">
            <h1 class="font-serif text-center text-gray text-3xl md:text-4xl">{name}</h1>
            <p class="font-sansy text-brown">{new Date(date).getFullYear()}</p>
            <Button link={`/shop/${slug}`} {buttonText} />
        </div>
        <div class="h-20 md:h-40 lg:h-40 relative">
            <img class="-translate-y-1/3 -mt-3 w-20  md:w-40 lg:w-40 object-contain rotate-90" {src} {alt}>
        </div>
        <p class="text-gray px-5 md:px-10 italic font-serif text-center">
            {text}
        </p>
    </div>
</section>