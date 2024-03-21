<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { slide } from "svelte/transition";
  import Cart from "$lib/components/page/checkout/Cart.svelte";
  import EmptyCart from "$lib/components/page/checkout/EmptyCart.svelte";
  import OrderForm from "$lib/components/page/checkout/OrderForm.svelte";
  import OrderSummary from "$lib/components/page/checkout/OrderSummary.svelte";
  import PaymentMethods from "$lib/components/page/checkout/PaymentMethods.svelte";
  import StepMap from "$lib/components/page/checkout/StepMap.svelte";
  import { isInverted } from "$lib/store/store.js";
  import { onMount } from "svelte";
  import Consent from "$lib/components/page/checkout/Consent.svelte";
  import type { Order } from "$lib/types/orderTypes";

  export let data;
  let cart: Order;
  let step = 1;

  // @ts-ignore
  $: cart = data;
  $isInverted = false;

  // check if the fileds from step:3 are empty
  let customerDetails = false;
  $: customerDetails = Boolean(firstName && lastName && email && phone && country && city && region && postCode && address)


  // STEP:2 Information Consent
  let customerNote: string | null;
  let ageConsent: string | number | null;
  let policyConsent: string | number | null;
  let marketingConsent: string | number | null;

  // STEP:3 Checkout form
  let firstName: string | null
  let lastName: string | null
  let email: string | null
  let phone: string | null

  let country: string | null
  let city: string | null
  let region: string | null
  let postCode: string | null 
  let address: string | null

  let invoice: boolean | null | string
  let companyName: string | null
  let companyVat: string | number | null
  let companyCountry: string | null
  let companyAddress: string | null

  // STEP:4 Delivery method
  let deliveryMethod: any
  let deliveryConsent: any

  // STEP:5 Payment method
  let paymentMethod: any

  
  function toggleSteps(direction: "forwards" | "backwards") {
    if (direction === "forwards" && step < 5) {
      step += 1;
    }
    
    if (direction === "backwards" && step > 1) {
      step -= 1;
    }
  }


  onMount(() => {
    // STEP:2 Information Consent
    ageConsent = window.sessionStorage.getItem('ageConsent')
    policyConsent = window.sessionStorage.getItem('policyConsent')
    marketingConsent = window.sessionStorage.getItem('marketingConsent')
    customerNote = window.sessionStorage.getItem('customerNote')


    // STEP:3 Checkout form
    firstName = window.sessionStorage.getItem('firstName')
    lastName = window.sessionStorage.getItem('lastName')
    email = window.sessionStorage.getItem('email')
    phone = window.sessionStorage.getItem('phone')
    country = window.sessionStorage.getItem('country')
    city = window.sessionStorage.getItem('city')
    region = window.sessionStorage.getItem('region')
    postCode = window.sessionStorage.getItem('postCode')
    address = window.sessionStorage.getItem('address')
    invoice = window.sessionStorage.getItem('invoice')
    companyName = window.sessionStorage.getItem('companyName')
    companyVat = window.sessionStorage.getItem('companyVat')
    companyCountry = window.sessionStorage.getItem('companyCountry')
    companyAddress = window.sessionStorage.getItem('companyAddress')

    // STEP:4 Delivery & Payment method
    deliveryMethod = window.sessionStorage.getItem('deliveryMethod')
    paymentMethod = window.sessionStorage.getItem('paymentMethod')
    deliveryConsent = window.sessionStorage.getItem('deliveryConsent')


    invalidateAll();
  });
</script>

<div class="px-7 min-h-screen">
  {#if data.items.length > 0}
    <StepMap pageData={data.layoutData} bind:step bind:ageConsent bind:policyConsent bind:customerDetails bind:paymentMethod/>

    {#if step === 1}
      <div transition:slide>
        <Cart pageData={data.layoutData} {cart} {toggleSteps} />
      </div>
    {:else if step === 2}
      <div transition:slide>
        <Consent pageData={data.layoutData} bind:marketingConsent bind:customerNote bind:ageConsent bind:policyConsent {toggleSteps} />
      </div>
    {:else if step === 3}
      <div transition:slide>
        <OrderForm 
          pageData={data.layoutData}
          bind:firstName
          bind:lastName
          bind:email
          bind:phone
          bind:country
          bind:city
          bind:region
          bind:postCode
          bind:address
          bind:invoice
          bind:companyName
          bind:companyVat
          bind:companyCountry
          bind:companyAddress
          bind:customerDetails
          {toggleSteps} 
        />
      </div>
    {:else if step === 4}
      <div transition:slide>
        <PaymentMethods
          pageData={data.layoutData}
          bind:paymentMethod
          bind:deliveryConsent
        {toggleSteps} />
      </div>
    {:else if step === 5}
      <div transition:slide>
        <OrderSummary pageData={data.layoutData} {cart} {toggleSteps} />
      </div>
    {/if}
  {:else}
    <EmptyCart />
  {/if}
</div>
