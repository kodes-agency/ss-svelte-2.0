<script lang=ts>
    import Footer from "$lib/components/global/Footer.svelte";
    import Header from "$lib/components/global/Header.svelte";
    import "../../app.css"
    import gsap from 'gsap/dist/gsap'
    import ScrollTrigger from 'gsap/dist/ScrollTrigger'
    import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
    import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
    import type { General } from "$lib/types/payloadTypes";
    import AgeVerification from "$lib/components/global/AgeVerification.svelte";

    export let data
    let layoutData: General
    $: layoutData = data.layoutData

    if(typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger)
    }

    function initAnalytics () {
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-73K1X6NXFY'); 
    }
    function initTracking () {
        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
            key: "AIzaSyBiC2VtbYqBF9LiGUlRqQVyZ8O_NtG0I74",
            v: "weekly",
        });

        !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1619319361884292'); 
            fbq('track', 'PageView');
    }
    function initNecessary () {
        // do something with segment.io or google analytics etc

    }

</script>

<svelte:head>
    <!-- <title>{data.menu.seo.data.attributes.seoTitle}</title>
    <meta name="title" content="{data.menu.seo.data.attributes.seoTitle}">
    <meta name="description" content="{data.menu.seo.data.attributes.seoDescription}">
    <meta name="keywords" content="{data.menu.seo.data.attributes.seoKeywords}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"> -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-73K1X6NXFY"></script>
</svelte:head>


<Header
    cart={data.cartData}
    pageData={data.layoutData}
/>
<AgeVerification
    verified={data.verified}
    pageData={data.layoutData}
>
</AgeVerification>

<main class="bg-white">
    <slot/>
</main>
<Footer
    pageData={data.layoutData}
/>
<GdprBanner 
    heading={layoutData.cookieBanner.heading}
    description = {layoutData.cookieBanner.description}
    cookieName="gdpr_cookie_consent"
    acceptLabel={layoutData.cookieBanner.buttonAccept}
    settingsLabel={layoutData.cookieBanner.buttonSettings}
    rejectLabel={layoutData.cookieBanner.buttonReject}
    closeLabel={layoutData.cookieBanner.buttonClose}
    choices={{
        necessary: {
            label: `${layoutData.cookieBanner.necessaryLabel}`,
            description: `${layoutData.cookieBanner.necessaryDescription}`,
            value: true
        },
        tracking: {
            label: `${layoutData.cookieBanner.trackingLabel}`,
            description: `${layoutData.cookieBanner.trackingDescription}`,
            value: true
        },
        analytics: {
            label: `${layoutData.cookieBanner.analyticLabel}`,
            description: `${layoutData.cookieBanner.analyticDescription}`,
            value: true
        },
        marketing: false
    }}
    on:analytics={initAnalytics}
    on:tracking={initTracking}
    on:necessary={initNecessary}
/>