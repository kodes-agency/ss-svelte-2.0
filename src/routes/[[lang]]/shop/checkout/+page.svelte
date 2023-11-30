<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { slide } from "svelte/transition";
  import Cart from "$lib/components/page/checkout/Cart.svelte";
  import DeliveryMethods from "$lib/components/page/checkout/DeliveryMethods.svelte";
  import EmptyCart from "$lib/components/page/checkout/EmptyCart.svelte";
  import OrderForm from "$lib/components/page/checkout/OrderForm.svelte";
  import OrderSummary from "$lib/components/page/checkout/OrderSummary.svelte";
  import PaymentMethods from "$lib/components/page/checkout/PaymentMethods.svelte";
  import StepMap from "$lib/components/page/checkout/StepMap.svelte";
  import { isInverted } from "$lib/store/store.js";
  import type { Order } from "$lib/types/orderTypes";
  import { onMount } from "svelte";
  import Consent from "$lib/components/page/checkout/Consent.svelte";
  export let data;

  onMount(() => {
    invalidateAll();
  });

  let cart: Order;
  $: cart = data.cartData;
  $isInverted = false;
  let step = 1;

  function toggleSteps(direction: "forwards" | "backwards") {
    if (direction === "forwards" && step < 6) {
      step += 1;
    }

    if (direction === "backwards" && step > 1) {
      step -= 1;
    }
  }
</script>

<div class="p-3 min-h-screen">
  {#if data.cartData.items.length > 0}
    <StepMap bind:step />

    {#if step === 1}
      <div transition:slide>
        <Cart {cart} {toggleSteps} />
      </div>
    {:else if step === 2}
      <div transition:slide>
        <Consent {toggleSteps} />
      </div>
    {:else if step === 3}
      <div transition:slide>
        <OrderForm {toggleSteps} />
      </div>
    {:else if step === 4}
      <div transition:slide>
        <DeliveryMethods {toggleSteps} />
      </div>
    {:else if step === 5}
      <div transition:slide>
        <PaymentMethods {toggleSteps} />
      </div>
    {:else if step === 6}
      <div transition:slide>
        <OrderSummary {toggleSteps} />
      </div>
    {/if}
  {:else}
    <EmptyCart />
  {/if}
</div>
