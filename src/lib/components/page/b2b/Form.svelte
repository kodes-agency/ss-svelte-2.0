<script lang="ts">
    import {page} from "$app/stores"
    import Button from "$lib/components/elements/global/Button.svelte";
    import type { ContactForm } from "../../../../__generated__/graphql";
    import { onMount } from "svelte";
    export let formData: ContactForm;

    let modal: HTMLElement

    function submitHandler(e:Event){  
        e.preventDefault()
        modal.style.display = "none"
    }

</script>


<section class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center max-w-3xl w-full">
        {#if $page?.form?.success}
            <div bind:this={modal} class="flex fixed top-0 h-screen justify-center space-y-5 bg-white w-full flex-col items-center p-2">
                <p class="font-serif text-3xl text-gray md:text-4xl">{formData.thankYouHeading}</p>
                <p class="font-serif text-brown text-lg ">{formData.thankYouSubheading}</p>
                <button 
                    class="uppercase font-sansy text-sm text-brown py-1 px-6 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500"
                    on:click={submitHandler}
                >
                {formData.thankYouButton}
                </button>
            </div>
        {/if}
        {#if !$page.form }
        <h2 class="text-3xl md:text-4xl font-serif text-gray mb-14">{formData.formHeading}</h2>
            <form method="POST" class="w-full flex flex-col items-center space-y-10 p-5">
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full md:justify-around">
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="contactPerson">{formData.contactNameField}</label>
                        <input class="form-input bg-white rounded-sm" required type="text" name="contactPerson" id="contactPerson">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="companyName">{formData.companyNameField}</label>
                        <input class="form-input bg-white rounded-sm" type="text" name="companyName" id="companyName">
                    </div>
                </div>
                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {formData.businessActivity}
                    </p>
                    <p class="font-sansy text-brown">
                        {formData.chooseOption}
                    </p>
                    <div class="flex flex-col md:flex-row md:space-x-10">
                        <div class="check-field-container">
                            <input class="form-radio" required type="radio" name="businessActivity" id="privatePerson" value="частно лице">
                            <label class="text-gray font-serif lowercase" for="privatePerson">{formData.privatePerson}</label>
                        </div>
                        <div class="check-field-container">
                            <input class="form-radio" required type="radio" name="businessActivity" id="company" value="търговец">
                            <label class="text-gray font-serif lowercase" for="company">{formData.company}</label>
                        </div>  
                        <div class="check-field-container">
                            <input class="form-radio" required type="radio" name="businessActivity" id="horeca" value="хорека">
                            <label class="text-gray font-serif lowercase" for="horeca">{formData.horeca}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {formData.interests}
                    </p>
                    <p class="font-sansy text-brown">
                        {formData.chooseOption}
                    </p>
                    <div class="flex flex-col md:flex-row md:space-x-10">
                        <div class="flex items-center space-x-2">
                            <input class="form-checkbox" value="Бели вина" type="checkbox" name="whiteWines" id="whiteWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="whiteWines">{formData.whiteWines}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input class="form-checkbox" value="Червени вина" type="checkbox" name="redWines" id="redWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="redWines">{formData.redWines}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input class="form-checkbox" value="Розе вина" type="checkbox" name="roseWines" id="roseWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="roseWines">{formData.roseWines}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input class="form-checkbox" value="Колекционни вина" type="checkbox" name="collectionWines" id="collectionWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="collectionWines">{formData.collectionWines}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input class="form-checkbox" value="посещения" type="checkbox" name="visits" id="visits">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="visits">{formData.visits}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {formData.knowledge}
                    </p>
                    <p class="font-sansy text-brown">
                        {formData.chooseOption}
                    </p>
                    <div class="flex space-x-10">
                        <div class="check-field-container">
                            <input required value="true" type="radio" name="knowledge" id="knowledge-yes">
                            <label class=" text-gray font-serif uppercase" for="knowledge-yes">{formData.yes}</label>
                        </div>
                        <div class="check-field-container">
                            <input required value="false" type="radio" name="knowledge" id="knowledge-no">
                            <label class=" text-gray font-serif uppercase" for="knowledge-no">{formData.no}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {formData.curentOffering}
                    </p>
                    <p class="font-sansy text-brown">
                        {formData.chooseOption}
                    </p>
                    <div class="flex space-x-10">
                        <div class="check-field-container">
                            <input value="true" type="radio" name="offering" id="offering-yes">
                            <label class=" text-gray font-serif uppercase" for="offering-yes">{formData.yes}</label>
                        </div>
                        <div class="check-field-container">
                            <input value="false" type="radio" name="offering" id="offering-no">
                            <label class=" text-gray font-serif uppercase" for="offering-no">{formData.no}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-around">
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="phoneNumber">{formData.phoneNumber}</label>
                        <input class="form-input bg-white rounded-sm" required type="text" name="phoneNumber" id="phoneNumber">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="email">{formData.email}</label>
                        <input class="form-input bg-white rounded-sm" required type="email" name="email" id="email">
                    </div>
                </div>

                <div class="pt-10">
                    <button aria-label="Submit form button" class="uppercase font-sansy text-sm text-brown py-1 px-12 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500">{formData.buttonTextSend}</button>
                </div>
            </form>
        {/if}
    </div>
</section>