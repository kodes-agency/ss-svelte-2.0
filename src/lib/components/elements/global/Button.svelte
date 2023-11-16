<script lang=ts>
    import { page } from "$app/stores";
    import type { Maybe } from "../../../../__generated__/graphql";
    export let link: Maybe<string> | undefined
    export let buttonText: Maybe<string> | undefined
    export let download: boolean = false
</script>

{#if download == false }
    {#if link }
        <a class="uppercase font-sansy text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500" href={$page.params.lang ? "/" +$page.params.lang+link : "/bg"+ link }>
            {buttonText}
        </a>
    {:else}
        <button class="uppercase font-sansy text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500">
            {buttonText}
        </button>
    {/if}
{/if}

{#if download }
    <a 
        class="uppercase w-fit font-sansy text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"    
        href={link}
        download
        target="_blank"
        >
        {buttonText}
    </a>
{/if}

