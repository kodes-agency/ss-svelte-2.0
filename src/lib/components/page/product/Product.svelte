<script lang=ts>
    import type { Maybe, ComponentProductProductName } from "../../../../__generated__/graphql";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    export let packageTitle: Maybe<string> | undefined;
    export let wine: ComponentProductProductName[]
</script>

<article class="border-y border-brown border-opacity-40">
        <div class="w-full flex flex-col items-center pt-14 pb-10 px-5 relative h-full ">
            {#if wine.length == 1 }
                {#each wine as el }
                    <div class="">
                        <img class="pb-4 h-52" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{el.vina?.data?.attributes?.name}</h3>
                {/each}
            {/if}

            <div class="w-full flex flex-col items-center">
                {#if wine.length == 2 }
                    <div class="grid grid-cols-2 h-48 w-full">
                        {#each wine as el }
                            <div class="relativ w-full flex justify-center">
                                <img class="class absolute max-w-[70px] -translate-x-6 scale-95 opacity-80 object-contain h-40" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                                <img class="class absolute opacity-80 translate-x-6 scale-95 max-w-[70px] object-contain h-40" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                                <img class="class absolute max-w-[70px] object-contain h-40" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                            </div>
                        {/each}
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{packageTitle}</h3>
                {/if}
            </div>

            <div class="w-full flex flex-col items-center">
                {#if wine.length == 3 }
                    <div class="grid grid-cols-3 h-48 w-full pb-4">
                        {#each wine as el }
                            <div class="relative flex justify-center -translate-x-2">
                                <img class="class absolute translate-x-4 opacity-80 scale-95 h-40" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                                <img class="class absolute h-40" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                            </div>
                        {/each}
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{packageTitle}</h3>
                {/if}
            </div>


            <div class="w-full flex flex-col items-center">
                {#if wine.length > 3 }
                    <div class="grid grid-cols-3 h-48 w-full pb-4 -translate-x-4">
                        {#each wine as el, i }
                        <div class="flex flex-col items-center">
                            <img class="class h-40 {i > 2 ? " -translate-y-full translate-x-6 scale-95 z-0 opacity-90" : "scale-100 z-10"}" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                        </div>
                        {/each}
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{packageTitle}</h3>
                {/if}
            </div>
        </div>
</article>