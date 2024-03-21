<script lang="ts">
  import { isInverted } from "$lib/store/store.js";
  import Hero from "$lib/components/page/diary/Hero.svelte"
  import Archive from "$lib/components/page/diary/Archive.svelte";
 
  export let data;

  $isInverted = false
</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
  <Hero 
    diaries={data.diaryPage}
    heading={data.layoutData.diary.pageTitle}
  />
  <Archive 
    diaries={data.diaryPage}
  />
</div>
