<script lang=ts>
    export let toggleSteps: any
    export let backButton: any = "Назад"
    export let nextButton: any = "Плащане"
</script>

<div class="w-full flex justify-end space-x-4 max-w-4xl">
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