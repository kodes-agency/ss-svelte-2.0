<script lang="ts">
  import type { ComponentHomeImgLinks } from "../../../../__generated__/graphql";
  import ImgLink from "$lib/components/elements/home/ImgLink.svelte";
  import { PUBLIC_IMG_URL } from "$env/static/public";

  export let links: ComponentHomeImgLinks[];
</script>

<section class="flex flex-col items-center justify-center">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each links as link}
      <ImgLink
        src={PUBLIC_IMG_URL + link.image?.data?.attributes?.url+"?format=webp"}
        alt={link.image?.data?.attributes?.alternativeText}
        text={link.text}
        link={link.link}
      />
    {/each}
  </div>
</section>
