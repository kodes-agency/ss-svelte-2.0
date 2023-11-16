<script lang="ts">
  import { PUBLIC_IMG_URL } from "$env/static/public";
import SingleDiary from "$lib/components/elements/global/SingleDiary.svelte";
  import type { Maybe, DiaryEntity } from "../../../../__generated__/graphql";
  export let heading: Maybe<string> | undefined;
  export let diaries: DiaryEntity[];
</script>

<section class="w-full flex flex-col items-center">
  <div class="max-w-4xl flex flex-col items-center w-full space-y-10 md:space-y-20 p-5">
    <h1 class="text-gray text-3xl text-center font-serif md:text-4xl">{heading}</h1>
    <div class="grid grid-cols-3">
      {#each diaries as diary}
        <SingleDiary 
            src={PUBLIC_IMG_URL + diary.attributes?.image?.data?.attributes?.url+"?format=webp"}
            alt={diary.attributes?.image?.data?.attributes?.alternativeText}
            slug={diary.attributes?.slug}
            heading={diary.attributes?.title}
            date={diary.attributes?.publicationDate}
        />
      {/each}
    </div>
  </div>
</section>
