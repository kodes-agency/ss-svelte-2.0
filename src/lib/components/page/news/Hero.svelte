<script lang="ts">
    import { PUBLIC_IMG_URL } from "$env/static/public";
    import { page } from "$app/stores";
    import SingleNews from "$lib/components/elements/global/SingleNews.svelte";
    import type { News } from "$lib/types/payloadTypes";
    export let news

    const newsArr = news.map((el:News) => {
        return {
            slug: el.slug,
            title: el.title,
            publishedAt: new Date(el.publishedAt),
        }
    })

    const currentNews = newsArr.filter((el:any) => new Date(el.publishedAt).getFullYear() == new Date().getFullYear());
  </script>
  
  {#if currentNews.length > 0 }
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
                date={news.publishedAt}
            />
            {#if i+1 != currentNews.length }
              <div class="h-px w-60 my-5 bg-brown" />
            {/if}
          {/each}
        </div>
      </div>
    </section>
  {/if}
  