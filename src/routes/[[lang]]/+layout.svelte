<script lang=ts>
    import { page } from "$app/stores";
    import Cart from "$lib/components/global/Cart.svelte";
    import Footer from "$lib/components/global/Footer.svelte";
    import Header from "$lib/components/global/Header.svelte";
    import type { Menu, ContactPage } from "../../__generated__/graphql";
    import "../../app.css"
    import gsap from 'gsap/dist/gsap'
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'
    import { onMount } from "svelte";

    export let data

    let menu: Menu
    $: menu = data.data.data.menu.data.attributes
    let contactPage: ContactPage
    $: contactPage = data.data.data.contactPage.data.attributes

    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

</script>

<Header
    menu = {menu}
    address1={contactPage.addressLine1}
    address2={contactPage.addressLine2}
    address3={contactPage.addressLine3}
    email={contactPage.email}
    phone={contactPage.phoneNumber}
    cart={data.cartData}
    contacts={menu.linkContact}
    gpdr={menu.linkGDPR}
    policy={menu.linkPolicy}
/>
<main class="bg-white">
    <slot/>
</main>
<Footer
    address1={contactPage.addressLine1}
    address2={contactPage.addressLine2}
    address3={contactPage.addressLine3}
    email={contactPage.email}
    phone={contactPage.phoneNumber}

    contacts={menu.linkContact}
    gpdr={menu.linkGDPR}
    policy={menu.linkPolicy}
/>