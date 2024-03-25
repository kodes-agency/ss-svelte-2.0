<script lang="ts">
  import Button from "$lib/components/elements/global/Button.svelte";
  import { page } from "$app/stores";
  export let heading: string = "За сега количката ви е празна.";
  export let buttonText: string = "Всички продукти";
</script>

<section class="h-screen flex flex-col items-center space-y-5 justify-center">
  <h1 class="italic text-gray font-serif text-2xl">{heading}</h1>
  <Button
    link={"/shop/"}
    {buttonText}
  ></Button>
</section>
