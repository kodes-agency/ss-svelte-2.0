<script lang=ts>
    import type { Maybe, ComponentProductProductName } from "../../../../__generated__/graphql";
    import { page } from "$app/stores";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    export let packageTitle: Maybe<string> | undefined;
    export let category: Maybe<string> | undefined;
    export let regularPrice: number | undefined;
    export let salePrice: Maybe<number> | undefined;
    export let id: Maybe<string> | undefined;
    export let wine: ComponentProductProductName[]
    export let slug: Maybe<string> | undefined;
     
</script>

<article class="group relative">
    <button class="absolute z-10 top-3 right-3 bg-brown h-8 w-8 rounded-full opacity-0 hover:scale-110 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center ">
        <div class="h-0.5 rounded-full w-4 absolute bg-white"></div>
        <div class="h-0.5 rounded-full w-4 absolute rotate-90 bg-white"></div>
    </button>
    <a class="" href="{$page.params.lang ? "/"+$page.params.lang+"/shop/"+slug : "/bg/shop/"+slug}">
        <div class="w-full flex flex-col items-center pt-14 pb-10 px-5 relative h-full border border-brown group-hover:border-opacity-100 transition-all duration-300 border-opacity-40 rounded-lg">
            <p class="absolute -top-2 text-xs uppercase font-sansy text-brown bg-white px-3">{category}</p>
            {#if wine.length == 1 }
                {#each wine as el }
                    <div class="">
                        <img class="pb-4 h-60" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                    </div>
                    <h3 class="text-brown italic font-serif text-lg text-center">{el.vina?.data?.attributes?.name}</h3>
                    <p class="text-brown opacity-80 pb-4 font-serif text-center">{el.vintage}</p>
                    <p class="text-gray italic font-serif text-lg text-center">{$page.params.lang === "bg" ? Number(regularPrice).toFixed(2)+" лв." : ( Number(regularPrice).toFixed(2) / 2)+" €"} </p>
                    <p class="text-brown opacity-80 font-sansy text-center">{el.volume?.toFixed(3)} L</p>
                {/each}
            {/if}

            <div class="w-full flex flex-col items-center">
                {#if wine.length == 2 }
                    <div class="grid grid-cols-2 h-52 w-full">
                        {#each wine as el }
                            <div class="relativ w-full flex justify-center">
                                <img class="class absolute max-w-[70px] -translate-x-8 scale-95 opacity-80 object-contain h-52" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                                <img class="class absolute opacity-80 translate-x-8 scale-95 max-w-[70px] object-contain h-52" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                                <img class="class absolute max-w-[70px] object-contain h-52" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                            </div>
                        {/each}
                    </div>
                    <div class="w-full flex flex-col items-center pt-10">
                        <h3 class="text-brown italic font-serif text-lg text-center">{packageTitle}</h3>
                        <div class="flex flex-col items-center">
                            {#each wine as el }
                                <div class="flex">
                                    <p class="text-gray text-xs font-serif">{el.quantity}&nbsp;x&nbsp;</p>
                                    <p class="text-gray whitespace-nowrap text-xs font-serif">{el.vina?.data?.attributes?.name} &nbsp;</p>
                                    <p class="text-gray text-xs font-serif">{el.vintage} &nbsp;</p>
                                    <p class="text-gray text-xs font-serif">{el.volume?.toFixed(2)}</p>
                                </div>
                            {/each}
                        </div>
                        <p class="text-gray italic font-serif text-lg text-center">{$page.params.lang === "bg" ? Number(regularPrice).toFixed(2)+" лв." : ( Number(regularPrice).toFixed(2) / 2)+" €"} </p>
                    </div>
                {/if}
            </div>

            <div class="w-full flex flex-col items-center">
                {#if wine.length == 3 }
                    <div class="grid grid-cols-3 h-52 w-full pb-4">
                        {#each wine as el }
                            <div class="relative flex justify-center -translate-x-2">
                                <img class="class absolute translate-x-4 opacity-80 scale-95 h-52" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                                <img class="class absolute h-52" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                            </div>
                        {/each}
                    </div>
                    <div class="w-full flex flex-col items-center pt-10">
                        <h3 class="text-brown italic font-serif text-lg text-center">{packageTitle}</h3>
                        <div class="flex flex-col items-center">
                            {#each wine as el }
                                <div class="flex">
                                    <p class="text-gray text-xs font-serif">{el.quantity}&nbsp;x&nbsp;</p>
                                    <p class="text-gray whitespace-nowrap text-xs font-serif">{el.vina?.data?.attributes?.name} &nbsp;</p>
                                    <p class="text-gray text-xs font-serif">{el.vintage} &nbsp;</p>
                                    <p class="text-gray text-xs font-serif">{el.volume?.toFixed(2)}</p>
                                </div>
                            {/each}
                        </div>
                        <p class="text-gray italic font-serif text-lg text-center">{$page.params.lang === "bg" ? Number(regularPrice).toFixed(2)+" лв." : ( Number(regularPrice).toFixed(2) / 2)+" €"} </p>
                    </div>
                {/if}
            </div>


            <div class="w-full flex flex-col items-center">
                {#if wine.length > 3 }
                    <div class="grid grid-cols-3 h-52 w-full pb-4 -translate-x-4">
                        {#each wine as el, i }
                        <div class="flex flex-col items-center">
                            <img class="class h-52 {i > 2 ? " -translate-y-full translate-x-8 scale-95 z-0 opacity-90" : "scale-100 z-10"}" src="{PUBLIC_IMG_URL + el.vina?.data?.attributes?.image?.data?.attributes?.url+"?format=webp"}" alt="{el.vina?.data?.attributes?.image?.data?.attributes?.alternativeText}">
                        </div>
                        {/each}
                    </div>
                    <div class="flex flex-col items-center space-y-10">
                        <div class="w-full flex flex-col items-center pt-10">
                            <h3 class="text-brown italic font-serif text-lg text-center">{packageTitle}</h3>
                            <div class="flex flex-col items-center">
                                {#each wine as el }
                                    <div class="flex flex-wrap justify-center">
                                        <p class="text-gray text-xs font-serif">{el.quantity}&nbsp;x&nbsp;</p>
                                        <p class="text-gray whitespace-nowrap text-xs font-serif">{Number(el.vina?.data?.attributes?.name?.length) > 30 ? el.vina?.data?.attributes?.name?.slice(0, 30) + "..." : el.vina?.data?.attributes?.name} &nbsp;</p>
                                        <p class="text-gray text-xs font-serif">{el.vintage} &nbsp;</p>
                                        <p class="text-gray text-xs font-serif">{el.volume?.toFixed(2)}</p>
                                    </div>
                                {/each}
                            </div>
                            <p class="text-gray italic font-serif text-lg text-center">{$page.params.lang === "bg" ? Number(regularPrice).toFixed(2)+" лв." : ( Number(regularPrice).toFixed(2) / 2)+" €"} </p>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </a>
</article>