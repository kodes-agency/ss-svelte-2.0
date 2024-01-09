<script lang="ts">
  import type {
    ProductEntity,
    ShopPage,
    ComponentShopPageShopPageInfoTab,
    ProductTypeEntity,
  } from "../../../__generated__/graphql.js";

  import { isInverted } from "$lib/store/store.js";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import LogoColorChange from "$lib/components/global/LogoColorChange.svelte";
  import Hero from "$lib/components/page/shop/Hero.svelte";
  import ProductGrid from "$lib/components/page/shop/ProductGrid.svelte";
  import Filters from "$lib/components/page/shop/Filters.svelte";
  import InfoTab from "$lib/components/page/shop/InfoTab.svelte";

  export let data;

  let products: ProductEntity[];
  let productTypes: ProductTypeEntity[];
  let pageData: ShopPage;
  let infoTab: ComponentShopPageShopPageInfoTab[]
  let filterData: ProductEntity[]

  $: products = data.products;
  $: productTypes = data.data?.data?.productTypes?.data;
  $: pageData = data.data?.data?.shopPage?.data?.attributes;
  $: filterData = data?.filterData?.data?.products?.data
  // @ts-expect-error
  $: infoTab = pageData.infoTab

  $isInverted = true
</script>

<LogoColorChange half={true}/>
<div class="flex flex-col items-center space-y-10 md:space-y-20 min-h-screen">
  <Hero 
    src={PUBLIC_IMG_URL + pageData.heroImage?.data?.attributes?.url+"?format=webp"}
    alt={pageData.heroImage?.data?.attributes?.alternativeText}
    heading={pageData.heroHeading}
    subHeading={pageData.heroSubheading}
    paymentInfoButton={pageData.paymentInfoButton}
    deliveryInfoButton={pageData.deliveryInfoButton}
  />
  <section class="flex flex-col-reverse md:flex-row w-full md:px-12 max-w-[1450px]">
    <div class="flex flex-col space-y-8 md:w-4/5">
      <ProductGrid 
        productTypes={productTypes}
        products={products}
      />
    </div>
    <div class="md:w-1/5 flex flex-col p-5">
      <Filters 
        volumeLabel={pageData.filterVolume}
        vintageLabel={pageData.filterVintage}
        wineTypeLabel={pageData.filterWineType}
        productTypeLabel={pageData.filterProductType}
        filterData={filterData}
      />
    </div>
  </section>
  <section class="flex flex-col items-center bg-white mix-blend-multiply w-full py-20">
    <InfoTab 
      infoTab={infoTab}
    />
  </section>
</div>
