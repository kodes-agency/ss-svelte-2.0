<script lang="ts">
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import ImgHero from "$lib/components/elements/global/ImgHero.svelte";
  import Layout from "$lib/components/global/Layout.svelte";
  import type { VisitsPage } from "../../../__generated__/graphql.js";
  import { isInverted } from "$lib/store/store.js";
  import LogoColorChange from "$lib/components/global/LogoColorChange.svelte";

  export let data;

  let pageData: VisitsPage;
  $: pageData = data.data?.visitsPage?.data?.attributes;
  $isInverted = true
</script>

<LogoColorChange />
<ImgHero
  src={PUBLIC_IMG_URL + pageData.heroImage?.data?.attributes?.url }
  alt={pageData.heroImage?.data?.attributes?.alternativeText}
/>
<Layout layout={pageData.visitsPageLayout} />
