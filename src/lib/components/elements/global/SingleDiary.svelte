<script lang="ts">
  import { page } from "$app/stores";
  import type { Maybe } from "../../../../__generated__/graphql";
  import { getDate } from "$lib/functions/getDate";
  export let src: string | undefined;
  export let alt: Maybe<string> | undefined;
  export let date: string | Date;
  export let heading: Maybe<string> | undefined;
  export let slug: Maybe<string> | undefined;
</script>

<article class="group">
  <a href={$page.params.lang ? "/" +$page.params.lang+"/diary/"+slug : "/bg" + "/diary/"+slug}>
    <div class="flex flex-col items-center space-y-5">
      <img {src} {alt} loading="lazy" class="w-20 md:w-36 h-20 md:h-36 object-cover rounded-full group-hover:scale-105 transition-all duration-500" />
      <div class="flex flex-col items-center space-y-1">
        <time class=" text-brown text-xs sm:text-sm md:text-base whitespace-nowrap uppercase font-sansy" datetime={new Date(date).toDateString()}>{getDate(new Date(date), $page.params.lang ? $page.params.lang : "bg")}</time>
        <h3 class="text-center text-sm md:text-base opacity-80 group-hover:opacity-100 text-gray font-serif italic">{heading}</h3>
      </div>
    </div>
  </a>
</article>
