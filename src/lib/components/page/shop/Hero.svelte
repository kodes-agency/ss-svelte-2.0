<script lang="ts">
  import Button from "$lib/components/elements/global/Button.svelte";
  export let src: any;
  export let heading: any;
  export let subHeading: any;
  export let paymentInfoButton: any;
  export let deliveryInfoButton: any;
  export let alt: any;
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
<section class="flex flex-col items-center p-5 py-10 space-y-10">
  <p class=" text-center italic max-w-3xl font-serif text-gray">{@html subHeading}</p>
  <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
    <Button link="/shop#info" buttonText={paymentInfoButton} />
    <Button link="/shop#info" buttonText={deliveryInfoButton} />
  </div>
</section>
