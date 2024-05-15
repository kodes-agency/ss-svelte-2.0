<script lang="ts">
  import type { General } from "$lib/types/payloadTypes";
  export let deliveryConsent: any;
  export let toggleSteps: any;
  export let paymentMethod: any; 

  export let pageData: General
</script>

<section class="pt-20 flex flex-col items-center">
  <div class="w-full space-y-10 flex flex-col max-w-4xl">
    <div class="flex flex-col space-y-1">
        <div class="flex justify-between">
          <p class="uppercase text-sm font-sansy text-brown">{pageData.shop.deliveryMethodsButton}</p>
        </div>
        <div class="w-full h-px bg-brown"></div>
        <div class="flex p-3 pr-4 justify-between items-center">
          <label class="italic text-gray font-serif pr-10 md:pr-20" for="deliveryConsent">{pageData.shop.deliveryConsent}</label>
          <input
          checked={deliveryConsent ? true : false}
          on:change={({ target }) => {
            let { checked } = target;
            if (!checked) {
              window.sessionStorage.removeItem("deliveryConsent");
              deliveryConsent = window.sessionStorage.getItem("deliveryConsent");
              return;
            }

            window.sessionStorage.setItem("deliveryConsent", "1");
            deliveryConsent = window.sessionStorage.getItem("deliveryConsent");
          }}
          type="checkbox"
          id="deliveryConsent"
          class="focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
        />
        </div>
        <div class="w-full h-px bg-brown"></div>
    </div>

    <div class="flex flex-col space-y-1">
        <p class="uppercase text-sm font-sansy text-brown">{pageData.shop.paymentMethodsButton}</p>
        <div class="w-full h-px bg-brown"></div>

        <div class=" space-y-4 py-4">
          <div class="flex justify-between items-center px-4">
            <label for="cod" class="italic font-serif text-gray">{pageData.shop.buttonCash}</label>
            <input 
              id="cod" 
              value="cod" 
              name="paymentMethod" 
              type="radio" 
              bind:group={paymentMethod}
              on:click={({target})=>{
                  window.sessionStorage.setItem("paymentMethod", target.value.toString())
                  paymentMethod = target.value.toString()
                }}
              class="form-radio focus:ring-gray rounded-none caret-brown bg-white focus:outline-none focus:border-gray border text-base text-brown font-sansy border-brown">
          </div>
          <div class="flex justify-between items-center px-4">
            <label for="card" class="italic font-serif text-gray">{pageData.shop.buttonCard}</label>
            <input 
              id="card" 
              value="card" 
              name="paymentMethod" 
              type="radio" 
              bind:group={paymentMethod}
              on:click={({target})=>{
                  window.sessionStorage.setItem("paymentMethod", target.value.toString())
                  paymentMethod = target.value.toString()
              }}
              class="form-radio focus:ring-gray rounded-none bg-white caret-brown focus:outline-none focus:border-gray border text-base text-brown font-sansy border-brown">
          </div>
        </div>


        
        <div class="w-full h-px bg-brown"></div>
        <div class="w-full flex justify-end pt-10 space-x-4">
          <button
            on:click={() => {
              toggleSteps("backwards");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1"
            >{pageData.shop.buttonBack}</button
          >
          <button
            on:click={() => {
              toggleSteps("forwards");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={!paymentMethod || !deliveryConsent}
            class="disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-50 font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
            >{pageData.shop.buttonContinueToCheckout}</button
          >
        </div>
    </div>
  </div>
</section>
