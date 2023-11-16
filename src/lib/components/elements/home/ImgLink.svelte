<script lang=ts>
    import { page } from "$app/stores";
    import type { Maybe } from "../../../../__generated__/graphql";
    export let src: string | undefined;
    export let alt: Maybe<string> | undefined;
    export let text: Maybe<string> | undefined;
    export let link: Maybe<string> | undefined;
</script>

<article class="group">
    <a href={$page.params.lang ? "/" +$page.params.lang+link : "/bg" + link}>
        <div class="relative flex items-center justify-center overflow-hidden w-[90vw] h-[60vw] md:w-[40vw] md:h-[25vw]">
            <img {src} {alt} loading="lazy" class=" absolute group-hover:scale-105 transition-all duration-1000 top-0 left-0 w-full h-full object-cover z-0">
            <p class="relative z-10 px-4 py-1.5 border font-sansy text-sm uppercase group-hover:bg-white group-hover:text-gray transition-all duration-500 rounded-sm border-white text-white">{text}</p>
        </div>
    </a>
</article>