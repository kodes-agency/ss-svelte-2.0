<script lang="ts">
  import type { Page } from "$lib/types/payloadTypes";
  import { PUBLIC_IMG_URL } from "$env/static/public";
  import { page } from "$app/stores";
  import Button from "../elements/global/Button.svelte";
  import SingleNews from "../elements/global/SingleNews.svelte";
  import SingleDiary from "../elements/global/SingleDiary.svelte";
  import SingleWine from "../elements/home/SingleWine.svelte";
  import ImgLink from "../elements/home/ImgLink.svelte";
  import { onMount } from "svelte";

  export let pageData: Page

  let isLoaded = false
  onMount(()=>{
      isLoaded = true
  })

</script>

<div class="flex flex-col space-y-20 md:space-y-32">
    {#if pageData && pageData.layout }
        {#each pageData.layout as element }
            <!-- Hero Section -->
            {#if element.__typename === "HeroSection" }
              <section class="flex flex-col h-screen relative justify-center space-y-10 items-center overflow-hidden">
                {#if element.backgroundImg }
                  <img 
                    src={PUBLIC_IMG_URL+element.backgroundImg.url} 
                    alt={element.backgroundImg.alt} 
                    class="img h-screen blur-md scale-125 absolute w-full object-cover">
                  <img 
                    src={PUBLIC_IMG_URL+element.backgroundImg.url} 
                    alt={element.backgroundImg.alt} 
                    class="img {isLoaded ? "opacity-100" : "opacity-0"} transition-all duration-1000 scale-105 delay-200 h-screen absolute w-full object-cover"
                  >
                  <svg class="absolute w-12 bottom-4 h-12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                    <defs>
                    </defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                      <path class="fill-white" d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                  </svg>
                {/if}
                {#if $page.route.id === "/[[lang]]"}
                  <svg class="relative" width="142" height="155" viewBox="0 0 142 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_219_171)">
                    <path class="fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M27.9907 137.961V136.539C29.5297 135.946 31.8558 135.235 32.0203 135.2C32.22 135.153 32.5959 135.188 32.5959 135.389V138.186C34.6048 136.136 36.3083 135.2 37.4831 135.2C40.1382 135.2 41.3717 138.577 41.3717 141.397V151.907C41.3717 152.5 41.7477 153.317 42.1823 153.317H43.2866V154.917H37.2247V153.317H38.141C38.6227 153.317 39.1631 152.417 39.1631 151.943V141.551C39.1631 139.857 38.5992 137.451 36.0968 137.605C34.6166 137.7 33.3948 138.731 32.5959 140.307V151.907C32.5959 152.5 33.1128 153.317 33.5475 153.317H34.4874V154.917H28.4489V153.317H29.3652C29.8469 153.317 30.3873 152.417 30.3873 151.943V139.086C30.3873 138.435 29.8821 137.961 29.5179 137.961H27.9789H27.9907ZM46.8346 149.952V138.056H44.5554V136.029C45.3191 136.053 46.0709 136.077 46.8346 136.1V131.373L49.0784 129.891V136.136C50.6644 136.136 52.2622 136.207 53.8716 136.112V138.091L49.0784 138.115V150.118C49.0784 152.097 50.077 152.855 51.3458 152.855C52.0272 152.855 52.7673 152.808 53.7424 152.346V154.135C52.6381 154.645 51.4281 154.929 49.9008 154.929C49.6306 154.929 48.7142 154.81 47.8566 154.135C46.8698 153.365 46.8346 151.374 46.8346 149.94V149.952ZM125.934 123.848V122.047L130.152 121.443C130.41 121.407 130.68 121.609 130.68 122.13V138.636C132.537 135.615 134.593 135.318 135.779 135.318C138.434 135.318 139.668 138.553 139.668 141.385V151.895C139.668 152.488 140.044 153.306 140.478 153.306H141.583V154.905H135.521V153.306H136.437C136.919 153.306 137.459 152.405 137.459 151.931V141.907C137.459 140.212 136.684 137.771 134.17 137.937C132.689 138.032 131.468 139.193 130.669 140.769V151.895C130.669 152.488 131.186 153.306 131.62 153.306H132.56V154.905H126.522V153.306H127.438C127.92 153.306 128.46 152.405 128.46 151.931V125.247C128.46 124.216 127.861 123.848 127.074 123.848H125.911H125.934ZM102.767 138.008V136.468C104.388 136.207 106.303 135.153 106.468 135.117C106.761 135.046 107.161 135.212 107.161 135.745V142.57C107.701 140.473 108.206 139.24 108.841 137.866C109.651 136.1 110.627 135.07 111.637 135.058C112.941 135.058 113.481 135.994 113.493 137.285C113.493 138.044 112.13 138.909 111.766 138.624C111.543 138.364 111.155 138.316 110.814 138.34C109.123 138.447 107.701 142.985 107.173 145.698V151.895C107.173 152.488 107.689 153.306 108.124 153.306H110.086V154.905H103.026V153.306H103.942C104.424 153.306 104.964 152.405 104.964 151.931V139.229C104.964 138.66 104.4 138.008 103.848 138.008H102.779H102.767ZM1.91 149.419C1.91 151.552 3.93067 152.867 5.93958 152.867C9.59323 152.867 10.5918 149.857 10.5683 146.611C10.5448 143.98 9.74595 141.942 6.1628 139.94C2.94383 138.127 0.899667 135.508 0.899667 131.657C0.899667 126.562 3.90717 123.22 8.64164 123.22C9.92217 123.22 11.9428 123.505 12.8004 123.955V130.958H11.1792L11.05 127.51C10.9912 126.052 9.45225 125.211 8.08948 125.187C5.5519 125.128 3.56648 128.09 3.56648 130.638C3.56648 133.742 4.42408 135.117 7.925 137.048C11.2615 138.897 13.3174 141.788 13.3174 145.58C13.3174 148.412 12.8709 151.256 10.7563 153.104C9.09981 154.55 6.87943 154.988 4.67079 154.988C3.402 154.988 1.58105 154.372 0.394501 153.708L0.500233 146.54C0.899667 146.516 1.46357 146.528 1.89825 146.528V149.419H1.91ZM61.4256 146.16L63.3288 145.983V150.343C62.9646 150.758 62.1423 151.67 61.6841 151.931C60.6033 152.547 59.1935 152.843 58.3477 152.132C57.2668 151.22 57.3843 148.684 58.0774 147.819C58.8411 146.86 60.1451 146.279 61.4374 146.172L61.4256 146.16ZM63.4933 152.358L63.5403 153.922C63.552 154.408 63.8575 154.727 64.5389 154.727H67.4054V153.128H66.5948C65.9251 153.128 65.514 152.476 65.514 151.611V140.888C65.4905 136.942 63.4346 135.307 61.2377 135.307C58.8176 135.33 57.0906 138.067 56.1508 139.584L57.2433 140.39C58.5004 138.447 59.6164 137.416 60.897 137.416C62.7179 137.38 63.3288 138.79 63.3288 140.307V144.419C60.944 144.513 57.6075 144.81 56.0215 147.369C55.0112 149.016 54.9877 151.576 55.9628 153.199C56.6207 154.289 57.7485 154.822 59.1583 154.81C60.1099 154.81 60.944 154.526 61.9191 153.803C62.3185 153.507 63.0704 152.855 63.4816 152.346L63.4933 152.358ZM20.8009 146.16L22.7041 145.983V150.343C22.3399 150.758 21.5175 151.67 21.0593 151.931C19.9785 152.547 18.5687 152.843 17.7229 152.132C16.6421 151.22 16.7595 148.684 17.4527 147.819C18.2163 146.86 19.5203 146.279 20.8126 146.172L20.8009 146.16ZM22.8685 152.358L22.9155 153.922C22.9273 154.408 23.2327 154.727 23.9141 154.727H26.7806V153.128H25.97C25.3004 153.128 24.8892 152.476 24.8892 151.611V140.888C24.8657 136.942 22.8098 135.307 20.6129 135.307C18.1928 135.33 16.4658 138.067 15.526 139.584L16.6186 140.39C17.8756 138.447 18.9917 137.416 20.2722 137.416C22.0932 137.38 22.7041 138.79 22.7041 140.307V144.419C20.3192 144.513 16.9828 144.81 15.3968 147.369C14.3864 149.016 14.3629 151.576 15.338 153.199C15.9959 154.289 17.1237 154.822 18.5335 154.81C19.4851 154.81 20.3192 154.526 21.2943 153.803C21.6937 153.507 22.4456 152.855 22.8568 152.346L22.8685 152.358ZM95.3775 146.16L97.2807 145.983V150.343C96.9165 150.758 96.0942 151.67 95.636 151.931C94.5552 152.547 93.1454 152.843 92.2995 152.132C91.2187 151.22 91.3362 148.684 92.0293 147.819C92.793 146.86 94.097 146.279 95.3893 146.172L95.3775 146.16ZM97.4452 152.358L97.4922 153.922C97.5039 154.408 97.8094 154.727 98.4908 154.727H101.357V153.128H100.547C99.877 153.128 99.4659 152.476 99.4659 151.611V140.888C99.4424 136.942 97.3864 135.307 95.1896 135.307C92.7695 135.33 91.0425 138.067 90.1027 139.584L91.1952 140.39C92.4523 138.447 93.5683 137.416 94.8489 137.416C96.6698 137.38 97.2807 138.79 97.2807 140.307V144.419C94.8959 144.513 91.5594 144.81 89.9734 147.369C88.9631 149.016 88.9396 151.576 89.9147 153.199C90.5726 154.289 91.7004 154.822 93.1102 154.81C94.0618 154.81 94.8959 154.526 95.8709 153.803C96.2704 153.507 97.0223 152.855 97.4334 152.346L97.4452 152.358ZM76.2987 149.407C76.2987 151.54 78.3194 152.855 80.3283 152.855C83.9819 152.855 84.9805 149.846 84.957 146.599C84.9335 143.968 84.1346 141.93 80.5515 139.928C77.3325 138.115 75.2884 135.496 75.2884 131.645C75.2884 126.55 78.2959 123.208 83.0303 123.208C84.3109 123.208 86.3315 123.493 87.1891 123.943V130.946H85.5679L85.4387 127.498C85.3799 126.04 83.8409 125.199 82.4782 125.175C79.9406 125.116 77.9552 128.079 77.9552 130.626C77.9552 133.731 78.8128 135.105 82.3137 137.037C85.6501 138.885 87.706 141.776 87.706 145.568C87.706 148.4 87.2596 151.244 85.145 153.092C83.4885 154.538 81.2681 154.976 79.0595 154.976C77.7907 154.976 75.9697 154.36 74.7832 153.697L74.8889 146.528C75.2884 146.504 75.8523 146.516 76.2869 146.516V149.407H76.2987ZM119.32 146.149L121.223 145.971V150.331C120.859 150.746 120.037 151.659 119.579 151.919C118.498 152.535 117.088 152.832 116.242 152.121C115.161 151.208 115.279 148.672 115.972 147.808C116.735 146.848 118.04 146.267 119.332 146.16L119.32 146.149ZM121.388 152.346L121.435 153.91C121.446 154.396 121.752 154.716 122.433 154.716H125.3V153.116H124.489C123.82 153.116 123.408 152.464 123.408 151.599V140.876C123.385 136.93 121.329 135.295 119.132 135.295C116.712 135.318 114.985 138.056 114.045 139.572L115.138 140.378C116.395 138.435 117.511 137.404 118.791 137.404C120.612 137.368 121.223 138.778 121.223 140.295V144.407C118.838 144.502 115.502 144.798 113.916 147.357C112.906 149.004 112.882 151.564 113.857 153.187C114.515 154.277 115.643 154.81 117.053 154.799C118.004 154.799 118.838 154.514 119.813 153.791C120.213 153.495 120.965 152.843 121.376 152.334L121.388 152.346Z" fill="none"/>
                    <path class=" fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M71.0003 81.9019C79.8349 87.5421 90.2789 89.4025 100.641 88.4308C108.524 87.6962 115.831 85.5159 122.61 82.0204C128.413 79.0344 133.852 75.0649 138.763 70.4081C136.684 70.2422 133.935 70.9176 131.597 72.0078C125.558 77.257 119.79 79.9942 111.331 81.0843C105.692 81.8071 99.8888 81.7242 94.6022 80.717C89.386 79.7335 84.0994 77.7428 79.6704 74.8279C97.4334 57.2554 95.8475 17.0391 71.0003 -0.0119629C44.9666 17.4538 44.8726 56.9829 62.3302 74.8279C57.9012 77.7428 52.6146 79.7216 47.3985 80.717C42.1118 81.7242 36.3083 81.8071 30.6692 81.0843C22.2106 79.9942 16.4306 77.257 10.4038 72.0078C8.06598 70.9176 5.31694 70.2422 3.23753 70.4081C8.14822 75.0649 13.5876 79.0344 19.3911 82.0204C26.1815 85.5159 33.477 87.6843 41.36 88.4308C51.7218 89.4025 62.1658 87.5303 71.0003 81.9019ZM71.0003 67.4813C87.5416 55.9283 83.1243 17.7856 71.0003 6.0667C57.1729 17.7856 54.4591 55.9283 71.0003 67.4813Z" fill="none"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_219_171">
                    <rect class="fill-white" width="141.188" height="155" fill="none" transform="translate(0.40625)"/>
                    </clipPath>
                    </defs>
                  </svg>
                {/if}
                {#if element.title }
                  <h1 class="relative text-3xl mx-4 md:text-4xl max-w-2xl text-center text-white font-serif italic">{element.title}</h1>
                {/if}
                {#if element.subtitle }
                  <p class="relative font-sansy text-white">{element.subtitle}</p>
                {/if}
              </section>
            {/if}

            <!-- Text Section -->
            {#if element.__typename === "TextSection" && element.anchor !== "package"}
              <section class="flex flex-col items-center justify-center space-y-10 px-5 lg:px-0">
                {#if element.anchor }
                  <div id={element.anchor}></div>
                {/if}
                {#each element.blocks as block }
                  {#if block.__typename === "ImgBlock" }
                    <img class="max-w-sm px-10 lg:px-0" src="{PUBLIC_IMG_URL+block.image.url}" alt="{block.image.alt}">
                  {/if}
                  {#if block.__typename === "TitleBlock" }
                    <div class="flex flex-col items-center space-y-4">
                      <p class="text-brown font-sansy text-center text-xl">{block.title}</p>
                      <div class="h-px w-20 bg-brown"></div>
                    </div>
                  {/if}
                  {#if block.__typename === "SubtitleBlock" }
                    <h2 class="text-gray font-serif text-center text-3xl">{block.subtitle}</h2>
                  {/if}
                  {#if block.__typename === "TextBlock" }
                    <div class="text-center max-w-4xl space-y-4 font-serif text-gray text-lg content">{@html block.text_html}</div>
                  {/if}
                  {#if block.__typename === "ButtonBlock" }
                    <Button link="{block.buttonLink}" buttonText={block.buttonText} />
                  {/if}
                  {#if block.__typename === "PolicyBlock" }
                    <h1 class="text-3xl max-w-3xl pt-40 font-serif text-gray text-center">{block.title}</h1>
                    <div class="max-w-4xl space-y-4 font-serif text-gray text-lg policy">{@html block.text_html}</div>
                  {/if}
                {/each}
              </section>
            {/if}

            <!-- Image Section -->
            {#if element.__typename === "ImgSection" }
              <section class="flex flex-col items-center justify-center space-y-2 px-5 lg:px-0">
                <img class="max-w-2xl w-[90vw] md:w-auto object-cover mix-blend-multiply" src={PUBLIC_IMG_URL + element.img.url} alt={element.img.alt} />
                <p class="italic font-serif text-sm text-gray max-w-2xl text-center">{element.text}</p>
              </section>
            {/if}

            <!-- Relationship Section -->
              <!-- Diary Block -->
            {#if element.__typename === "RelationshipSection" }
              <section class="flex flex-col items-center justify-center space-y-10 px-3 lg:px-0">
                {#if element.relationTo[0].__typename === "DiaryRelationship" }
                  <div class="space-y-10">
                    <div class="flex flex-col items-center justify-center space-y-3">
                      <a href={$page.params.lang ? "/"+$page.params.lang+"/diary" : "/bg/diary"}>
                        <h2 class="text-brown uppercase hover:scale-105 transition-all duration-500 text-center">{element.title}</h2>
                      </a>
                      <div class="h-px w-14 bg-brown" />
                    </div>
                    <div class="grid grid-cols-3 max-w-6xl">
                      {#each element.relationTo[0].diary as diary}
                        <SingleDiary
                          src={PUBLIC_IMG_URL + diary?.img?.url}
                          alt={diary?.img?.alt}
                          date={diary?.publishedAt}
                          heading={diary?.title}
                          slug={diary?.slug}
                        /> 
                      {/each}
                    </div>
                  </div>
                {/if}
                
                  <!-- News Block -->
                {#if element.relationTo[0].__typename === "NewsRelationship" }
                  <div class="px-5 lg:px-0">
                    <div class="flex items-center justify-center space-x-2 w-full max-w-6xl">
                      <div class="h-px w-full bg-brown" />
                      <a href={$page.params.lang ? "/"+$page.params.lang+"/news" : "/bg/news"}>
                        <h2 class="text-2xl italic font-serif text-brown hover:scale-105 transition-all duration-500">{element.title}</h2>
                      </a>
                      <div class="h-px w-full bg-brown" />
                    </div>
                    <div class="flex flex-col items-center justify-center p-5 md:p-10">
                      {#each element.relationTo[0].news as article, i}
                        <SingleNews 
                          date={article.publishedAt} 
                          heading={article.title} 
                          slug={article.slug} />
                        {#if i+1 != element.relationTo[0].news.length }
                          <div class="h-px w-60 my-5 bg-brown" />
                        {/if}
                      {/each}
                    </div>
                    <div class="h-px max-w-6xl w-full bg-brown" />
                  </div>
                {/if}

                  <!-- Product Block -->
                {#if element.relationTo[0].__typename === "ProductRelationship" }
                  <div class="flex flex-col items-center justify-center space-y-10">
                    <h2 class="flex flex-col items-center text-center justify-center space-y-2 md:space-y-4">
                      <span class="text-gray font-serif text-2xl md:text-4xl">
                        {element.title}
                      </span>
                      <i class="text-brown font-serif italic text-xl md:text-2xl">
                        {element.subtitle}
                      </i>
                    </h2>
                    <div class="flex flex-col md:flex-row items-center space-x-5 justify-center">
                      {#each element.relationTo[0].product as wine }
                          <SingleWine
                              title={wine.productTitle}
                              date={wine.productBasicInformation.harvestYear}
                              src={PUBLIC_IMG_URL + wine.productBasicInformation.img.url}
                              alt={wine.productBasicInformation.img.alt}
                              slug={wine.slug}
                          />
                      {/each}
                    </div>
                    <Button link={element.buttonLink} buttonText={element.buttonText} />
                  </div>
                {/if}
              </section>
            {/if} 

            <!-- Button Img Section -->
            {#if element.__typename === "ImgButtonSection" }
            <section class="flex flex-col items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {#each element.imgButtonBlock as link}
                  <ImgLink
                    src={PUBLIC_IMG_URL + link.img.url}
                    alt={link.img.alt}
                    text={link.linkText}
                    link={link.link}
                  />
                {/each}
              </div>
            </section>
            
            {/if}

        {/each}
    {/if}
</div>


<style>
  :global(.content ul){
      list-style: inside;
      text-align: start;
  }

  :global(.content li){
      padding-left: 10px;
      padding-bottom: 10px;
      font-style: italic;
  }

    :global(.policy h2){
      font-size: 20px;
      font-weight: bold;
    }
  
    :global(.policy h3){
      font-size: 180px;
      font-weight: bold;
    }
  
    :global(.policy h4){
      font-size: 18px;
      font-weight: bold;
    }
  
    :global(.policy ul){
      list-style: inside;
    }
  
    :global(.policy li){
      padding: 5px;
    }

    :global(.policy a){
        color: #847748;
        text-decoration: underline;
    }
</style>