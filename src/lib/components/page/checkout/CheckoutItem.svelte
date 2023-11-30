<script lang=ts>
  import { invalidateAll } from "$app/navigation";

    export let name: string
    export let quantity: number
    export let price: string
    export let cartItemKey: string


    async function handleItem(action: "delete" | "update", updater?: number) {
        if(action === "update" && typeof updater != "undefined") {
            let newQuantity = quantity + updater
            try {
                console.log("update")
                const response = await fetch('/api/cart/update-item', {
                    method: "POST",
                    body: JSON.stringify({
                        key: cartItemKey,
                        quantity: newQuantity 
                    })
                })
                console.log(await response.json())
            } catch(er){
                console.log(er)
            }
        }

        if(action === "delete") {
            try {
                const response = await fetch('/api/cart/remove-item', {
                    method: "POST",
                    body: JSON.stringify({
                        key: cartItemKey,
                    })
                })
                console.log(await response.json())
            } catch(er){
                console.log(er)
            }
        }
        invalidateAll()
    }
</script>
<article>
    <div class="p-4 flex md:hidden justify-between items-center">
        <p class="font-serif italic text-gray">{name}</p>
        <button
            on:click={()=>{
                handleItem("delete")
            }}
            class="w-4 flex flex-col justify-center items-center rounded-full h-4 bg-brown relative ">
            <div class="h-0.5 w-3 bg-white rounded-full absolute -rotate-45"></div>
            <div class="h-0.5 w-3 bg-white rounded-full absolute rotate-45"></div>
        </button>
    </div>
    <div class="grid grid-cols-3 md:flex w-full h-10 md:h-auto md:py-4 md:px-6">
        <div class="hidden md:block md:w-4/12">
            <p class="font-serif italic text-gray">{name}</p>
        </div>
        <div class=" md:w-3/12 flex md:block items-center justify-center">
            <div class="flex justify-center items-center">
                <button
                    on:click={()=>{
                        handleItem("update", -1)
                    }}
                    class="">
                    <div class="w-8 md:w-6 h-4 flex flex-col items-center justify-center bg-white">
                        <div class="h-0.5 w-3 md:w-2 bg-brown rounded-full"></div>
                    </div>
                </button>
                <p class="font-serif text-center text-gray">{quantity}</p>
                <button
                    on:click={()=>{
                        handleItem("update", 1)
                    }}
                >
                    <div class="relative w-8 md:w-6 h-4 flex items-center justify-center">
                        <div class="h-0.5 w-3 md:w-2 bg-brown rounded-full absolute"></div>
                        <div class="h-0.5 w-3 md:w-2 bg-brown rounded-full absolute rotate-90"></div>
                    </div>
                </button>
            </div>
        </div>
        <div class="md:w-2/12 border-x border-gray md:border-0 border-opacity-20 flex md:block items-center justify-center">
            <p class="font-serif text-center text-gray">{(Number(price)/100).toFixed(2)} лв.</p>
        </div>
        <div class=" md:w-2/12 flex md:block items-center justify-center">
            <p class="font-serif text-center text-gray">{(((Number(price)/100))*quantity).toFixed(2)} лв.</p>
        </div>
        <div class="hidden md:w-1/12 md:flex justify-end items-center">
            <button
                on:click={()=>{
                    handleItem("delete")
                }}
                class="w-4 flex flex-col justify-center items-center rounded-full h-4 bg-brown relative ">
                <div class="h-0.5 w-3 bg-white rounded-full absolute -rotate-45"></div>
                <div class="h-0.5 w-3 bg-white rounded-full absolute rotate-45"></div>
            </button>
        </div>
    </div>
</article>
