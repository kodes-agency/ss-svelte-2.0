<script lang="ts">
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import ImgHero from "$lib/components/elements/global/ImgHero.svelte";
  import { isInverted } from "$lib/store/store.js";
  import Layout from "$lib/components/global/Layout.svelte";
  import LogoColorChange from "$lib/components/global/LogoColorChange.svelte";
  import type { CellerPage } from "../../../__generated__/graphql.js";

  export let data;

  let pageData: CellerPage;
  $: pageData = data.data?.cellerPage?.data?.attributes;
  $isInverted = true
</script>

<LogoColorChange />
<ImgHero
  src={PUBLIC_IMG_URL +
    pageData.heroImage?.data?.attributes?.url +
    "?format=webp"}
  alt={pageData.heroImage?.data?.attributes?.alternativeText}
/>
<Layout layout={pageData.cellerPageLayout} />
