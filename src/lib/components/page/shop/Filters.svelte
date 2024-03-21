<script lang=ts>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    export let productTypes, wineTypes, vintages
    export let productTypeLabel ,wineTypeLabel ,vintageLabel ,volumeLabel

    let volumes = [
      {
        label: "375 ml",
        value: "375"
      },
      {
        label: "750 ml",
        value: "750"
      },
      {
        label: "1.5 L",
        value: "1500"
      },
    ]

</script>

<div class="flex flex-col space-y-5 md:space-y-5 p-2">
    <section class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <p class="font-sansy uppercase text-brown">{productTypeLabel}</p>
          <div class="w-10 h-px bg-brown"></div>
        </div>
        <div class="flex flex-wrap">
          {#each productTypes as el}
            <button
            on:click={()=>{
              if($page.url.searchParams.getAll('category').includes(el.value)){
                $page.url.searchParams.delete('category', el.value)
              } else {
                $page.url.searchParams.append('category', el.value)
              }
    
              goto(`?${$page.url.searchParams.toString()}`, {
                noScroll: true,
                invalidateAll: true
              })
    
            }}
            class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-xs lg:text-sm {$page.url.searchParams.getAll('category').includes(el.value) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
              {el.label}
            </button>
          {/each}
          <button
            class=""
          >
          
          </button>
        </div>
    </section>
    <section class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <p class="font-sansy uppercase text-brown">{wineTypeLabel}</p>
          <div class="w-10 h-px bg-brown"></div>
        </div>
        <div class="flex flex-wrap">
          {#each wineTypes as el}
            <button
            on:click={()=>{
              if($page.url.searchParams.getAll('wineType').includes(el.filterName)){
                $page.url.searchParams.delete('wineType', el.filterName)
              } else {
                $page.url.searchParams.append('wineType', el.filterName)
              }
    
              goto(`?${$page.url.searchParams.toString()}`, {
                noScroll: true,
                invalidateAll: true
              })
    
            }}
            class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-xs lg:text-sm {$page.url.searchParams.getAll('wineType').includes(el.filterName) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
              {el.wineType}
            </button>
          {/each}
        </div>
    </section>
    <section class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <p class="font-sansy uppercase text-brown">{vintageLabel}</p>
          <div class="w-10 h-px bg-brown"></div>
        </div>
        <div class="flex flex-wrap">
          {#each vintages as el}
            <button
            on:click={()=>{
              if($page.url.searchParams.getAll('vintage').includes(String(el))){
                $page.url.searchParams.delete('vintage', String(el))
              } else {
                $page.url.searchParams.append('vintage', String(el))
              }
    
              goto(`?${$page.url.searchParams.toString()}`, {
                noScroll: true,
                invalidateAll: true
              })
    
            }}
            class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-sm {$page.url.searchParams.getAll('vintage').includes(String(el)) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
              {el}
            </button>
          {/each}
        </div>
    </section>
    <section class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <p class="font-sansy uppercase text-brown">{volumeLabel}</p>
          <div class="w-10 h-px bg-brown"></div>
        </div>
        <div class="flex flex-wrap">
          {#each volumes as el}
            {#if el }
                <button
                on:click={()=>{
                if($page.url.searchParams.getAll('volume').includes(encodeURI(el.value))){
                    $page.url.searchParams.delete('volume',encodeURI(el.value))
                } else {
                    $page.url.searchParams.append('volume', encodeURI(el.value))
                }
    
                goto(`?${$page.url.searchParams.toString()}`, {
                    noScroll: true,
                    invalidateAll: true
                })
        
                }}
                class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-xs lg:text-sm {$page.url.searchParams.getAll('volume').includes(encodeURI(el.value)) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
                {el.label}
                </button>
            {/if}
          {/each}
        </div>
    </section>
  </div>