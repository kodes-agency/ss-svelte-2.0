<script lang="ts">
  export let ageConsent: any;
  export let policyConsent: any;
  export let marketingConsent: any;
  export let customerNote: any;
  export let toggleSteps: any;
  export let backButton: any = "Назад";
  export let nextButton: any = "Напред";
  export let ageConsentText: any =
    "С настоящото потвърждавам, че съм пълнолетен и мога законно да купувам алкохол.";
  export let policyConsentText: any =
    "С настоящото приемам Общите условия за ползване на сайта";
  export let marketingConsentText: any =
    "Да, бих искал да получавам бюлетина на Санта Сара с информация и оферти (публикуван 1-4 пъти годишно).";

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
          >Бележка към поръчката</label
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
          >{ageConsentText}*</label
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
          >{policyConsentText}*</label
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
          >{marketingConsentText}</label
        >
      </div>
      <p class="font-sansy text-brown text-sm">* Задължително поле</p>
    </form>
    <div class="w-full flex justify-end space-x-4 mt-10">
      <button
        on:click={() => {
          toggleSteps("backwards");
        }}
        class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1"
        >{backButton}</button
      >
      <button
        disabled={disabledPolicy}
        on:click={() => {
          toggleSteps("forwards");
        }}
        class=" font-sansy uppercase disabled:bg-gray disabled:cursor-not-allowed disabled:bg-opacity-50 text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
        >{nextButton}</button
      >
    </div>
  </div>
</section>
