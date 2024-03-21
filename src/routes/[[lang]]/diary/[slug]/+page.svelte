<script lang="ts">
  import { getDate } from "$lib/functions/getDate.js";
  import { page } from "$app/stores";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { isInverted } from "$lib/store/store.js";

  export let data;

  $isInverted = false;
</script>

<div class="flex flex-col pt-40 space-y-10 md:space-y-20 min-h-screen">
    <section class="flex flex-col items-center pt-10 p-5">
      <article class="flex flex-col space-y-10 md:space-y-20 max-w-6xl w-full">
        <div class="flex flex-col items-center space-y-4">
          <a href="{$page.params.lang ? "/"+$page.params.lang+"/diary" : "/bg/diary"}">
            <p class="font-sansy text-center text-brown uppercase text-xl">{data.layoutData.diary.pageTitle}</p>
          </a>
          <div class="w-20 h-px bg-brown"></div>
        </div>
        <h1 class="font-serif text-gray text-center text-3xl md:text-4xl">{data.singleDiaryPage.title}</h1>
        <div class="flex flex-col md:flex-row w-full">
          <div class="flex md:w-3/4 flex-col space-y-10 items-center">
            <time class="text-2xl text-gray italic font-serif">{getDate(new Date(data.singleDiaryPage.publishedAt), $page.params.lang ? $page.params.lang : "bg")}</time>
            <div class="content text-gray font-serif text-lg max-w-2xl space-y-2">
              {@html data.singleDiaryPage.text_html}
            </div>
          </div>
          <div class="hidden md:flex flex-col w-1/4 pl-10 space-y-10">
            <div class="text-2xl invisible italic font-serif">-</div>
            {#each data.collectionDiaryPage as el }
              {#if el.slug != $page.params.slug }
                <article>
                  <a href="{$page.params.lang ? "/"+$page.params.lang + "/diary/"+el?.slug : "/bg/diary/"+el?.slug}">
                    <div>
                      <p class="uppercase text-gray font-sansy">{getDate(new Date(el?.publishedAt), $page.params.lang ? $page.params.lang : "bg")}</p>
                      <h2 class="text-brown italic font-serif">{el?.title}</h2>
                    </div>
                  </a>
                </article>
              {/if}
            {/each}
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
          <img class=" md:max-w-md" src={PUBLIC_IMG_URL+data.singleDiaryPage.img.url} alt={data.singleDiaryPage.img.alt}>
        </div>
        <div class="flex md:hidden flex-col space-y-10">
          <div class="text-2xl invisible italic font-serif">-</div>
          {#each data.collectionDiaryPage as el }
            {#if el.slug != $page.params.slug }
              <article>
                <a href="{$page.params.lang ? "/"+$page.params.lang + "/diary/"+el?.slug : "/bg/diary/"+el?.slug}">
                  <div>
                    <p class="uppercase text-center text-gray font-sansy">{getDate(new Date(el?.publishedAt), $page.params.lang ? $page.params.lang : "bg")}</p>
                    <h2 class="text-brown italic text-center font-serif">{el?.title}</h2>
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