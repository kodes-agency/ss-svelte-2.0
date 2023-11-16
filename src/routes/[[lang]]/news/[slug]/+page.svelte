<script lang="ts">
  import type {
    New, HomePage
  } from "../../../../__generated__/graphql.js";
  import { getDate } from "$lib/functions/getDate.js";
  import { page } from "$app/stores";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { isInverted } from "$lib/store/store.js";

  export let data;

  let news: New;
  let pageData: HomePage
  $: news = data.data.news?.data[0]?.attributes;
  $: pageData = data.data.homePage.data.attributes


  $isInverted = false;
</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
    <section class="flex flex-col items-center pt-10 p-5">
      <article class="flex flex-col items-center space-y-10 md:space-y-20 max-w-6xl w-full">
        <div class="flex flex-col items-center space-y-4">
          <a href="{$page.params.lang ? "/"+$page.params.lang+"/news" : "/bg/news"}">
            <p class="font-sansy text-center text-brown uppercase text-xl">{pageData.newsHeading}</p>
          </a>
          <div class="w-20 h-px bg-brown"></div>
        </div>
        <h1 class="font-serif text-gray text-center text-3xl max-w-3xl md:text-4xl">{news.title}</h1>
        <div class="flex flex-col md:flex-row w-full">
          <div class="flex md:w-3/4 flex-col space-y-10 items-center">
            <time class="text-2xl text-gray italic font-serif">{getDate(new Date(news.publicationDate), $page.params.lang ? $page.params.lang : "bg")}</time>
            <div class="content text-gray font-serif text-lg max-w-2xl">
              {@html news.content}
            </div>
          </div>
          <div class="hidden md:flex flex-col w-1/4 pl-10 space-y-10">
            <div class="text-2xl invisible italic font-serif">-</div>
            {#each pageData?.featuredNews?.data as el }
              {#if el.attributes.slug != $page.params.slug }
                <article>
                  <a href="{$page.params.lang ? "/"+$page.params.lang + "/news/"+el.attributes?.slug : "/bg/news/"+el.attributes?.slug}">
                    <div>
                      <p class="uppercase text-gray font-sansy">{getDate(new Date(el.attributes?.publicationDate), $page.params.lang ? $page.params.lang : "bg")}</p>
                      <h2 class="text-brown italic font-serif">{el.attributes?.title}</h2>
                    </div>
                  </a>
                </article>
              {/if}
            {/each}
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
          <div class="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {#each news.image.data as image }
              <div class="w-full flex flex-col items-center">
                <img class="max-w-2xl max-h-[50vh] object-contain" src={PUBLIC_IMG_URL+image?.attributes?.url} alt={image?.attributes?.alternativeText}>
              </div>
            {/each}
          </div>
        </div>
        <div class="flex md:hidden flex-col space-y-10">
          <div class="text-2xl invisible italic font-serif">-</div>
          {#each pageData?.featuredNews?.data as el }
            {#if el.attributes.slug != $page.params.slug }
              <article>
                <a href="{$page.params.lang ? "/"+$page.params.lang + "/news/"+el.attributes?.slug : "/bg/news/"+el.attributes?.slug}">
                  <div>
                    <p class="uppercase text-center text-gray font-sansy">{getDate(new Date(el.attributes?.publicationDate), $page.params.lang ? $page.params.lang : "bg")}</p>
                    <h2 class="text-brown italic text-center font-serif">{el.attributes?.title}</h2>
                  </div>
                </a>
              </article>
            {/if}
          {/each}
        </div>
      </article>
    </section>
</div>


<style>
  :global(.content h2){
    font-size: 24px;
    padding-top: 5px;
    padding-bottom: 10px;
    font-weight: bold;
  }

  :global(.content h3){
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 10px;
    font-weight: bold;
  }

  :global(.content h4){
    font-size: 18px;
    padding-top: 5px;
    padding-bottom: 10px;
    font-weight: bold;
  }

  :global(.content ul){
    list-style: inside;
  }

  :global(.content li){
    padding: 5px;
  }

  :global(.content a){
    color: #847748;
    text-decoration: underline;
  }
</style>