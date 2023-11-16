<script lang="ts">
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import { page } from "$app/stores";
    import SingleNews from "$lib/components/elements/global/SingleNews.svelte";
    import type { Maybe, NewEntity } from "../../../../__generated__/graphql";
    export let news: NewEntity[];


    const News = news.map((el) => {
        return {
            slug: el.attributes?.slug,
            title: el.attributes?.title,
            publicationDate: new Date(el.attributes?.publicationDate),
        }
    })

    const currentNews = News.filter((el) => new Date(el.publicationDate).getFullYear() == new Date().getFullYear());

  </script>
  
  <section class="w-full flex flex-col items-center">
    <div class="max-w-4xl flex flex-col items-center w-full space-y-10 md:space-y-20">
      <div class="flex flex-col items-center space-y-4">
        <p class="font-sansy text-brown text-2xl">{new Date().getFullYear()}
        </p>
        <div class="w-20 h-px bg-brown"></div>
        </div>
      <div class="flex flex-col items-center">
        {#each currentNews as news,i}
          <SingleNews 
              slug={news.slug}
              heading={news.title}
              date={news.publicationDate}
          />
          {#if i+1 != currentNews.length }
            <div class="h-px w-60 my-5 bg-brown" />
          {/if}
        {/each}
      </div>
    </div>
  </section>
  