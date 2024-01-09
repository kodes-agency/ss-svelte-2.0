<script lang="ts">
  export let title: any = "Метод на плащане";
  export let toggleSteps: any;
  export let paymentMethod: any;
  export let backButton: any = "Назад";
  export let nextButton: any = "Напред";
  export let titleLeft: any = "Начин на доставка";
  export let titleRight: any = "Цена на доставка";
  export let price: any = "5.99";
  export let currencyCode: any = " лв.";
</script>

<section class="h-screen pt-20 flex flex-col items-center">
  <div class="w-full space-y-10 flex flex-col max-w-4xl">
    <div class="flex flex-col space-y-1">
        <div class="flex justify-between">
          <p class="uppercase text-sm font-sansy text-brown">{titleLeft}</p>
          <p class="uppercase text-sm font-sansy text-brown">{titleRight}</p>
        </div>
        <div class="w-full h-px bg-brown"></div>
        <div class="flex p-3 justify-between">
          <p class="italic text-gray font-serif">Стандартна доставка</p>
          <p class="italic text-gray font-serif">{price} {currencyCode}</p>
        </div>
        <div class="w-full h-px bg-brown"></div>
    </div>

    <div class="flex flex-col space-y-1">
        <p class="uppercase text-sm font-sansy text-brown">{title}</p>
        <div class="w-full h-px bg-brown"></div>

        <div class=" space-y-4 py-4">
          <div class="flex justify-between items-center px-4">
            <label for="cod" class="italic font-serif text-gray">В брой при доставка</label>
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
            <label for="card" class="italic font-serif text-gray">С дебитна/кредитна карта - Mastercard или Visa</label>
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
            }}
            class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1"
            >{backButton}</button
          >
          <button
            on:click={() => {
              toggleSteps("forwards");
            }}
            disabled={!paymentMethod}
            class="disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-50 font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1"
            >{nextButton}</button
          >
        </div>
    </div>
  </div>
</section>
