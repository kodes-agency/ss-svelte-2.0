<script lang=ts>
    export let toggleSteps: any
    export let backButton: any = "Назад"
    export let nextButton: any = "Напред"
    export let ageConsent: any = "С настоящото потвърждавам, че съм пълнолетен и мога законно да купувам алкохол."
    export let policyConsent: any = "С настоящото приемам Общите условия за ползване на сайта"
    export let marketingConsent: any = "Да, бих искал да получавам бюлетина на Санта Сара с информация и оферти (публикуван 1-4 пъти годишно)."

</script>

<section class="flex flex-col items-center pt-10 md:pt-20">
    <div class="max-w-sm">
        <form action="" class="w-full flex flex-col space-y-4">
            <div class="">
                <label class="uppercase text-sm font-sansy text-brown" for="remarks">Бележка към поръчката</label>
                <textarea id="remarks" class="form-textarea border border-brown rounded-md w-full" rows="5"/>
            </div>
            <div class="flex space-x-2">
                <input type="checkbox" id="age-consent">
                <label for="age-consent" class="uppercase text-sm font-sansy text-brown">{ageConsent}</label>
            </div>
            <div class="flex space-x-2">
                <input type="checkbox" id="policy-consent">
                <label for="policy-consent" class="uppercase text-sm font-sansy text-brown">{policyConsent}</label>
            </div>
            <div class="flex space-x-2">
                <input type="checkbox" id="marketing-consent">
                <label for="marketing-consent" class="uppercase text-sm font-sansy text-brown">{marketingConsent}</label>
            </div>
        </form>
        <div class="w-full flex justify-end space-x-4 mt-10">
            <button
                on:click={()=>{
                    toggleSteps("backwards")
                }}
                class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1">{backButton}</button>
            <button
                on:click={()=>{
                    toggleSteps("forwards")
                }}
                class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1">{nextButton}</button>
        </div>
    </div>
</section>