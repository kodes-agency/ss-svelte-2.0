<script lang="ts">
  import type { General } from "$lib/types/payloadTypes";
  export let ageConsent: any;
  export let policyConsent: any;
  export let marketingConsent: any;
  export let customerNote: any;
  export let toggleSteps: any;
  export let pageData: General

  let disabledPolicy: boolean = true;

  $: if (ageConsent != null && policyConsent != null) {
    disabledPolicy = false;
  } else {
    disabledPolicy = true;
  }
</script>

<section class="flex flex-col items-center pt-10 md:pt-20">
  <div class="max-w-sm">
    <form action="" class="w-full flex flex-col space-y-4">
      <div class="">
        <label class="uppercase text-sm font-sansy text-brown" for="remarks"
          >{pageData.shop.orderNote}</label
        >
        <textarea
          bind:value={customerNote}
          on:input={({ target }) => {
            window.sessionStorage.setItem(
              "customerNote",
              target.value.toString()
            );
            customerNote = target.value.toString();
          }}
          id="remarks"
          class="form-textarea border bg-white text-brown border-brown rounded-md w-full"
          rows="5"
        />
      </div>
      <div class="flex space-x-2">
        <input
          checked={ageConsent ? true : false}
          on:change={({ target }) => {
            let { checked } = target;

            if (!checked) {
              window.sessionStorage.removeItem("ageConsent");
              ageConsent = window.sessionStorage.getItem("ageConsent");
              return;
            }

            window.sessionStorage.setItem("ageConsent", "1");
            ageConsent = window.sessionStorage.getItem("ageConsent");
          }}
          type="checkbox"
          id="age-consent"
          class="focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
        />
        <label for="age-consent" class="uppercase text-sm font-sansy text-brown"
          >{pageData.shop.ageConsent}*</label
        >
      </div>
      <div class="flex space-x-2">
        <input
          checked={policyConsent ? true : false}
          on:change={({ target }) => {
            let { checked } = target;

            if (!checked) {
              window.sessionStorage.removeItem("policyConsent");
              policyConsent = window.sessionStorage.getItem("policyConsent");
              return;
            }

            window.sessionStorage.setItem("policyConsent", "1");
            policyConsent = window.sessionStorage.getItem("policyConsent");
          }}
          type="checkbox"
          id="policy-consent"
          class="focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
        />
        <label
          for="policy-consent"
          class="uppercase text-sm font-sansy text-brown"
          >{pageData.shop.policyConsent}*</label
        >
      </div>
      <div class="flex space-x-2">
        <input
          checked={marketingConsent ? true : false}
          on:change={({ target }) => {
            let { checked } = target;

            if (!checked) {
              window.sessionStorage.removeItem("marketingConsent");
              marketingConsent =
                window.sessionStorage.getItem("marketingConsent");
              return;
            }

            window.sessionStorage.setItem("marketingConsent", "1");
            marketingConsent =
              window.sessionStorage.getItem("marketingConsent");
          }}
          type="checkbox"
          id="marketing-consent"
          class="focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
        />
        <label
          for="marketing-consent"
          class="uppercase text-sm font-sansy text-brown"
          >{pageData.shop.marketingConsent}</label
        >
      </div>
      <p class="font-sansy text-brown text-sm">* {pageData.shop.compulsoryField}</p>
    </form>
    <div class="w-full flex justify-end space-x-4 mt-10">
      <button
        on:click={() => {
          toggleSteps("backwards");
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1"
        >{pageData.shop.buttonBack}</button
      >
      <button
        disabled={disabledPolicy}
        on:click={() => {
          toggleSteps("forwards");
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        class=" font-sansy uppercase disabled:bg-gray disabled:cursor-not-allowed disabled:bg-opacity-50 text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
        >{pageData.shop.buttonContinueToCheckout}</button
      >
    </div>
  </div>
</section>
