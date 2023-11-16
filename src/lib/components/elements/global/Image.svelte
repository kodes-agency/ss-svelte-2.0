<script lang=ts>
    import type { Maybe } from "../../../../__generated__/graphql";
    export let src: string | undefined
    export let alt: Maybe<string> | undefined
    export let orientation: "horizontal" | "verticle"
</script>

<section class="flex flex-col items-center justify-center py-10 p-5">
    <img {src} {alt} class=" {orientation == "horizontal" ? "w-auto md:w-[50vw] md:h-[30vw]" : "h-auto md:w-[30vw] md:h-[50vw]"} object-cover ">
    <p class="text-sm font-serif mt-2 italic text-center text-gray max-w-2xl">{alt}</p>
</section>