<script lang=ts>
    export let titleLeft: any = "Начин на доставка"
    export let titleRight: any = "Цена на доставка"
    export let price: any = "5.99"
    export let currencyCode: any = " лв."
    export let toggleSteps: any
    export let backButton: any = "Назад"
    export let nextButton: any = "Напред"
</script>

<section class="h-screen pt-20 flex flex-col items-center">
    <div class="w-full space-y-2 flex flex-col max-w-4xl">
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