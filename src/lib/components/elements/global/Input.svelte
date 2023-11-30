<script lang=ts>
    export let type: string
    export let required: boolean
    export let label: string
    export let formClass: string 

    let inputValue:any

    export const snapshot = {
        capture: () => inputValue,
        restore: (value:any) => inputValue = value
    }

</script>

<div class="flex flex-col space-y-1 w-full">
    <label class="uppercase text-sm font-sansy text-brown" for="{label}"> {label} </label>
    <input bind:value={inputValue} id="{label}" required={required} class="{formClass} focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white w-full h-10 text-base text-brown font-sansy border-brown rounded-md">
</div>
