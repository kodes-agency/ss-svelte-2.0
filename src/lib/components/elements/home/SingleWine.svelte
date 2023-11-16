<script lang=ts>
   import type { Maybe } from "../../../../__generated__/graphql";
   import { page } from "$app/stores";
   export let src: string | undefined;
   export let alt: Maybe<string> | undefined  
   export let title: Maybe<string> | undefined
   export let date: string | Date
   export let slug: Maybe<string> | undefined
</script>

<article class="group">
    <a href={$page.params.lang ? "/" +$page.params.lang+"/wine/"+slug : "/bg" + "/wine/"+slug}>
        <div class="flex flex-col items-center space-y-4 w-[80vw] md:w-[30vw] lg:w-[20vw] rounded-sm transition-all duration-1000 p-5
            border-b border-b-gray border-l border-l-white border-r border-r-white border-t border-t-white
            group-hover:border-l-gray group-hover:border-r-gray group-hover:border-t-gray
        ">
            <img {src} {alt} loading="lazy" class="h-80">
            <div class="flex flex-col items-center justify-center space-y-1">
                <h3 class="text-sm font-serif italic text-gray text-center">{title}</h3>
                <time class="text-sm font-serif text-brown" datetime={new Date(date).getFullYear().toLocaleString()}>{new Date(date).getFullYear()}</time>
            </div>
        </div>
    </a>
</article>