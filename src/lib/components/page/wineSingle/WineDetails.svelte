<script lang="ts">
  export let details:any
  export let degustation:any
  export let food:any
  export let maturation:any
  export let vinification:any
</script>

<section class="flex flex-col items-center p-5">
  <div class="flex flex-col items-center max-w-4xl space-y-10">
    <div class="flex flex-col items-center space-y-4">
      <h2 class="text-center text-gray font-serif text-3xl md:text-4xl">{vinification}</h2>
      <p class="text-center italic font-serif text-gray">{details.vinification}</p>
    </div>
    <div class="flex flex-col items-center space-y-4">
      <h2 class="text-center text-gray font-serif text-3xl md:text-4xl">{maturation}</h2>
      <p class="text-center italic font-serif text-gray">{details.maturation}</p>
    </div>
    <div class="flex flex-col items-center space-y-4">
      <h2 class="text-center text-gray font-serif text-3xl md:text-4xl">{degustation}</h2>
      <p class="text-center italic font-serif text-gray">{details.degustation}</p>
    </div>
    <div class="flex flex-col items-center space-y-4">
      <h2 class="text-center text-gray font-serif text-3xl md:text-4xl">{food}</h2>
      <p class="text-center italic font-serif text-gray">{details.food}</p>
    </div>
  </div>
</section>
