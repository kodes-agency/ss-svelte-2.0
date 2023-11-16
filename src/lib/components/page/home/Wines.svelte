<script lang="ts">
  import type { Maybe, VinaEntity  } from "../../../../__generated__/graphql";
  import Button from "$lib/components/elements/global/Button.svelte";
  import SingleWine from "$lib/components/elements/home/SingleWine.svelte";
  import { PUBLIC_IMG_URL } from "$env/static/public";

  export let featuredWines: VinaEntity[];
  export let heading: Maybe<string> | undefined;
  export let subHeading: Maybe<string> | undefined;
  export let buttonText: Maybe<string> | undefined;
</script>

<section class="flex flex-col items-center justify-center space-y-14">
  <h2 class="flex flex-col items-center text-center justify-center space-y-2 md:space-y-4">
    <span class="text-gray font-serif text-2xl md:text-4xl">
      {heading}
    </span>
    <i class="text-brown font-serif italic text-xl md:text-2xl">
      {subHeading}
    </i>
  </h2>
  <div class="flex flex-col md:flex-row items-center space-x-5 justify-center">
    {#each featuredWines as wine }
        <SingleWine 
            title={wine.attributes?.name}
            date={wine.attributes?.harvestYear}
            src={PUBLIC_IMG_URL + wine.attributes?.image?.data?.attributes?.url+"?format=webp"}
            alt={wine.attributes?.image?.data?.attributes?.alternativeText}
            slug={wine.attributes?.slug}
        />
    {/each}
  </div>
  <Button
    link="/wine"
    buttonText={buttonText}
  />
</section>
