<script lang="ts">
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import SingleDiary from "$lib/components/elements/global/SingleDiary.svelte";
  import { page } from "$app/stores";
  import type { Maybe, DiaryEntity } from "../../../../__generated__/graphql";
  export let heading: Maybe<string> | undefined;
  export let diaries: DiaryEntity[];
</script>

<section class="flex flex-col justify-center items-center px-3 md:px-[20vw] space-y-14">
  <div class="flex flex-col items-center justify-center space-y-4">
    <a href={$page.params.lang ? "/"+$page.params.lang+"/diary" : "/bg/diary"}>
      <h2 class="text-brown uppercase hover:scale-105 transition-all duration-500 text-center">{heading}</h2>
    </a>
    <div class="h-px w-10 bg-brown" />
  </div>
  <div class="grid grid-cols-3">
    {#each diaries as diary}
      <SingleDiary
        src={PUBLIC_IMG_URL + diary.attributes?.image?.data?.attributes?.url+"?format=webp"}
        alt={diary.attributes?.image?.data?.attributes?.alternativeText}
        date={diary.attributes?.publicationDate}
        heading={diary.attributes?.title}
        slug={diary.attributes?.slug}
      />
    {/each}
  </div>
</section>
