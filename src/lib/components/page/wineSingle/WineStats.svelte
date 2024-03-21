<script lang="ts">  
  export let pageData:any
  export let wineDetails:any
  export let closingType:any
</script>

<section class=" flex flex-col items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl">
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.alchoholContent}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{Number(wineDetails.alchoholContent).toFixed(2)}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.acidContent}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{Number(wineDetails.acidContent).toFixed(2)}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20 ">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.sugarContent}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{Number(wineDetails.sugarContent).toFixed(2)}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.bottleVolumeSize}</h2>
            <div class="flex space-x-2">
                <div>
                    {#each wineDetails.volumeAndQuantity as el }
                        <p class="text-gray whitespace-nowrap font-serif italic">{el.volume}ml x {el.quantity}</p>
                    {/each}
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.closingType}</h2>
            <div class="flex space-x-2">
                <p class="text-gray whitespace-nowrap font-serif italic">{closingType}</p>
            </div>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.bottledYear}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{new Date(wineDetails.yearBottled).getFullYear()}</p>
        </div>
        <div class="flex flex-col items-center space-y-1 m-2 md:m-4 mx-20">
            <h2 class="text-brown whitespace-nowrap font-sansy text-center">{pageData.temperature}</h2>
            <p class="text-gray whitespace-nowrap font-serif italic">{wineDetails.temperatureC} °C / {wineDetails.temperatureF} °F</p>
        </div>
    </div>
</section>