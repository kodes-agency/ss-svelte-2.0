<script lang="ts">
    export let src: string
    export let alt: string
</script>

<section>
    <img {src} {alt} class="w-full h-screen object-cover">
</section>