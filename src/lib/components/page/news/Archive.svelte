<script lang="ts">
    import { page } from '$app/stores';
    import { getDate } from '$lib/functions/getDate'
    import type { News } from '$lib/types/payloadTypes';
    export let news: News

    const newsArr = news.map((el: News) => {
        return {
            slug: el.slug,
            title: el.title,
            publishedAt: new Date(el.publishedAt),
        }
    })

    const sortedNews = newsArr.sort((objA, objB) => Number(objB.publishedAt) - Number(objA.publishedAt),);

    const years = [...new Set(sortedNews.map((element) => element.publishedAt.getFullYear()))];

    const newNews = years.map((year) => {
        return {
            year: year,
            news: sortedNews.filter((element) => element.publishedAt.getFullYear() === year),
        }
    })

    const pastNews = newNews.filter((element) => element.year < new Date().getFullYear());

</script>

<section class="flex flex-col items-center">
    <div class="flex flex-col max-w-5xl space-y-10 w-full">
        {#each pastNews as el }
        <div class="">
            <div class="flex flex-col items-center space-y-4">
                <p class="font-sansy text-brown text-2xl">{el.year}</p>
                <div class="w-20 h-px bg-brown"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 py-10">
                {#each el.news as news }
                    <a class="group" title="Link to {news.title}" aria-label="Link to {news.title}" href="{$page.params.lang ? "/"+$page.params.lang + "/news/"+news.slug : "/bg/news/"+news.slug}">
                        <div class="p-5">
                            <div class="w-fit">
                                <p class="uppercase text-gray text-lg">{getDate(new Date(news.publishedAt), $page.params.lang ? $page.params.lang : "bg")}</p>
                                <div class="w-0 h-px bg-gray transition-all duration-300  group-hover:w-full"></div>
                            </div>
                            <p class="text-brown italic font-serif">{news.title}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        {/each}
    </div>
</section>