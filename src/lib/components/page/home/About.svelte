<script lang="ts">
  import Button from "$lib/components/elements/global/Button.svelte";
  import type { Maybe } from "../../../../__generated__/graphql";
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;
  export let text: Maybe<string> | undefined;
  export let buttonText: Maybe<string> | undefined;
</script>

<section class="flex flex-col items-center justify-center px-5 md:px-[25vw] space-y-14">
  <img {src} {alt} class="w-80" />
  <div class=".content text-center text-lg text-gray font-serif italic">{@html text}</div>
  <Button link="/about" {buttonText} />
</section>