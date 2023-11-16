<script lang="ts">
  import type { Maybe, NewEntity } from "../../../../__generated__/graphql";
  import { page } from "$app/stores";
  export let news: NewEntity[];
  export let heading: Maybe<string> | undefined;
  import SingleNews from "$lib/components/elements/global/SingleNews.svelte";
</script>

<section class="flex flex-col items-center justify-center px-5 md:px-[20vw]">
  <div class="flex items-center justify-center space-x-2 w-full">
    <div class="h-px w-full bg-brown" />
    <a href={$page.params.lang ? "/"+$page.params.lang+"/news" : "/bg/news"}>
      <h2 class="text-2xl italic font-serif text-brown hover:scale-105 transition-all duration-500">{heading}</h2>
    </a>
    <div class="h-px w-full bg-brown" />
  </div>
  <div class="flex flex-col items-center justify-center p-5 md:p-10">
    {#each news as article, i}
      <SingleNews date={article.attributes?.publicationDate} heading={article.attributes?.title} slug={article.attributes?.slug} />
      {#if i+1 != news.length }
        <div class="h-px w-60 my-5 bg-brown" />
      {/if}
    {/each}
  </div>
  <div class="h-px w-full bg-brown" />
</section>
