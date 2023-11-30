<script lang=ts>
    import type { Maybe } from '../../../../__generated__/graphql.js'
    import { page } from '$app/stores';
    export let heading: Maybe<string> | undefined;
    export let name: Maybe<string> | undefined;
    export let src: Maybe<string> | undefined;
    export let alt: Maybe<string> | undefined;
    export let date: Maybe<string> | Date | undefined;
    export let text: Maybe<string> | undefined;

</script>

<section class="flex flex-col items-center p-5">
    <div class="max-w-4xl flex flex-col items-center space-y-10">
        <div class="flex flex-col items-center space-y-4">
        <a  href={$page.params.lang ? "/"+ $page.params.lang + "/wine" : "/bg/wine"}>
            <p class=" font-sansy text-brown text-xl uppercase ">{heading}</p>
        </a>
            <div class="h-px w-20 bg-brown"></div>
        </div> 
        <div class="flex flex-col items-center space-y-4">
            <h1 class=" font-serif text-center text-gray text-3xl md:text-4xl">{name}</h1>
            <p class="font-sansy text-brown">{new Date(date).getFullYear()}</p>
        </div>
        <div class="h-20 md:h-40 lg:h-60 relative">
            <img class="-translate-y-1/3 -mt-3 w-20  md:w-40 lg:w-60 object-contain rotate-90" {src} {alt}>
        </div>
        <p class="text-gray px-5 md:px-10 italic font-serif text-center">
            {text}
        </p>
    </div>
</section>