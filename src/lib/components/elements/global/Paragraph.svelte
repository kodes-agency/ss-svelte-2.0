<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    export let smallHeading: Maybe<string> | undefined = ""
    export let largeHeading: Maybe<string> | undefined = ""
    export let marker: Maybe<string> | undefined;
    export let text: Maybe<string> | undefined
</script>

<section class="flex flex-col items-center justify-center space-y-8 md:space-y-10 p-5 py-16" id={marker}>
    {#if smallHeading }     
        <div class="flex flex-col items-center space-y-4">
            <p class="text-brown font-sansy text-center text-xl">{smallHeading}</p>
            <div class="h-px w-20 bg-brown"></div>
        </div>
    {/if}
    {#if largeHeading }
        <h2 class="text-gray font-serif text-center text-3xl">{largeHeading}</h2>
    {/if}
        <div class="content text-center font-serif italic md:text-xl text-gray max-w-4xl">{@html text}</div>
</section>