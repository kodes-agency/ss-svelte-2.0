<script lang="ts">
  import type {
    Diary, HomePage
  } from "../../../../__generated__/graphql.js";
  import { getDate } from "$lib/functions/getDate.js";
  import { page } from "$app/stores";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { isInverted } from "$lib/store/store.js";

  export let data;

  let diary: Diary;
  let pageData: HomePage
  $: diary = data.data.diaries?.data[0]?.attributes;
  $: pageData = data.data.homePage.data.attributes


  $isInverted = false;
</script>

<div class="flex flex-col py-40 space-y-10 md:space-y-20 min-h-screen">
    <section class="flex flex-col items-center pt-10 p-5">
      <article class="flex flex-col space-y-10 md:space-y-20 max-w-6xl w-full">
        <div class="flex flex-col items-center space-y-4">
          <a href="{$page.params.lang ? "/"+$page.params.lang+"/diary" : "/bg/diary"}">
            <p class="font-sansy text-center text-brown uppercase text-xl">{pageData.diaryHeading}</p>
          </a>
          <div class="w-20 h-px bg-brown"></div>
        </div>
        <h1 class="font-serif text-gray text-center text-3xl md:text-4xl">{diary.title}</h1>
        <div class="flex flex-col md:flex-row w-full">
          <div class="flex md:w-3/4 flex-col space-y-10 items-center">
            <time class="text-2xl text-gray italic font-serif">{getDate(new Date(diary.publicationDate), $page.params.lang ? $page.params.lang : "bg")}</time>
            <div class="content text-gray font-serif text-lg max-w-2xl">
              {@html diary.content}
            </div>
          </div>
          <div class="hidden md:flex flex-col w-1/4 pl-10 space-y-10">
            <div class="text-2xl invisible italic font-serif">-</div>
            {#each pageData?.featuredDiary?.data as el }
              {#if el.attributes.slug != $page.params.slug }
                <article>
                  <a href="{$page.params.lang ? "/"+$page.params.lang + "/diary/"+el.attributes?.slug : "/bg/diary/"+el.attributes?.slug}">
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
          <img class=" md:max-w-md" src={PUBLIC_IMG_URL+diary.image?.data?.attributes?.url} alt={diary.title}>
        </div>
        <div class="flex md:hidden flex-col space-y-10">
          <div class="text-2xl invisible italic font-serif">-</div>
          {#each pageData?.featuredDiary?.data as el }
            {#if el.attributes.slug != $page.params.slug }
              <article>
                <a href="{$page.params.lang ? "/"+$page.params.lang + "/diary/"+el.attributes?.slug : "/bg/diary/"+el.attributes?.slug}">
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