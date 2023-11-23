<script lang=ts>
    import type {
        Product,
        ShopPage,
        ComponentProductProductName,
    } from "../../../../__generated__/graphql.js";
    import ProductItem from "../product/Product.svelte";
    import { page } from "$app/stores";
    import { PUBLIC_IMG_URL } from "$env/static/public";
    export let pageData: ShopPage;
    export let product: Product
    export let wine: ComponentProductProductName[]
</script>

<div class=" w-full h-96 border-l border-brown sticky top-32">
    <ProductItem 
        packageTitle={product.packageTitle}
        wine={wine}
    />
</div>