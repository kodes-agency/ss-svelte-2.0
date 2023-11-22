<script lang="ts">
  import Button from "$lib/components/elements/global/Button.svelte";
  import type { Maybe } from "../../../../__generated__/graphql";
  export let src: Maybe<string> | undefined;
  export let alt: Maybe<string> | undefined;
  export let heading: Maybe<string> | undefined;
  export let subHeading: Maybe<string> | undefined;
  export let paymentInfoButton: Maybe<string> | undefined;
  export let deliveryInfoButton: Maybe<string> | undefined;
</script>

<section
  class="relative h-[50vh] w-full flex flex-col items-center justify-center"
>
  <img class="h-full absolute w-full object-cover object-center" {src} {alt} />
  <h1
    class="relative text-center text-white uppercase font-sansy font-bold text-4xl mx-5 md:text-6xl"
  >
    {@html heading}
  </h1>
</section>
<section class="flex flex-col items-center p-5 space-y-10">
  <p class=" text-center italic font-serif text-gray">{@html subHeading}</p>
  <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
    <Button buttonText={paymentInfoButton} />
    <Button buttonText={deliveryInfoButton} />
  </div>
</section>
