<script lang="ts">
  import type { ComponentWineProfileWineDetails, SingleWinePage } from "../../../../__generated__/graphql";
  
  export let pageData: SingleWinePage
  export let wineDetails: ComponentWineProfileWineDetails

</script>

<section class=" flex flex-col items-center p-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl">
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.alchohol}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{Number(wineDetails.alchohol).toFixed(2)}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.acid}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{Number(wineDetails.acids).toFixed(2)}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20 ">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.sugars}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{Number(wineDetails.sugars).toFixed(2)}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.volume}</h2>
            <div class="flex space-x-2">
                {#each wineDetails.volumeNCount as el }
                    <p class="text-gray whitespace-nowrap font-serif italic">{el.volume} {pageData.unit}</p>
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.closing}</h2>
            <div class="flex space-x-2">
                {#each wineDetails.closing.data as el }
                    <p class="text-gray whitespace-nowrap font-serif italic">{el.attributes.capType}</p>
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.year}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{new Date(wineDetails.year).getFullYear()}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.bottlesProduced}</h2>
            <div class="flex flex-col space-y-1">
                {#each wineDetails.volumeNCount as el }
                    <p class="text-gray whitespace-nowrap font-serif italic">{el.bottlesProduced} 
                        {#if wineDetails.volumeNCount?.length > 1 }  
                            ({el.volume} {pageData.unit})
                        {/if}
                    </p>
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.temperature}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{wineDetails.temperatureC} °C / {wineDetails.temperatureF} °F</p>
        </div>
    </div>
</section>