<script lang="ts">
  import type { B2BPageB2BPageLayoutDynamicZone } from "../../../__generated__/graphql";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import Image from "../elements/global/Image.svelte";
  import Paragraph from "../elements/global/Paragraph.svelte";
  import TextEditor from "../elements/global/TextEditor.svelte";
  export let layout: B2BPageB2BPageLayoutDynamicZone[];
</script>

<div class="flex flex-col py-10 md:py-20 lg:space-y-10">
  {#each layout as element}
    {#if element.__typename == "ComponentGlobalImage"}
      <Image 
        src={PUBLIC_IMG_URL+element.image?.data?.attributes?.url+"?format=webp"}
        alt={element.description}
        orientation={element.imageOrientation}
      />
    {/if}

    {#if element.__typename == "ComponentGlobalTitleNText"}
      <Paragraph 
        smallHeading={element.minorHeading}
        largeHeading={element.majorHeading}
        text={element.text}
        marker={element.marker}
      />
    {/if}
    {#if element.__typename == "ComponentGlobalTextEditor"}
      <!-- <div class="text-editor-wrapper">
        <h2 class="text-editor-heading">
          {element.heading}
        </h2>
        <div class="text-editor-content">{@html element.text}</div>
      </div> -->
      <TextEditor 
        heading={element.heading}
        content={element.text}
      />
    {/if}
    {#if element.__typename == "ComponentGlobalParagraph"}
      <Paragraph 
        text={element.text}
      />
    {/if}
  {/each}
</div>
