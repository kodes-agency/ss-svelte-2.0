<script lang="ts">
    import type { Maybe } from "../../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined;
    export let content: Maybe<string> | undefined;
</script>

<section class="flex flex-col items-center justify-center space-y-8 md:space-y-14 p-5">
    {#if heading }
        <h2 class="text-3xl text-center md:text-4xl text-gray font-serif">{heading}</h2>
    {/if}
    <div class="content max-w-4xl text-gray">{@html content}</div>
</section>

<style>
    :global(.content ul){
        list-style: inside;
    }

    :global(.content li){
        padding-left: 10px;
        padding-bottom: 10px;
    }
</style>