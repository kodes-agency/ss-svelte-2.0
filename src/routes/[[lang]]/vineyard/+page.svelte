<script lang="ts">
  import Layout from "$lib/components/global/Layout.svelte";
  import type { VinyardPage } from "../../../__generated__/graphql.js";
  import { isInverted } from "$lib/store/store.js";
  import ImgHero from "$lib/components/elements/global/ImgHero.svelte";
  import LogoColorChange from "$lib/components/global/LogoColorChange.svelte";
  import { PUBLIC_IMG_URL } from "$env/static/public";

  export let data;
  
  let pageData: VinyardPage;
  $: pageData = data.data?.vinyardPage?.data?.attributes;
  $isInverted = true;
</script>

<LogoColorChange />
<ImgHero
  src={PUBLIC_IMG_URL + pageData.heroImage?.data?.attributes?.url}
  alt={pageData.heroImage?.data?.attributes?.alternativeText}
/>
<Layout layout={pageData.vinyardPageLayout} />
