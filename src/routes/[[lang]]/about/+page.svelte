<script lang=ts>
    import Layout from '$lib/components/global/Layout.svelte';
    import type { AboutPage } from '../../../__generated__/graphql.js';
    import { isInverted } from "$lib/store/store.js";

    export let data

    let pageData: AboutPage
    $: pageData = data.data?.aboutPage?.data?.attributes    
    $isInverted = false
</script>

<div class="pt-10 md:pt-0">
    <Layout 
        layout={pageData.aboutPageLayout}
    />
</div>