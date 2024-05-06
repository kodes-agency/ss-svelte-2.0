<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { page } from "$app/stores";
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
  
  export let data
  export let form

  onMount(()=>{
    if(form && form.success === true){
      goto($page.params.lang ? `/${$page.params.lang}/shop/checkout/payment.?method=cod&status=201` : `/shop/checkout/payment.?method=cod&status=201`)
    } else if(form && form.success === false){
      goto($page.params.lang ? `/${$page.params.lang}/shop/checkout/payment.?method=cod&status=403` : `/shop/checkout/payment.?method=cod&status=403`)
    }
  })

  let cart: Order;
  let step = 1;

  // @ts-ignore
  $: cart = data.checkoutData
  $isInverted = false;

  // check if the fileds from step:3 are empty


  // STEP:2 Information Consent
  let customerNote: string | null;
  let ageConsent: string | number | null;
  let policyConsent: string | number | null;
  let marketingConsent: string | number | null;

  let invoice: any;

  let customerDetails = false;

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

    invoice = window.sessionStorage.getItem('invoice')

    // STEP:4 Delivery & Payment method
    deliveryMethod = window.sessionStorage.getItem('deliveryMethod')
    paymentMethod = window.sessionStorage.getItem('paymentMethod')
    deliveryConsent = window.sessionStorage.getItem('deliveryConsent')

    // invalidateAll();
  });
</script>

<div class="px-7 min-h-screen">
  {#if data.checkoutData.items.length > 0}
    <StepMap pageData={data.layoutData} bind:step bind:ageConsent bind:policyConsent bind:paymentMethod bind:deliveryConsent bind:customerDetails/>

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
          invoice={invoice}
          pageData={data.layoutData}
          formData={data.customerDetailsForm}
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
        <OrderSummary pageData={data.layoutData} {cart} checkoutData={data.checkoutData} {toggleSteps} signitureDate={data.signitureData} />
      </div>
    {/if}
  {:else}
    <EmptyCart />
  {/if}
</div>
