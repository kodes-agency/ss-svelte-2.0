<script lang=ts>
    import Input from "$lib/components/elements/global/Input.svelte";
    export let title: any = "Данни за фактуриране"
    export let toggleSteps: any
    export let backButton: any = "Назад"
    export let nextButton: any = "Напред"
</script>

<section class="pt-20 flex flex-col items-center">
    <div class="flex flex-col items-center space-y-20 max-w-4xl w-full">
        <form action="" class="w-full flex flex-col items-center space-y-10">
            <div class="w-full space-y-2 flex flex-col">
                <p class="uppercase text-sm font-sansy text-brown">{title}</p>
                <div class="w-full h-px bg-brown"></div>
            </div>
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-full">
                <div class="flex flex-col space-y-2 md:space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Име и фамилия"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Име на фирма"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Област"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Номер къща/блок"
                        required={true}
                    />
                    <div class="w-full md:hidden border-b border-brown border-opacity-30 "></div>
                </div>
                <div class="hidden md:block h-full w-1 rounded-full bg-brown"></div>
                <div class="flex flex-col space-y-2 md:space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Държава"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Град"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Адрес"
                        required={true}
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Пощенски код"
                        required={true}
                    />
                    <div class="w-full md:hidden border-b border-brown border-opacity-30 "></div>
                </div>
                <div class="hidden md:block h-full w-1 rounded-full bg-brown"></div>
                <div class="flex flex-col space-y-2 md:space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label="Телефон"
                        required={true}
                    />
                    <Input 
                        type="email"
                        formClass="form-input"
                        label="Имел"
                        required={true}
                    />
                </div>
            </div>
        
            <div class="w-full flex justify-end space-x-4">
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
        </form>
    </div>  
</section>