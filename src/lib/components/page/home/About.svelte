<script lang="ts">
  import Button from "$lib/components/elements/global/Button.svelte";
  import { page } from "$app/stores";
  export let src: any
  export let alt: any
  export let text: any
  export let buttonText: any
</script>

<section class="flex flex-col items-center justify-center px-5 md:px-[25vw] space-y-14">
  <img {src} {alt} class="w-80" />
  <div class=".content text-center text-lg text-gray font-serif italic">{@html text}</div>
  <Button link={$page.params.lang ? "/" +$page.params.lang+"/about" : "/bg" + "/about"} {buttonText} />
</section>