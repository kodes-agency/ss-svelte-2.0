<script lang="ts">
  import { page } from "$app/stores";
  import type { Maybe } from "../../../../__generated__/graphql";
  import { getDate } from "$lib/functions/getDate";
  export let date: string | Date;
  export let heading: Maybe<string> | undefined;
  export let slug: Maybe<string> | undefined;
</script>

<article class="group">
  <a href="{$page.params.lang ? "/" +$page.params.lang+"/news/"+slug : "/bg" + "/news/"+slug}">
    <div class="flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500">
        <time class="font-sansy uppercase text-brown text-sm w-fit" datetime={new Date(date).toDateString()}>{getDate(new Date(date), $page.params.lang ? $page.params.lang : "bg")}</time>
        <h3 class="text-center italic w-fit font-serif text-gray">{heading}</h3>
    </div>
  </a>
</article>
