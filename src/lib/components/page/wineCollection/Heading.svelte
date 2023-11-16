<script lang=ts>
    import type { Maybe } from "../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined
    export let subHeading: Maybe<string> | undefined
</script>

<section class="flex flex-col items-center space-y-4">
    <h1 class="text-brown font-sansy text-center text-xl">{heading}</h1>
    <div class="h-px w-20 bg-brown"></div>
    <h2 class="text-gray font-serif md:pt-4 text-center text-3xl">{subHeading}</h2>
</section>