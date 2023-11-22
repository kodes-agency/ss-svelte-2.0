<script lang=ts>
    import { page } from "$app/stores";
    import type { ProductEntity, Maybe } from "../../../../__generated__/graphql";
    import { goto } from "$app/navigation";

    export let filterData: ProductEntity[]
    export let productTypeLabel: Maybe<string> | undefined;
    export let wineTypeLabel: Maybe<string> | undefined;
    export let vintageLabel: Maybe<string> | undefined;
    export let volumeLabel: Maybe<string> | undefined;

    let filters: any
    $: filters


    $:if(filterData) {
        const organizedData = filterData.reduce((acc, obj) => {
            const { productType, wine } = obj?.attributes;

            // Extract productType and its filterName
            const productTypeData = productType?.data?.attributes;
            const productKey = `${productTypeData.productType}_${productTypeData.filterName}`;
            
            // Store productType and filterName as unique object
            acc.productTypes[productKey] = {
                productType: productTypeData?.productType,
                filterName: productTypeData?.filterName
            };

            // Extract vintages, volumes, and wineTypes
            wine.forEach(wineObj => {
                const { volume, vintage, vina } = wineObj;
                const wineTypeData = vina.data?.attributes?.wineType?.data?.attributes;
                acc.volumes.add(volume);
                acc.vintages.add(vintage);
                const wineKey = `${wineTypeData?.wineType}_${wineTypeData?.filterName}`;

                // Store wineType and filterName as unique object
                acc.wineTypes[wineKey] = {
                    wineType: wineTypeData?.wineType,
                    filterName: wineTypeData?.filterName
                };
            });

            return acc;
            }, {
                productTypes: {},
                vintages: new Set(),
                volumes: new Set(),
                wineTypes: {}
        });

        // Convert objects to arrays of unique productTypes and wineTypes
        const uniqueProductTypes = Object.values(organizedData?.productTypes);
        const uniqueWineTypes = Object.values(organizedData?.wineTypes);

        filters = {
            productTypes: uniqueProductTypes,
            vintages: [...organizedData.vintages],
            volumes: [...organizedData.volumes],
            wineTypes: uniqueWineTypes
        };
    }

    $: sortedVolumes = filters.volumes.sort(function(a, b) {
        return a - b;
    });

    $: sortedYears = filters.vintages.map((str)=>{return parseInt(str)}).sort(function(a, b) {
        return a - b;
    })



</script>

<div class="flex flex-col space-y-5 md:space-y-10 p-2">
    <section class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <p class="font-sansy uppercase text-brown">{productTypeLabel}</p>
          <div class="w-10 h-px bg-brown"></div>
        </div>
        <div class="flex flex-wrap">
          {#each filters.productTypes as el}
            <button
            on:click={()=>{
              if($page.url.searchParams.getAll('category').includes(el.filterName)){
                $page.url.searchParams.delete('category', el.filterName)
              } else {
                $page.url.searchParams.append('category', el.filterName)
              }
    
              goto(`?${$page.url.searchParams.toString()}`, {
                noScroll: true,
                invalidateAll: true
              })
    
            }}
            class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-xs lg:text-sm {$page.url.searchParams.getAll('category').includes(el.filterName) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
              {el.productType}
            </button>
          {/each}
        </div>
    </section>
    <section class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <p class="font-sansy uppercase text-brown">{wineTypeLabel}</p>
          <div class="w-10 h-px bg-brown"></div>
        </div>
        <div class="flex flex-wrap">
          {#each filters.wineTypes as el}
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
          {#each sortedYears as el}
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
            class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-xs lg:text-sm {$page.url.searchParams.getAll('vintage').includes(String(el)) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
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
          {#each sortedVolumes as el}
            {#if el }
                <button
                on:click={()=>{
                if($page.url.searchParams.getAll('volume').includes(encodeURI(el))){
                    $page.url.searchParams.delete('volume',encodeURI(el))
                } else {
                    $page.url.searchParams.append('volume', encodeURI(el))
                }
    
                goto(`?${$page.url.searchParams.toString()}`, {
                    noScroll: true,
                    invalidateAll: true
                })
        
                }}
                class="border font-sansy uppercase hover:shadow-md text-sm text-start md:text-xs lg:text-sm {$page.url.searchParams.getAll('volume').includes(encodeURI(el)) ? "bg-brown text-white" : "bg-white text-gray"} transition-all duration-300 text-gray border-brown py-px px-2 rounded-md m-1">
                {el} L
                </button>
            {/if}
          {/each}
        </div>
    </section>
  </div>