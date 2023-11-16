<script lang="ts">
  import type {
    VinaEntity,
    WinesPage,
    WineTypeEntity,
  } from "../../../__generated__/graphql.js";
  import { page } from "$app/stores";
  import Heading from "$lib/components/page/wineCollection/Heading.svelte";
  import Filters from "$lib/components/page/wineCollection/Filters.svelte";
  import Wines from "$lib/components/page/wineCollection/Wines.svelte";
  import { isInverted } from "$lib/store/store.js";


  export let data;

  let wines: VinaEntity[];
  let pageData: WinesPage;
  let filterWrapperIsOpen = false;

  $: wines = data.data?.vinas.data;
  $: pageData = data.data.winesPage.data.attributes;
  $: wineCategories = data.data.wineTypes.data;
  $: currentCategory = wineCategories.find(
    (category: WineTypeEntity) =>
      category.attributes?.filterName == $page.url.searchParams.get("type")
  );

  $isInverted = false
</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
  <Heading
    heading={pageData.heroHeading}
    subHeading={currentCategory?.attributes?.wineType
      ? currentCategory?.attributes?.wineType
      : pageData.heroSubheading}
  />
  <Filters
    {wineCategories}
    heroSubheading={pageData.heroSubheading}
    showFilters={pageData.showFilters}
    hideFilters={pageData.hideFilters}
    bind:isOpen={filterWrapperIsOpen}
  />
  <Wines {wines} />
</div>
