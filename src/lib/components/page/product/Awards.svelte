<script lang="ts">
    import type { Maybe, ComponentWineProfileWineAwards } from "../../../../__generated__/graphql";
    export let heading: Maybe<string> | undefined;
    export let awards: ComponentWineProfileWineAwards[]
</script>

<section class="flex flex-col items-center w-full p-5">
    <div class="flex flex-col w-full max-w-xl">
        <div class="flex space-x-2 justify-center items-center">
            <div class="w-full h-px bg-brown"></div>
            <h2 class="text-brown font-serif text-2xl italic">{heading}</h2>
            <div class="w-full h-px bg-brown"></div>
        </div>
        <div class="my-5">
            {#if awards }
                {#each awards as award, i }
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col items-center">
                            <p class="text-center text-brown font-sansy">{award.year}</p>
                            <p class="text-center italic font-serif max-w-sm text-gray">{award.awardDescription}</p>
                        </div>
                        {#if i+1 != awards.length }
                            <div class="h-px w-60 my-5 bg-brown" />
                        {/if}
                    </div>
                {/each}
            {/if}
        </div>
        <div class="w-full h-px bg-brown"></div>
    </div>
</section>
