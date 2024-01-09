<script lang=ts>
    import { formatPrice } from "$lib/functions/formatPrice";
    import { page } from "$app/stores";
    export let name: string
    export let slug: string
    export let quantity: number
    export let price: string
    export let total: string
</script>
<article>
    <div class="p-4 flex md:hidden justify-between items-center">
        <a href="{$page.params.lang ? "/"+$page.params.lang+"/shop/"+slug : "/bg/shop/"+slug}">
            <p class="font-serif italic text-gray">{name}</p>
        </a>
    </div>
    <div class="grid grid-cols-3 md:flex w-full h-10 md:h-auto md:py-4">
        <div class="hidden md:block md:w-6/12">
            <a href="{$page.params.lang ? "/"+$page.params.lang+"/shop/"+slug : "/bg/shop/"+slug}">
                <p class="font-serif italic text-gray">{name}</p>
            </a>
        </div>
        <div class=" md:w-2/12 flex md:block items-center justify-center">
            <div class="flex justify-center items-center">
                <p class="font-serif text-center text-gray">{quantity}</p>
            </div>
        </div>
        <div class="md:w-2/12 border-x border-gray md:border-0 border-opacity-20 flex md:block items-center justify-center">
            <p class="font-serif text-center text-gray">{formatPrice($page.params.lang, price)}</p>
        </div>
        <div class=" md:w-2/12 flex md:block items-center justify-center">
            <p class="font-serif text-end text-gray">{formatPrice($page.params.lang, total)}</p>
        </div>        
    </div>
</article>
