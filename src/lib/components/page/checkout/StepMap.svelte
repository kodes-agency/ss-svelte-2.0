<script lang=ts>
    import type { General } from "$lib/types/payloadTypes";
    export let pageData: General
    export let step: number
    export let ageConsent: any
    export let policyConsent: any
    export let paymentMethod: any
    export let deliveryConsent: any
    export let customerDetails: any
    export let numberOfItems: number

</script>

<section class="flex flex-col items-center pt-32 lg:pt-40">
    <div class=" box-content flex -space-x-px">
        <button
            on:click={()=>{
                step = 1
            }}
            class="{step === 1 ? "text-white bg-gray" : "text-gray bg-white"} transition-all duration-300 p-2 px-3 min-w-[20px] flex items-center justify-center lg:p-1 lg:px-3 font-sansy uppercase text-sm border border-gray box-content rounded-l-md">
            <p class="hidden lg:block">{pageData.shop.stepCart}</p>
            <svg class="{step === 1 ? "fill-white" : "fill-gray"} lg:hidden" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        </button>
        <button
            disabled = {numberOfItems < 6}
            on:click={()=>{
                step = 2
            }}
            class="{step === 2 ? "text-white bg-gray" : "text-gray bg-white"} disabled:cursor-not-allowed disabled:text-opacity-50 transition-all duration-300 p-2 px-3 min-w-[20px] flex items-center justify-center lg:p-1 lg:px-3 font-sansy uppercase text-gray text-sm border border-gray box-content">
            <p class="hidden lg:block">{pageData.shop.stepConsent}</p>
            <svg class="{step === 2 ? "fill-white" : "fill-gray"} lg:hidden" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        </button>
        <button
            disabled = {ageConsent == null || policyConsent == null || numberOfItems < 6}
            on:click={()=>{
                step = 3
            }}
            class="{step === 3 ? "text-white bg-gray" : "text-gray bg-white"} disabled:cursor-not-allowed disabled:text-opacity-50 transition-all duration-300 p-2 px-3 min-w-[20px] flex items-center justify-center lg:p-1 lg:px-3 font-sansy uppercase text-gray text-sm border border-gray box-content">
            <p class="hidden lg:block">{pageData.shop.stepClientInfo}</p>
            <svg class="{step === 3 ? "fill-white" : "fill-gray"} lg:hidden" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        </button>
        <button 
            on:click={()=>{
                step = 4
            }}
            disabled = {ageConsent == null || policyConsent == null || customerDetails == false || numberOfItems < 6}
            class="{step === 4 ? "text-white bg-gray" : "text-gray bg-white"} disabled:cursor-not-allowed disabled:text-opacity-50  transition-all duration-300 p-2 px-3 min-w-[20px] flex items-center justify-center lg:p-1 lg:px-3 font-sansy uppercase text-gray text-sm border border-gray box-content">
            <p class="hidden lg:block">{pageData.shop.stepPaymentMethod}</p>
            <svg class="{step === 4 ? "fill-white" : "fill-gray"} lg:hidden" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/></svg>
        </button>
        <button 
            on:click={()=>{
                step = 5
            }}
            disabled = {ageConsent == null || policyConsent == null || paymentMethod == null || deliveryConsent == null || customerDetails == false || numberOfItems < 6}
            class="{step === 5 ? "text-white bg-gray" : "text-gray bg-white"} disabled:cursor-not-allowed disabled:text-opacity-50 transition-all duration-300 p-2 px-3 min-w-[20px] flex items-center justify-center lg:p-1 lg:px-3 font-sansy uppercase text-gray text-sm border border-gray box-content rounded-r-md">
            <p class="hidden lg:block">{pageData.shop.stepFinilize}</p>
            <svg class="{step === 5 ? "fill-white" : "fill-gray"} lg:hidden" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        </button>
    </div>
</section>