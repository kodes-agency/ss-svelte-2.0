<script lang=ts>
    export let title: any = "Метод на плащане"
    export let toggleSteps: any
    export let backButton: any = "Назад"
    export let nextButton: any = "Напред"
</script>

<section class="h-screen pt-20 flex flex-col items-center">
    <div class="w-full space-y-2 flex flex-col max-w-4xl">
        <p class="uppercase text-sm font-sansy text-brown">{title}</p>
        <div class="w-full h-px bg-brown"></div>
        <div class="flex p-3 space-x-40">
            <div>
                <input id="cash" name="payment-method" type="radio" class="form-radio sr-only peer">
                <label for="cash" class="border border-brown cursor-pointer rounded-md p-1 px-4 text-gray italic font-serif peer-checked:bg-brown peer-checked:text-white">
                    С карта
                </label>
            </div>

            <div>
                <input id="card" name="payment-method" type="radio" class="form-radio sr-only peer">
                <label for="card" class="border border-brown cursor-pointer rounded-md p-1 px-4 text-gray italic font-serif peer-checked:bg-brown peer-checked:text-white">
                    В брой
                </label>
            </div>
        </div>
        <div class="w-full h-px bg-brown"></div>
        <div class="w-full flex justify-end pt-10 space-x-4">
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