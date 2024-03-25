<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import Hero from "$lib/components/page/wineSingle/Hero.svelte";
  import Awards from "$lib/components/page/wineSingle/Awards.svelte";
  import WineDetails from "$lib/components/page/wineSingle/WineDetails.svelte";
  import WineStats from "$lib/components/page/wineSingle/WineStats.svelte";
  import Button from "$lib/components/elements/global/Button.svelte";
  import { isInverted } from "$lib/store/store.js";

  export let data;

  $isInverted = false;
</script>

<div class="flex flex-col pt-40 space-y-5 min-h-screen">
  <Hero
    heading={data.layoutData.wines.pageTitle}
    name={data.wine.productTitle}
    date={data.wine.productBasicInformation.harvestYear}
    src={PUBLIC_IMG_URL + data.wine.productBasicInformation.img.url}
    alt={data.wine.productBasicInformation.img.alt}
    text={data.wine.productBasicInformation.longDescription}
    slug={data.wine.slug}
    buttonText={data.layoutData.wines.buttonGoToShop}
    position={data.wine.productType.productPosition}
  />
  <WineStats pageData={data.layoutData.wines} wineDetails={data.wine.wineDetails} closingType={data.closingType}/>
  {#if data.wine.productBasicInformation?.wineAwards && data.wine.productBasicInformation.wineAwards.length > 0}
      <Awards heading={data.layoutData.wines.rewardsTitle} awards={data.wine.productBasicInformation.wineAwards} />
  {/if}
  <WineDetails
    details={data.wine.wineRemarks}
    degustation={data.layoutData.wines.degustation}
    food={data.layoutData.wines.food}
    maturation={data.layoutData.wines.maturation}
    vinification={data.layoutData.wines.vinification}
  />
  <div class="flex justify-center">
    {#if data.wine.productBasicInformation?.passport?.url }   
      <Button
        download={true}
        buttonText={data.layoutData.wines.buttonWinePassport}
        link={PUBLIC_IMG_URL + data.wine.productBasicInformation.passport.url}
      />
    {/if}
  </div>
</div>
