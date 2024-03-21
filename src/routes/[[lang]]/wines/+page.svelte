<script lang="ts">
  import { page } from "$app/stores";
  import Heading from "$lib/components/page/wineCollection/Heading.svelte";
  import Filters from "$lib/components/page/wineCollection/Filters.svelte";
  import Wines from "$lib/components/page/wineCollection/Wines.svelte";
  import { isInverted } from "$lib/store/store.js";

  export let data;

  let filterWrapperIsOpen = false;

  // @ts-ignore
  $: currentCategory = data.wineTypeLocale.find(
    (category) =>
      category.filterName == $page.url.searchParams.get("type")
  );

  $isInverted = false
</script>

<div class="flex flex-col pt-40 space-y-10 md:space-y-20 min-h-screen">
  <div class=" space-y-2"> 
    <Heading
      heading={data.layoutData.wines.pageTitle}
      subHeading={currentCategory ? currentCategory.wineType : data.layoutData.wines.pageSubtitle}
    />
    <Filters
      wineCategories={data.wineTypeLocale}
      heroSubheading={data.layoutData.wines.pageSubtitle}
      showFilters={data.layoutData.wines.showFiltersButton}
      hideFilters={data.layoutData.wines.hideFiltersButton}
      bind:isOpen={filterWrapperIsOpen}
    />
  </div>
  <Wines wines={data.wines} />
</div>
