<script lang="ts">
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import SingleDiary from "$lib/components/elements/global/SingleDiary.svelte";

  export let heading: string | undefined
  export let diaries: any[] | undefined

  $: lastThreeDiaries = diaries?.slice(0, 3)
</script>

<section class="w-full flex flex-col items-center">
  <div class="max-w-4xl flex flex-col items-center w-full space-y-10 md:space-y-20 p-5">
    <h1 class="text-gray text-3xl text-center font-serif md:text-4xl">{heading}</h1>
    <div class="grid grid-cols-3">
      {#if lastThreeDiaries }   
        {#each lastThreeDiaries as diary}
          <SingleDiary 
              src={PUBLIC_IMG_URL + diary.img.url+"?format=webp"}
              alt={diary.img.alt}
              slug={diary.slug}
              heading={diary.title}
              date={diary.publishedAt}
          />
        {/each}
      {/if}
    </div>
  </div>
</section>
