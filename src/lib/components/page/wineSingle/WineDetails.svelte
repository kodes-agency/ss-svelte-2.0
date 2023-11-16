<script lang="ts">
  import type {
    ComponentWineProfileWineInformation,
    Maybe,
  } from "../../../../__generated__/graphql";
  export let details: ComponentWineProfileWineInformation;
  export let degustaion: Maybe<string> | undefined;
  export let food: Maybe<string> | undefined;
  export let maturation: Maybe<string> | undefined;
  export let vinification: Maybe<string> | undefined;
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
      <h2 class="text-center text-gray font-serif text-3xl md:text-4xl">{degustaion}</h2>
      <p class="text-center italic font-serif text-gray">{details.degustaion}</p>
    </div>
    <div class="flex flex-col items-center space-y-4">
      <h2 class="text-center text-gray font-serif text-3xl md:text-4xl">{food}</h2>
      <p class="text-center italic font-serif text-gray">{details.food}</p>
    </div>
  </div>
</section>
