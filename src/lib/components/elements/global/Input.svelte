<script lang=ts>
    export let type: string = "text"
    export let required: boolean
    export let label: string
    export let formClass: string 
    export let value: any = ""
    export let valueStorageLable: string
</script>

<div class="flex flex-col space-y-1 w-full">
    <label class="uppercase text-sm font-sansy text-brown" for="{label}"> {label} * </label>
    <input 
        on:input={({target})=>{
            window.sessionStorage.setItem(valueStorageLable, target.value.toString())
            value = target.value.toString()
        }}
        id="{label}" 
        {value} 
        {required} 
        {type} 
        name={valueStorageLable}
        class="{formClass} focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white {type == "checkbox" || type == "radio" ? "" : "w-full h-10 rounded-md"} text-base text-brown font-sansy border-brown">
</div>
