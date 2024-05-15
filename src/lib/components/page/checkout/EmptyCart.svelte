<script lang="ts">
  import Button from "$lib/components/elements/global/Button.svelte";
  import { page } from "$app/stores";


  const translations = {
    bg: {
      heading: "Количката е празна",
      buttonText: "Към магазина"
    },
    en: {
      heading: "Your cart is empty",
      buttonText: "Go to shop"
    },
    de: {
      heading: "Ihr Warenkorb ist leer",
      buttonText: "Zum Shop"
    }
  }
</script>

<section class="h-screen flex flex-col items-center space-y-5 justify-center">
  <h1 class="italic text-gray text-center font-serif text-2xl">{$page.params.lang === "en" ? translations.en.heading : $page.params.lang === "de" ? translations.de.heading : translations.bg.heading}</h1>
  <Button
    link={"/shop/"}
    buttonText={$page.params.lang === "en" ? translations.en.buttonText : $page.params.lang === "de" ? translations.de.buttonText : translations.bg.buttonText}
  ></Button>
</section>
