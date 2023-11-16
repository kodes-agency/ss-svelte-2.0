<script lang="ts">
  import type {
    Vina,
    SingleWinePage,
  } from "../../../../__generated__/graphql.js";
  import { page } from "$app/stores";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import Hero from "$lib/components/page/wineSingle/Hero.svelte";
  import Awards from "$lib/components/page/wineSingle/Awards.svelte";
  import WineDetails from "$lib/components/page/wineSingle/WineDetails.svelte";
  import WineStats from "$lib/components/page/wineSingle/WineStats.svelte";
  import Button from "$lib/components/elements/global/Button.svelte";
  import { isInverted } from "$lib/store/store.js";

  export let data;

  let wineData: Vina;
  let pageData: SingleWinePage;
  $: wineData = data.data.vinas?.data[0]?.attributes;
  $: pageData = data.data.singleWinePage?.data?.attributes;
  $isInverted = false;
</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
  <Hero
    heading={pageData.heroHeading}
    name={wineData.name}
    date={wineData.harvestYear}
    src={PUBLIC_IMG_URL +
      wineData.image?.data?.attributes?.url +
      "?format=webp"}
    alt={wineData.image?.data?.attributes?.alternativeText}
    text={wineData.longDescription}
  />
  <WineStats {pageData} wineDetails={wineData.wineDetails} />
  {#if wineData.wineAwards}
    {#if wineData.wineAwards?.length > 0}
      <Awards heading={pageData.rewardsHeading} awards={wineData.wineAwards} />
    {/if}
  {/if}
  <WineDetails
    details={wineData.wineInformation}
    degustaion={pageData.degustaion}
    food={pageData.food}
    maturation={pageData.maturation}
    vinification={pageData.vinification}
  />
  <div class="flex justify-center">
    <Button
      download={true}
      buttonText={pageData.buttonText}
      link={PUBLIC_IMG_URL + wineData.winePasspordPDF?.data?.attributes?.url}
    />
  </div>
</div>
