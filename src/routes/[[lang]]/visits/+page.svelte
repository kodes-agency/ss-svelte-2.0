<script lang=ts>
  import { isInverted } from '$lib/store/store.js';
  import LogoColorChange from '$lib/components/global/LogoColorChange.svelte';
  import Layout from '$lib/components/global/Layout.svelte';

  export let data

  $isInverted = true;
</script>

<LogoColorChange />

<div class="flex flex-col space-y-20 md:space-y-32">
  <Layout pageData={data.visitsPageData}/>
</div>

