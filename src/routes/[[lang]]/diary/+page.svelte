<script lang="ts">
  import type {
    HomePage,
    DiaryEntity,
  } from "../../../__generated__/graphql.js";
  import { isInverted } from "$lib/store/store.js";
  import Hero from "$lib/components/page/diary/Hero.svelte"
  import Archive from "$lib/components/page/diary/Archive.svelte";
 
  export let data;

  let diaries: DiaryEntity[];
  let pageData: HomePage;

  $: diaries = data.data?.diaries.data;
  $: pageData = data.data.homePage?.data.attributes;

  $isInverted = false
</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
  <Hero 
    diaries={diaries}
    heading={pageData.diaryHeading}
  />
  <Archive 
    diaries={diaries}
  />
</div>
