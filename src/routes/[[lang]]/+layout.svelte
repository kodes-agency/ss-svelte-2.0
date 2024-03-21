<script lang=ts>
    import Footer from "$lib/components/global/Footer.svelte";
    import Header from "$lib/components/global/Header.svelte";
    import "../../app.css"
    import gsap from 'gsap/dist/gsap'
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'

    export let data

    if(typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger)
    }
</script>

<Header
    cart={data.cartData}
    pageData={data.layoutData}
/>
<main class="bg-white">
    <slot/>
</main>
<Footer
    pageData={data.layoutData}
/>