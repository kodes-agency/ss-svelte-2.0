<script lang="ts">
  import { isInverted } from "$lib/store/store.js";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import LogoColorChange from "$lib/components/global/LogoColorChange.svelte";
  import Hero from "$lib/components/page/shop/Hero.svelte";
  import ProductGrid from "$lib/components/page/shop/ProductGrid.svelte";
  import Filters from "$lib/components/page/shop/Filters.svelte";
  import InfoTab from "$lib/components/page/shop/InfoTab.svelte";

  export let data;
  console.log(data.shopPage.length)
  $isInverted = true
</script>

<LogoColorChange half={true}/>
<div class="flex flex-col items-center space-y-10 md:space-y-10 min-h-screen">
  <Hero 
    src={PUBLIC_IMG_URL + data.layoutData.shop.heroImg.url}
    alt={data.layoutData.shop.heroImg.alt}
    heading={data.layoutData.shop.pageTitle}
    subHeading={data.layoutData.shop.pageSubtitle}
    paymentInfoButton={data.layoutData.shop.paymentMethodsButton}
    deliveryInfoButton={data.layoutData.shop.deliveryMethodsButton}
  />
  <section class="flex flex-col-reverse md:flex-row w-full md:px-12 max-w-[1450px]">
    <div class="flex flex-col space-y-8 md:w-4/5">
      <ProductGrid 
        products={data.shopPage}
        productTypes={data.productTypes}
      />
    </div>
    <div class="md:w-1/5 flex flex-col p-5 lg:sticky top-14 h-fit">
      <Filters 
        volumeLabel={data.layoutData.shop.filterVolume}
        vintageLabel={data.layoutData.shop.filterWineVintage}
        wineTypeLabel={data.layoutData.shop.filterWineType}
        productTypeLabel={data.layoutData.shop.filterProductCategory}
        productTypes={data.productTypes}
        wineTypes={data.wineTypes}
        vintages={data.wineYears}
      />
    </div>
  </section>
  <section class="flex flex-col items-center bg-white mix-blend-multiply w-full py-20">
    <InfoTab 
      infoTab={data.layoutData.shop.infoTabs}
    />
  </section>
</div>
