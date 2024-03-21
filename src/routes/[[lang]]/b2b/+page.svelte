<script lang=ts>
  import { isInverted } from '$lib/store/store.js';
  import LogoColorChange from '$lib/components/global/LogoColorChange.svelte';
  import Layout from '$lib/components/global/Layout.svelte';
  import Form from '$lib/components/page/b2b/Form.svelte';

  export let data;

  $isInverted = true;
</script>

<LogoColorChange />

<div class="flex flex-col space-y-20 md:space-y-32">
  <Layout pageData={data.b2bPageData}/>
  <Form 
    formData={data.layoutData}
  />
</div>

