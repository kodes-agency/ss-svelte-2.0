<script lang="ts">
    import {page} from "$app/stores"
    import type { General } from "$lib/types/payloadTypes";
    import { superForm } from "sveltekit-superforms";
    export let formData
    export let pageData: General

    let modal: HTMLElement

    function submitHandler(e:Event){  
        e.preventDefault()
        modal.style.display = "none"
    }

    const { form, errors, constraints, message, enhance } = superForm(formData, {validators: 'clear'});

</script>


<section class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center max-w-3xl w-full">
        <!-- {#if $page?.form?.success}
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
        {/if} -->
        <!-- {#if !$page.form } -->
        <h2 class="text-3xl md:text-4xl font-serif text-gray mb-5">{pageData.b2b.formTitle}</h2>
            <form method="POST" use:enhance class="w-full flex flex-col items-center space-y-8 p-5">
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full md:justify-around">
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="contactPerson">{pageData.b2b.names}</label>
                        <input class="form-input bg-white rounded-sm" required type="text" name="contactPerson" id="contactPerson" 
                            bind:value={$form.contactPerson}
                            aria-invalid={$errors.contactPerson ? 'true' : undefined}
                        >
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="companyName">{pageData.b2b.companyName}</label>
                        <input class="form-input bg-white rounded-sm" type="text" name="companyName" id="companyName"
                            bind:value={$form.companyName}
                            aria-invalid={$errors.companyName ? 'true' : undefined}
                        >
                    </div>
                </div>
                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {pageData.b2b.questionActivity}
                    </p>
                    <p class="font-sansy text-brown">
                        {pageData.b2b.chooseOption}
                    </p>
                    <div class="flex flex-col md:flex-row md:space-x-10">
                        <div class="check-field-container">
                            <input
                                bind:group={$form.businessActivity}
                                class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" required type="radio" name="businessActivity" id="privatePerson" value="частно лице">
                            <label class="text-gray font-serif lowercase" for="privatePerson">{pageData.b2b.answerPrivatePerson}</label>
                        </div>
                        <div class="check-field-container">
                            <input
                                bind:group={$form.businessActivity}
                                class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" required type="radio" name="businessActivity" id="company" value="търговец">
                            <label class="text-gray font-serif lowercase" for="company">{pageData.b2b.answerSeller}</label>
                        </div>  
                        <div class="check-field-container">
                            <input
                                bind:group={$form.businessActivity}
                                class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" required type="radio" name="businessActivity" id="horeca" value="хорека">
                            <label class="text-gray font-serif lowercase" for="horeca">{pageData.b2b.answerHoreka}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {pageData.b2b.questionServices}
                    </p>
                    <p class="font-sansy text-brown">
                        {pageData.b2b.chooseOption}
                    </p>
                    <div class="flex flex-col md:flex-row md:space-x-10">
                        <div class="flex items-center space-x-2">
                            <input
                                bind:group={$form.interests}
                                class="form-checkbox focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Бели вина" type="checkbox" name="interests" id="whiteWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="whiteWines">{pageData.b2b.answerWhiteWine}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                bind:group={$form.interests}
                                class="form-checkbox focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Червени вина" type="checkbox" name="interests" id="redWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="redWines">{pageData.b2b.answerRedWine}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                bind:group={$form.interests}
                                class="form-checkbox focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Розе вина" type="checkbox" name="interests" id="roseWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="roseWines">{pageData.b2b.answerRoseWine}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                bind:group={$form.interests}
                                class="form-checkbox focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Колекционни вина" type="checkbox" name="interests" id="collectionWines">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="collectionWines">{pageData.b2b.answerCollectionWine}</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                bind:group={$form.interests}
                                class="form-checkbox focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Посещения" type="checkbox" name="interests" id="visits">
                            <label class="text-gray whitespace-nowrap font-serif lowercase" for="visits">{pageData.b2b.answerVisits}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {pageData.b2b.questionFamiliarity}
                    </p>
                    <p class="font-sansy text-brown">
                        {pageData.b2b.chooseOption}
                    </p>
                    <div class="flex space-x-10">
                        <div class="check-field-container">
                            <input
                                bind:group={$form.knowledge}
                                required class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Запознат с вината на SS" type="radio" name="knowledge" id="knowledge-yes">
                            <label class=" text-gray font-serif uppercase" for="knowledge-yes">{pageData.b2b.answerYes}</label>
                        </div>
                        <div class="check-field-container">
                            <input
                                bind:group={$form.knowledge}
                                required class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Незапознат с вината на SS" type="radio" name="knowledge" id="knowledge-no">
                            <label class=" text-gray font-serif uppercase" for="knowledge-no">{pageData.b2b.answerNo}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center space-y-1">
                    <p class="text-xl text-center font-serif text-gray">
                        {pageData.b2b.questionCurrentOffering}
                    </p>
                    <p class="font-sansy text-brown">
                        {pageData.b2b.chooseOption}
                    </p>
                    <div class="flex space-x-10">
                        <div class="check-field-container">
                            <input
                                bind:group={$form.offering}
                                required class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Предлага вината на SS" type="radio" name="offering" id="offering-yes">
                            <label class=" text-gray font-serif uppercase" for="offering-yes">{pageData.b2b.answerYes}</label>
                        </div>
                        <div class="check-field-container">
                            <input
                                bind:group={$form.offering}
                                required class="form-radio focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown" value="Не предлага вината на SS" type="radio" name="offering" id="offering-no">
                            <label class=" text-gray font-serif uppercase" for="offering-no">{pageData.b2b.answerNo}</label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-around">
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="phoneNumber">{pageData.b2b.phone}</label>
                        <input
                            bind:value={$form.phoneNumber} 
                            aria-invalid={$errors.phoneNumber ? 'true' : undefined}
                            class="form-input bg-white rounded-sm" required type="text" name="phoneNumber" id="phoneNumber">
                    </div>
                    <div class="flex flex-col items-center">
                        <label class="font-sansy text-brown" for="email">{pageData.b2b.email}</label>
                        <input
                            bind:value={$form.email} 
                            aria-invalid={$errors.email ? 'true' : undefined}
                            class="form-input bg-white rounded-sm" required type="email" name="email" id="email">
                    </div>
                </div>

                <div class="pt-8">
                    <button aria-label="Submit form button" class="uppercase font-sansy text-sm text-brown py-1 px-12 border border-brown rounded-sm hover:bg-black hover:text-white hover:bg-brown transition-all duration-500">{pageData.b2b.buttonSend}</button>
                </div>
            </form>
        <!-- {/if} -->
    </div>
</section>