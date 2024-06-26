<script lang="ts">
  import { superForm } from "sveltekit-superforms";
  import { countries } from "$lib/store/countries";
  import { slide } from "svelte/transition";
  import type { General } from "$lib/types/payloadTypes";
  export let invoice = false;
  export let pageData: General;
  export let toggleSteps: any;
  export let formData;
  export let customerDetails: any;

  const { form, errors, constraints, message, enhance } = superForm(formData, {
    validators: "clear",
    onUpdated({ form }) {
      if ($errors.first_name) return;
      if (form.valid) {
        customerDetails = true;
        toggleSteps("forwards");
      } else {
        customerDetails = false;
      }
    },
  });
</script>

<section class="pt-20 flex flex-col items-center">
  {#if $message}
    <p
      transition:slide
      class="text-white bg-brown p-3 rounded-lg mb-5 text-xl font-sansy"
    >
      {$message}
    </p>
  {/if}
  {#if $errors.first_name}
    <p
      transition:slide
      class="text-white bg-brown p-3 rounded-lg mb-5 text-xl font-sansy"
    >
      {$errors.first_name}
    </p>
  {/if}
  <div class="flex flex-col items-center space-y-20 max-w-4xl w-full">
    <div class="w-full flex flex-col items-center space-y-10">
      <div class="w-full space-y-2 flex flex-col">
        <div class="flex flex-row justify-between w-full">
          <p class="uppercase text-sm font-sansy text-brown">
            {pageData.shop.formTitle}
            <span class="text-xs">(*{pageData.shop.compulsoryField})</span>
          </p>

          <div class="flex flex-row-reverse items-center md:flex-row space-x-2">
            <input
              id="invoice"
              bind:checked={invoice}
              on:change={({ target }) => {
                // @ts-ignore
                if (target.checked) {
                  window.sessionStorage.setItem("invoice", "1");
                } else {
                  window.sessionStorage.removeItem("invoice");
                }
              }}
              type="checkbox"
              class="focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
            <label class="uppercase text-sm font-sansy text-brown" for="invoice"
              >{pageData.shop.invoiceRequest}</label
            >
          </div>
        </div>
        <div class="w-full h-px bg-brown"></div>
      </div>
      <form
        id="customerDetails"
        action="?/customerDetails"
        use:enhance
        method="POST"
        class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-full"
      >
        <div class="flex flex-col space-y-2 w-full">
          <div class="flex flex-col space-y-1 w-full">
            <label
              class="uppercase text-sm font-sansy text-brown"
              for="firstName"
            >
              {pageData.shop.firstName} *
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              bind:value={$form.first_name}
              aria-invalid={$errors.first_name ? "true" : undefined}
              {...$constraints.first_name}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              class="uppercase text-sm font-sansy text-brown"
              for="lastName"
            >
              {pageData.shop.lastName} *
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              bind:value={$form.last_name}
              aria-invalid={$errors.last_name ? "true" : undefined}
              {...$constraints.last_name}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label class="uppercase text-sm font-sansy text-brown" for="phone">
              {pageData.shop.phone} *
            </label>
            {#if $errors.phone && $form.phone !== ""}<span
                class="text-gray text-sm">{$errors.phone}</span
              >{/if}
            <input
              type="text"
              id="phone"
              name="phone"
              bind:value={$form.phone}
              aria-invalid={$errors.phone ? "true" : undefined}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label class="uppercase text-sm font-sansy text-brown" for="email">
              {pageData.shop.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={$form.email}
              aria-invalid={$errors.email ? "true" : undefined}
              {...$constraints.email}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <div
            class="w-full md:hidden border-b border-brown border-opacity-30"
          ></div>
        </div>
        <div class="hidden md:block h-96 w-1 rounded-full bg-brown"></div>
        <div class="flex flex-col space-y-2 w-full">
          <div class="flex flex-col space-y-1 w-full">
            <label
              class="uppercase text-sm font-sansy text-brown"
              for="country"
            >
              {pageData.shop.country} *
            </label>
            <select
              id="country"
              bind:value={$form.country}
              aria-invalid={$errors.country ? "true" : undefined}
              {...$constraints.country}
              name="country"
              class="form-select focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown w-full h-10 rounded-md"
            >
              {#each countries as country}
                <option value={country.code}>{country.name}</option>
              {/each}
            </select>
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label class="uppercase text-sm font-sansy text-brown" for="city">
              {pageData.shop.city} *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              bind:value={$form.city}
              aria-invalid={$errors.city ? "true" : undefined}
              {...$constraints.city}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              class="uppercase text-sm font-sansy text-brown"
              for="postcode"
            >
              {pageData.shop.zipCode} *
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              bind:value={$form.postcode}
              aria-invalid={$errors.postcode ? "true" : undefined}
              {...$constraints.postcode}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <div class="flex flex-col space-y-1 w-full">
            <label
              class="uppercase text-sm font-sansy text-brown"
              for="address"
            >
              {pageData.shop.address} *
            </label>
            <input
              type="text"
              id="address"
              name="address_1"
              bind:value={$form.address_1}
              aria-invalid={$errors.address_1 ? "true" : undefined}
              {...$constraints.address_1}
              class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
            />
          </div>
          <input
            type="radio"
            name="subscribe"
            class="hidden pointer-events-none absolute"
            id="subscribe"
            checked={Boolean(window.sessionStorage.getItem("marketingConsent"))}
          />
          <div
            class="w-full md:hidden border-b border-brown border-opacity-30"
          ></div>
        </div>
        <div class="hidden md:block h-96 w-1 rounded-full bg-brown"></div>
        <div class="flex flex-col space-y-2 w-full">
          {#if invoice}
            <div class="flex flex-col space-y-2 w-full" transition:slide>
              <div class="flex flex-col space-y-1 w-full">
                <label
                  class="uppercase text-sm font-sansy text-brown"
                  for="billingAddress_2"
                >
                  {pageData.shop.companyName} *
                </label>
                <input
                  type="text"
                  id="billingAddress_2"
                  name="billingAddress_2"
                  bind:value={$form.billingAddress_2}
                  aria-invalid={$errors.billingAddress_2 ? "true" : undefined}
                  {...$constraints.billingAddress_2}
                  class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
                />
              </div>
              <div class="flex flex-col space-y-1 w-full">
                <label
                  class="uppercase text-sm font-sansy text-brown"
                  for="billingCompany"
                >
                  {pageData.shop.vatNumber} *
                </label>
                <input
                  type="text"
                  id="billingCompany"
                  name="billingCompany"
                  bind:value={$form.billingCompany}
                  aria-invalid={$errors.billingCompany ? "true" : undefined}
                  {...$constraints.billingCompany}
                  class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
                />
              </div>
              <div class="flex flex-col space-y-1 w-full">
                <label
                  class="uppercase text-sm font-sansy text-brown"
                  for="shippingAddress_2"
                >
                  {pageData.shop.companyCountry} *
                </label>
                <input
                  type="text"
                  id="shippingAddress_2"
                  name="shippingAddress_2"
                  bind:value={$form.shippingAddress_2}
                  aria-invalid={$errors.shippingAddress_2 ? "true" : undefined}
                  {...$constraints.shippingAddress_2}
                  class="form-input w-full h-10 rounded-md focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown"
                />
              </div>
              <div class="">
                <label
                  class="uppercase text-sm font-sansy text-brown"
                  for="shippingCompany">{pageData.shop.companyAddress} *</label
                >
                <textarea
                  name="shippingCompany"
                  id="shippingCompany"
                  bind:value={$form.shippingCompany}
                  aria-invalid={$errors.shippingCompany ? "true" : undefined}
                  {...$constraints.shippingCompany}
                  class="form-textarea border text-brown bg-white border-brown rounded-md w-full"
                  rows="3"
                />
              </div>
            </div>
          {/if}
        </div>
      </form>
      <div class="w-full flex justify-end space-x-4">
        <button
          on:click={(e) => {
            e.preventDefault();
            toggleSteps("backwards");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1"
          >{pageData.shop.buttonBack}</button
        >
        <button
          type="submit"
          form="customerDetails"
          on:click={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          class=" disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-50 font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
          >{pageData.shop.buttonContinueToCheckout}</button
        >
      </div>
    </div>
  </div>
</section>
