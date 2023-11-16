<script lang="ts">
    import type { DiaryEntity } from '../../../../__generated__/graphql';
    import { page } from '$app/stores';
    import { getDate } from '$lib/functions/getDate'
    export let diaries: DiaryEntity[]

    const diary = diaries.map((el) => {
        return {
            slug: el.attributes?.slug,
            title: el.attributes?.title,
            publicationDate: new Date(el.attributes?.publicationDate),
        }
    })

    const sortedDiary = diary.sort((objA, objB) => Number(objB.publicationDate) - Number(objA.publicationDate),);

    const years = [...new Set(sortedDiary.map((element) => element.publicationDate.getFullYear()))];

    const newDieary = years.map((year) => {
        return {
            year: year,
            diary: sortedDiary.filter((element) => element.publicationDate.getFullYear() === year),
        }
    })

</script>

<section class="flex flex-col items-center">
    <div class="flex flex-col max-w-5xl space-y-10 w-full">
        {#each newDieary as el }
        <div class="">
            <div class="flex flex-col items-center space-y-4">
                <p class="font-sansy text-brown text-2xl">{el.year}</p>
                <div class="w-20 h-px bg-brown"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-10">
                {#each el.diary as diary }
                    <a class="group" title="Link to {diary.title}" aria-label="Link to {diary.title}" href="{$page.params.lang ? "/"+$page.params.lang + "/diary/"+diary.slug : "/bg/diary/"+diary.slug}">
                        <div class="p-5">
                            <div class="w-fit">
                                <p class="uppercase text-gray text-lg">{getDate(new Date(diary.publicationDate), $page.params.lang ? $page.params.lang : "bg")}</p>
                                <div class="w-0 h-px bg-gray transition-all duration-300  group-hover:w-full"></div>
                            </div>
                            <p class="text-brown italic font-serif">{diary.title}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        {/each}
    </div>
</section>