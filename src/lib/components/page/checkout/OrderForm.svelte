<script lang=ts>
    import Input from "$lib/components/elements/global/Input.svelte";
    import { enhance } from "$app/forms";
    import { slide } from "svelte/transition";
    export let title: any = "Данни за доставка"
    export let toggleSteps: any
    export let backButton: any = "Назад"
    export let nextButton: any = "Напред"
    export let firstName, lastName, email, phone, country, city, region, postCode, address, companyName, companyVat, companyCountry, companyAddress
    export let firstNameLabel = "Име"
    export let lastNameLabel = "Фамилия"
    export let emailLabel = "Имейл"
    export let phoneLabel = "Телефон"
    export let countryLabel = "Държава"
    export let cityLabel = "Град"
    export let regionLabel = "Област"
    export let postCodeLabel = "Пощенски код"
    export let addressLabel = "Адрес"
    export let companyNameLabel = "Име на фирма"
    export let companyVatLabel = "ЕИК (булстат)"
    export let companyCountryLabel = "Държава на регистрация"
    export let companyAddressLabel = "Адрес на регистрация"
    export let invoiceLabel = "Желая да ми бъде издадена фактура"
    export let invoice = true
    export let customerDetails: any

    $: invoice = Boolean(invoice)

    

    const countries = [
        { name: "България", code: "BG" },
        { name: "Albania", code: "AL" },
        { name: "Andorra", code: "AD" },
        { name: "Austria", code: "AT" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Croatia", code: "HR" },
        { name: "Cyprus", code: "CY" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Denmark", code: "DK" },
        { name: "Estonia", code: "EE" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "Greece", code: "GR" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "Ireland", code: "IE" },
        { name: "Italy", code: "IT" },
        { name: "Kosovo", code: "XK" },
        { name: "Latvia", code: "LV" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Malta", code: "MT" },
        { name: "Moldova", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Montenegro", code: "ME" },
        { name: "Netherlands", code: "NL" },
        { name: "North Macedonia", code: "MK" },
        { name: "Norway", code: "NO" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Romania", code: "RO" },
        { name: "Russia", code: "RU" },
        { name: "San Marino", code: "SM" },
        { name: "Serbia", code: "RS" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Spain", code: "ES" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Ukraine", code: "UA" },
        { name: "United Kingdom", code: "GB" },
        { name: "Vatican City", code: "VA" }
    ];


    $: regions = []
    $: cities = []

    let headers = new Headers();
    headers.append('X-CSCAPI-KEY', "MXlEdHdFUDZLV3hmSkJzeG5TWDRNZDB0U01JaTdMUW5CN0ptc1VZMQ==")

    let addressFetchRequestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    async function getRegions(country: string){
        try{
            let response = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, addressFetchRequestOptions)
            let data = await response.json()
            regions = await data
            console.log(regions)
        } catch (error) {
            console.log(error)
        }
    }

    async function getCities(country: string, city: string){
        try{
            let response = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states/${city}/cities`, addressFetchRequestOptions)
            let data = await response.json()
            cities = await data
            console.log(regions)
        } catch (error) {
            console.log(error)
        }
    }

</script>


<section class="pt-20 flex flex-col items-center">
    <div class="flex flex-col items-center space-y-20 max-w-4xl w-full">
        <div class="w-full flex flex-col items-center space-y-10">
            <div class="w-full space-y-2 flex flex-col">
                <div class="flex flex-row justify-between w-full">
                    <p class="uppercase text-sm font-sansy text-brown">{title}</p>
                    <div class="flex space-x-2">
                        <input id="invoice" 
                            bind:checked={invoice} 
                            on:change={({target})=>{
                                if(target.checked){
                                    window.sessionStorage.setItem('invoice', target.checked.toString())
                                } else {
                                    window.sessionStorage.removeItem('invoice')
                                }
                            }} 
                            type="checkbox" 
                            class="focus:ring-gray caret-brown focus:outline-none focus:border-gray border bg-white text-base text-brown font-sansy border-brown">
                        <label class="uppercase text-sm font-sansy text-brown" for="invoice">{invoiceLabel}</label>
                    </div>
                </div>
                <div class="w-full h-px bg-brown"></div>
            </div>
            <form id="customerDetails" action="?/customerDetails" use:enhance method="POST" class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-full">
                <div class="flex flex-col space-y-2 md:space-y-4 w-full">
                    <Input 
                        type="text"
                        formClass="form-input"
                        label={firstNameLabel}
                        bind:value={firstName}
                        required={true}
                        valueStorageLable="firstName"
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label={lastNameLabel}
                        bind:value={lastName}
                        required={true}
                        valueStorageLable="lastName"
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label={phoneLabel}
                        bind:value={phone}
                        required={true}
                        valueStorageLable="phone"
                    />
                    <Input 
                        type="email"
                        formClass="form-input"
                        label={emailLabel}
                        bind:value={email}
                        required={true}
                        valueStorageLable="email"
                    />
                    <div class="w-full md:hidden border-b border-brown border-opacity-30 "></div>
                </div>
                <div class="hidden md:block h-96 w-1 rounded-full bg-brown"></div>
                <div class="flex flex-col space-y-2 md:space-y-4 w-full">
                    <!-- <Input 
                        type="text"
                        formClass="form-input"
                        label={countryLabel}
                        bind:value={country}
                        required={true}
                        valueStorageLable="country"
                    /> -->
                    <select class="form-select" bind:value={country} on:change={({target})=>{
                        getRegions(target.value.toString())
                        window.sessionStorage.setItem("country", target.value.toString())
                        country = target.value.toString()
                    }} required name="country" id="country">
                            <option selected value="">Избери държава</option>
                        {#each countries as country}
                            <option value={country.code}>{country.name}</option>
                        {/each}
                    </select>

                    <select class="form-select" bind:value={region} on:change={({target})=>{
                        getCities(country, target.value.toString())
                        window.sessionStorage.setItem("region", target.value.toString())
                        region = target.value.toString()
                    }} required name="region" id="region">
                            <option selected value="">Избери регион</option>
                        {#if regions.length > 0 }
                            {#each regions as region}
                                <option value={region.iso2}>{region.name}</option>
                            {/each}
                        {/if}
                    </select>

                    <select class="form-select" bind:value={city} on:change={({target})=>{
                        window.sessionStorage.setItem("city", target.value.toString())
                        city = target.value.toString()
                    }} required name="city" id="city">
                            <option selected value="">Избери град</option>
                        {#if cities.length > 0 }
                            {#each cities as city}
                                <option value={city.name}>{city.name}</option>
                            {/each}
                        {/if}
                    </select>


                    <!-- <Input 
                        type="text"
                        formClass="form-input"
                        label={regionLabel}
                        bind:value={region}
                        required={true}
                        valueStorageLable="region"
                    /> -->
                    <Input 
                        type="text"
                        formClass="form-input"
                        label={cityLabel}
                        bind:value={city}
                        required={true}
                        valueStorageLable="city"
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label={postCodeLabel}
                        bind:value={postCode}
                        required={true}
                        valueStorageLable="postCode"
                    />
                    <Input 
                        type="text"
                        formClass="form-input"
                        label={addressLabel}
                        bind:value={address}
                        required={true}
                        valueStorageLable="address"
                    /> 
                    <div class="w-full md:hidden border-b border-brown border-opacity-30 "></div>
                </div>
                <div class="hidden md:block h-96 w-1 rounded-full bg-brown"></div>
                <div class="flex flex-col space-y-2 md:space-y-4 w-full">


                    {#if invoice }
                        <div class="flex flex-col space-y-2 md:space-y-4 w-full" transition:slide>
                            <Input 
                                type="text"
                                formClass="form-input"
                                label={companyNameLabel}
                                bind:value={companyName}
                                required={true}
                                valueStorageLable="companyName"
                            />
                            <Input 
                                type="text"
                                formClass="form-input"
                                label={companyVatLabel}
                                bind:value={companyVat}
                                required={true}
                                valueStorageLable="companyVat"
                            />

                            <Input 
                                type="text"
                                formClass="form-input"
                                label={companyCountryLabel}
                                bind:value={companyCountry}
                                required={true}
                                valueStorageLable="companyCountry"
                            />

                            <div class="">
                                <label class="uppercase text-sm font-sansy text-brown" for="remarks">{companyAddressLabel}</label>
                                <textarea 
                                    bind:value={companyAddress}
                                    on:input={({target})=>{
                                        window.sessionStorage.setItem("companyAddress", target.value.toString())
                                        companyAddress = target.value.toString()
                                    }}
                                    required
                                    id="remarks"  
                                    class="form-textarea border text-brown bg-white border-brown rounded-md w-full" 
                                    rows="3"/>
                            </div>
                        </div>
                    {/if}
                </div>
            </form>
            <div class="w-full flex justify-end space-x-4">
                <button
                    on:click={(e)=>{
                        e.preventDefault()
                        toggleSteps("backwards")
                    }}
                    class=" font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-brown bg-white px-6 py-1">{backButton}</button>
                <button 
                    type="submit" 
                    form="customerDetails"
                    disabled={!customerDetails}
                    on:click={(e)=>{ 
                        e.preventDefault()
                        toggleSteps("forwards")
                    }}
                    class=" disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-50 font-sansy uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-6 py-1">{nextButton}</button>
            </div>
        
        </div>
    </div>  
</section>
