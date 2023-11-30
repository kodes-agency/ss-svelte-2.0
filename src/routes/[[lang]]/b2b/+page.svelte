<script lang="ts">
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import ImgHero from "$lib/components/elements/global/ImgHero.svelte";
  import Layout from "$lib/components/global/Layout.svelte";
  import type { B2BPage, ContactForm } from "../../../__generated__/graphql.js";
  import { isInverted } from "$lib/store/store.js";
  import LogoColorChange from "$lib/components/global/LogoColorChange.svelte";
  import Form from "$lib/components/page/b2b/Form.svelte";

  export let data;

  let pageData: B2BPage;
  let contactForm: ContactForm
  $: pageData = data.data?.b2BPage?.data?.attributes;
  $: contactForm = data.data?.contactForm?.data?.attributes;
  $isInverted = true
</script>


<LogoColorChange />
<ImgHero
  src={PUBLIC_IMG_URL + pageData.heroImage?.data?.attributes?.url}
  alt={pageData.heroImage?.data?.attributes?.alternativeText}
/>
<Layout layout={pageData.b2bPageLayout} />
<Form 
    formData = {contactForm}
/>
