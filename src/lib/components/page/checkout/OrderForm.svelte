<script lang="ts">
  import Input from "$lib/components/elements/global/Input.svelte";
  import { countries } from "$lib/store/countries";
  import { enhance } from "$app/forms";
  import { slide } from "svelte/transition";
  import type { General } from "$lib/types/payloadTypes";
  export let firstName,lastName,email,phone,country,city,region,postCode,address,companyName,companyVat,companyCountry,companyAddress;
  export let invoice = true;
  export let customerDetails: any;
  export let pageData: General
  export let toggleSteps: any;

  $: invoice = Boolean(invoice);
</script>

<section class="pt-20 flex flex-col items-center">
  <div class="flex flex-col items-center space-y-20 max-w-4xl w-full">
    <div class="w-full flex flex-col items-center space-y-10">
      <div class="w-full space-y-2 flex flex-col">
        <div class="flex flex-row justify-between w-full">
          <p class="uppercase text-sm font-sansy text-brown">{pageData.shop.formTitle}</p>
          <div class="flex space-x-2">
            <input
              id="invoice"
              bind:checked={invoice}
              on:change={({ target }) => {
                if (target.checked) {
                  window.sessionStorage.setItem(
                    "invoice",
                    target.checked.toString()
                  );
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
        <div class="flex flex-col space-y-2 md:space-y-4 w-full">
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.firstName}
            bind:value={firstName}
            required={true}
            valueStorageLable="firstName"
          />
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.lastName}
            bind:value={lastName}
            required={true}
            valueStorageLable="lastName"
          />
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.phone}
            bind:value={phone}
            required={true}
            valueStorageLable="phone"
          />
          <Input
            type="email"
            formClass="form-input"
            label={pageData.shop.email}
            bind:value={email}
            required={true}
            valueStorageLable="email"
          />
          <div
            class="w-full md:hidden border-b border-brown border-opacity-30"
          ></div>
        </div>
        <div class="hidden md:block h-96 w-1 rounded-full bg-brown"></div>
        <div class="flex flex-col space-y-2 md:space-y-4 w-full">
          <div class="flex flex-col space-y-1 w-full">
            <label
              class="uppercase text-sm font-sansy text-brown"
              for="country"
            >
              {pageData.shop.country}
            </label>
            <select
              on:input={({ target }) => {
                window.sessionStorage.setItem(
                  "country",
                  target?.value.toString()
                );
              }}
              id="country"
              bind:value={country}
              required
              name="country"
              class="form-select focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown w-full h-10 rounded-md"
            >
              {#each countries as country}
                <option value={country.code}>{country.name}</option>
              {/each}
            </select>
          </div>
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.region}
            bind:value={region}
            required={true}
            valueStorageLable="region"
          />
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.city}
            bind:value={city}
            required={true}
            valueStorageLable="city"
          />
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.zipCode}
            bind:value={postCode}
            required={true}
            valueStorageLable="postCode"
          />
          <Input
            type="text"
            formClass="form-input"
            label={pageData.shop.address}
            bind:value={address}
            required={true}
            valueStorageLable="address"
          />
          <div
            class="w-full md:hidden border-b border-brown border-opacity-30"
          ></div>
        </div>
        <div class="hidden md:block h-96 w-1 rounded-full bg-brown"></div>
        <div class="flex flex-col space-y-2 md:space-y-4 w-full">
          {#if invoice}
            <div
              class="flex flex-col space-y-2 md:space-y-4 w-full"
              transition:slide
            >
              <Input
                type="text"
                formClass="form-input"
                label={pageData.shop.companyName}
                bind:value={companyName}
                required={true}
                valueStorageLable="companyName"
              />
              <Input
                type="text"
                formClass="form-input"
                label={pageData.shop.vatNumber}
                bind:value={companyVat}
                required={true}
                valueStorageLable="companyVat"
              />

              <Input
                type="text"
                formClass="form-input"
                label={pageData.shop.companyCountry}
                bind:value={companyCountry}
                required={true}
                valueStorageLable="companyCountry"
              />

              <div class="">
                <label
                  class="uppercase text-sm font-sansy text-brown"
                  for="remarks">{pageData.shop.companyAddress}</label
                >
                <textarea
                  bind:value={companyAddress}
                  on:input={({ target }) => {
                    window.sessionStorage.setItem(
                      "companyAddress",
                      target.value.toString()
                    );
                    companyAddress = target.value.toString();
                  }}
                  required
                  id="remarks"
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
          }}
          class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1"
          >{pageData.shop.buttonBack}</button
        >
        <button
          type="submit"
          form="customerDetails"
          disabled={!customerDetails}
          on:click={(e) => {
            e.preventDefault();
            toggleSteps("forwards");
          }}
          class=" disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-50 font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
          >{pageData.shop.buttonContinueToCheckout}</button
        >
      </div>
    </div>
  </div>
</section>
