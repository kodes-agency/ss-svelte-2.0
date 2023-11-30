<script lang=ts>
    import { PUBLIC_IMG_URL } from '$env/static/public';
    import { isInverted } from '$lib/store/store.js';
    import type { HomePage } from '../../__generated__/graphql.js';
    import Hero from '$lib/components/page/home/Hero.svelte';
    import About from '$lib/components/page/home/About.svelte';
    import Diary from '$lib/components/page/home/Diary.svelte';
    import News from '$lib/components/page/home/News.svelte';
    import LinkSectionOne from '$lib/components/page/home/LinkSectionOne.svelte';
    import Wines from '$lib/components/page/home/Wines.svelte';
    import LinkSectionTwo from '$lib/components/page/home/LinkSectionTwo.svelte';
    import LogoColorChange from '$lib/components/global/LogoColorChange.svelte';

    export let data

    let pageData: HomePage
    $: pageData = data.data?.homePage?.data?.attributes
    $isInverted = true

</script>

<LogoColorChange />
<div class="flex flex-col space-y-20 md:space-y-32">
    <Hero 
        src={PUBLIC_IMG_URL+pageData.heroImage?.data?.attributes?.url}
        alt={pageData.heroImage?.data?.attributes?.alternativeText}
        heading={pageData.heroHeading}
        subHeading={pageData.heroSubheading}
    />
    <About 
        src={PUBLIC_IMG_URL + pageData.aboutImage?.data?.attributes?.url+"?format=webp"}
        alt={pageData.aboutImage?.data?.attributes?.alternativeText}
        text={pageData.aboutText}
        buttonText={pageData.aboutButton}
    />
    <Diary 
        heading={pageData.diaryHeading}
        diaries={pageData.featuredDiary?.data}
    />
    <News 
        heading={pageData.newsHeading}
        news={pageData.featuredNews?.data}
    />
    <LinkSectionOne 
        links={pageData.imgLink}
    />
    <Wines 
        heading={pageData.featuredWinesHeading}
        subHeading={pageData.featuredWinesSubheading}
        featuredWines={pageData.featuredWines?.data}
        buttonText={pageData.featuredButton}
    />
    <LinkSectionTwo 
        links={pageData.imgLink2}
    />
</div>