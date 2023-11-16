<script lang=ts>
    import type { GdprPage } from '../../../__generated__/graphql.js';
    import { isInverted } from "$lib/store/store.js";

    export let data

    let pageData: GdprPage
    $: pageData = data.data?.gdprPage?.data?.attributes    
    $isInverted = false

    $:console.log(pageData)
</script>

<section class="p-5 py-32 flex flex-col items-center">
    <div class="flex flex-col space-y-10 max-w-4xl">
        <h1 class="text-3xl text-center md:text-4xl font-serif text-gray">{pageData.pageHeading}</h1>
        <div class="content font-serif text-gray">{@html pageData.pageContent}</div>
    </div>
</section>

<style>
    :global(.content h2){
      font-size: 20px;
      font-weight: bold;
    }
  
    :global(.content h3){
      font-size: 180px;
      font-weight: bold;
    }
  
    :global(.content h4){
      font-size: 18px;
      font-weight: bold;
    }
  
    :global(.content ul){
      list-style: inside;
    }
  
    :global(.content li){
      padding: 5px;
    }

    :global(.content a){
        color: #847748;
        text-decoration: underline;
    }
  </style>