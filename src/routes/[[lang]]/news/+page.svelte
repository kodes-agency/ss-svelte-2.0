<script lang="ts">
  import type {
    HomePage,
    New,
    NewEntity,
  } from "../../../__generated__/graphql.js";
  import { isInverted } from "$lib/store/store.js";
  import Hero from "$lib/components/page/news/Hero.svelte"
  import Archive from "$lib/components/page/news/Archive.svelte";
  import SingleDiary from "$lib/components/elements/global/SingleDiary.svelte";
  import { PUBLIC_IMG_URL } from "$env/static/public";
 

  export let data;

  let news: NewEntity[];
  let pageData: HomePage;

  $: news = data.data?.news.data;
  $: pageData = data.data.homePage?.data.attributes;

  $isInverted = false
</script>

<div class="flex flex-col items-center py-40 space-y-10 md:space-y-20 min-h-screen p-5">
  <div class="w-full max-w-6xl flex flex-col items-center space-y-14">
    <h1 class="text-gray text-3xl text-center font-serif md:text-4xl">{pageData.newsHeading}</h1>
    <div class="w-full flex flex-col md:flex-row">
      <div class="md:w-3/4 flex flex-col space-y-20">
        <Hero 
          news={news}
        />
        <Archive 
          news={news}
        />
      </div>
      <div class="md:w-1/4 flex flex-col space-y-6">
        <div class="flex flex-col items-center space-y-4">
          <h2 class="font-sansy text-center text-brown text-lg">{pageData.diaryHeading}</h2>
          <div class="w-20 h-px bg-brown"></div>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-1 md:gap-y-10">
          {#each pageData.featuredDiary.data as el }
            <SingleDiary
              src={PUBLIC_IMG_URL + el.attributes?.image?.data?.attributes?.url+"?format=webp"}
              alt={el.attributes?.image?.data?.attributes?.alternativeText}
              date={el.attributes?.publicationDate}
              heading={el.attributes?.title}
              slug={el.attributes?.slug}
            />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
