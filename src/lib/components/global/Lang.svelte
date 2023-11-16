<script lang=ts>
     import { page } from "$app/stores";
     import { isInverted } from "$lib/store/store";
</script>

<section class="flex flex-col fixed top-[70vh] md:top-[85vh] left-5  md:left-10 z-30">
    <a data-sveltekit-reload class="{$isInverted ? "text-white" : "text-brown"} transition-colors duration-300 text-xl uppercase {$page.params.lang == "bg" ? "font-bold" : "font-light"}" href="{$page.url.origin + $page.route.id?.replace("[[lang]]", "bg").replace("[slug]", $page.params.slug)}">бг</a>
    <a data-sveltekit-reload class="{$isInverted ? "text-white" : "text-brown"} transition-colors duration-300 text-xl uppercase {$page.params.lang == "en" ? "font-bold" : "font-light"}" href="{$page.url.origin + $page.route.id?.replace("[[lang]]", "en").replace("[slug]", $page.params.slug)}">en</a>
    <a data-sveltekit-reload class="{$isInverted ? "text-white" : "text-brown"} transition-colors duration-300 text-xl uppercase {$page.params.lang == "de" ? "font-bold" : "font-light"}" href="{$page.url.origin + $page.route.id?.replace("[[lang]]", "de").replace("[slug]", $page.params.slug)}">de</a>
</section> 