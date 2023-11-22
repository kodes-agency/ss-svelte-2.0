<script lang=ts>
    import type { ComponentShopPageShopPageInfoTab } from "../../../../__generated__/graphql";
     export let infoTab: ComponentShopPageShopPageInfoTab[]
</script>

<div class="max-w-6xl grid grid-cols-1 md:grid-cols-3">
    {#each infoTab as el, i }
      <div class="p-5 md:p-10 flex flex-col space-y-10 {i == 1 ? "md:border-x border-brown" : ""}">
        <div class="flex flex-col items-center space-y-4">
          <h2 class="font-sansy text-brown text-center uppercase text-xl">{el.tabHeading}</h2>
          <div class="w-16 h-px bg-brown"></div>
        </div>
        <div class="font-serif italic text-gray">{@html el.tabContent}</div>
      </div>
    {/each}
</div>