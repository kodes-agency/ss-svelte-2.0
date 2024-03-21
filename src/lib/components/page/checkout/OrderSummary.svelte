<script lang="ts">
  import type { Order } from "$lib/types/orderTypes";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import SummaryItem from "./SummaryItem.svelte";
  import { enhance } from "$app/forms";
  import { formatPrice } from "$lib/functions/formatPrice";
  import type { General } from "$lib/types/payloadTypes";
  export let cart: Order;
  export let toggleSteps: any;;
  export let yourOrderTitle: any = "Вашата поръчка";

  export let pageData: General
</script>

<section class="w-full flex flex-col items-center">
  <div
    class="w-full flex flex-col space-y-1 items-center max-w-4xl pt-10 md:pt-20"
  >
    <p class="uppercase text-sm font-sansy w-full text-brown">
      {pageData.shop.orderTitle}
    </p>
    <div class="flex w-full flex-col border-y border-brown">
      {#each cart.items as el, i}
        <div transition:slide>
          <SummaryItem
            name={el.productName}
            price={el.prices.price}
            quantity={el.quantity}
            total={el.totals.line_total}
            slug={el.productSlug}
          />
        </div>
        {#if cart.items.length != i + 1}
          <div class="w-full bg-brown bg-opacity-40 h-px"></div>
        {/if}
      {/each}
    </div>

    <div class="w-full flex flex-col items-end pt-5">
      <div class="flex space-x-20">
        <p class="font-serif italic text-brown">{pageData.shop.cartTitle}</p>
        <p class="font-serif md:min-w-[120px] text-end text-gray">
          {formatPrice($page.params.lang, cart.totals.total_price)}
        </p>
      </div>
    </div>

    {#if browser}
      <div class="flex flex-col w-full space-y-6 pt-10">
        <div class="w-full space-y-1">
          <p class="uppercase text-sm font-sansy text-brown">
            {pageData.shop.paymentMethodsButton}
          </p>
          <div class="w-full h-px bg-brown"></div>
          <div class="flex flex-row w-full justify-between">
            <p class="text-gray italic font-serif">
              {window.sessionStorage.getItem("paymentMethod") == "card"
                ? pageData.shop.buttonCard
                : pageData.shop.buttonCash}
            </p>
          </div>
        </div>
        <div class="w-full space-y-1">
          <p class="uppercase text-sm font-sansy text-brown">
            {pageData.shop.clientDetails}
          </p>
          <div class="w-full h-px bg-brown"></div>
          <div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.firstName}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("firstName")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.lastName}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("lastName")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.email}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("email")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.phone}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("phone")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.country}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("country")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.region}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("region")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.zipCode}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("postCode")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.city}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("city")}
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <p class="text-gray italic font-serif">{pageData.shop.address}</p>
              <p class="text-gray italic font-serif">
                {window.sessionStorage.getItem("address")}
              </p>
            </div>
          </div>
        </div>

        {#if window && window.sessionStorage.getItem("customerNote")}
          <div class="w-full space-y-1">
            <p class="uppercase text-sm font-sansy text-brown">
              {pageData.shop.orderNote}
            </p>
            <div class="w-full h-px bg-brown"></div>
            <div>
              <div class="flex flex-row w-full justify-between">
                <p class="text-gray italic font-serif">
                  {window.sessionStorage.getItem("customerNote")}
                </p>
              </div>

            </div>
          </div>
        {/if}

        {#if window && window.sessionStorage.getItem("invoice")}
          <div class="w-full space-y-1">
            <p class="uppercase text-sm font-sansy text-brown">
              {pageData.shop.formTitle}
            </p>
            <div class="w-full h-px bg-brown"></div>
            <div>
              <div class="flex flex-row w-full justify-between">
                <p class="text-gray italic font-serif">{pageData.shop.companyName}</p>
                <p class="text-gray italic font-serif">
                  {window.sessionStorage.getItem("companyName")}
                </p>
              </div>
              <div class="flex flex-row w-full justify-between">
                <p class="text-gray italic font-serif">{pageData.shop.vatNumber}</p>
                <p class="text-gray italic font-serif">
                  {window.sessionStorage.getItem("companyVat")}
                </p>
              </div>
              <div class="flex flex-row w-full justify-between">
                <p class="text-gray italic font-serif">{pageData.shop.companyCountry}</p>
                <p class="text-gray italic font-serif">
                  {window.sessionStorage.getItem("companyCountry")}
                </p>
              </div>
              <div class="flex flex-row w-full justify-between">
                <p class="text-gray italic font-serif">{pageData.shop.companyAddress}</p>
                <p class="text-gray italic font-serif">
                  {window.sessionStorage.getItem("companyAddress")}
                </p>
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/if}
    <div class="pt-20 flex flex-col space-y-4">
      <button
        disabled
        class=" font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1"
        >{pageData.shop.buttonPay}</button
        >
        <!-- type="submit"
        form="order" -->
      <button
        on:click={() => {
          toggleSteps("backwards");
        }}
        class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-opacity-70 text-brown bg-white px-6 py-1"
        >{pageData.shop.buttonBack}</button
      >
    </div>
  </div>
</section>

{#if browser }
    <form class="hidden" id="order" action="?/order" method="POST" use:enhance>
    <input
        hidden
        autocomplete="off"
        aria-hidden="true"
        name="paymentMethod"
        type="text"
        value={window.sessionStorage.getItem("paymentMethod")}
    />
    <input
      hidden
      autocomplete="off"
      aria-hidden="true"
      name="customerNote"
      type="text"
      value={window.sessionStorage.getItem("customerNote")}
  />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="firstName"
        type="text"
        value={window.sessionStorage.getItem("firstName")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="lastName"
        type="text"
        value={window.sessionStorage.getItem("lastName")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="email"
        type="text"
        value={window.sessionStorage.getItem("email")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="phone"
        type="text"
        value={window.sessionStorage.getItem("phone")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="country"
        type="text"
        value={window.sessionStorage.getItem("country")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="region"
        type="text"
        value={window.sessionStorage.getItem("region")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="postCode"
        type="text"
        value={window.sessionStorage.getItem("postCode")}
    />
    <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="city"
        type="text"
        value={window.sessionStorage.getItem("city")}
    />
    <input
        autocomplete="off"
        hidden
        name="address"
        type="text"
        value={window.sessionStorage.getItem("address")}
    />

    {#if window.sessionStorage.getItem("invoice")}
        <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="companyName"
        type="text"
        value={window.sessionStorage.getItem("companyName")}
        />

        <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="companyVat"
        type="text"
        value={window.sessionStorage.getItem("companyVat")}
        />

        <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="companyCountry"
        type="text"
        value={window.sessionStorage.getItem("companyCountry")}
        />

        <input
        autocomplete="off"
        hidden
        aria-hidden="true"
        name="companyAddress"
        type="text"
        value={window.sessionStorage.getItem("companyAddress")}
        />
    {/if}
    </form>
{/if}
