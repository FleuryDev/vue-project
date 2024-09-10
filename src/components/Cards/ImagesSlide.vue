<script setup>
import { defineProps } from "vue";

import { useHelperStore } from "@/stores/Helper";

defineProps(["images", "options"]);
const helper = useHelperStore();
</script>
<template>
  <Splide
    :options="options"
    class="relative flex overflow-hidden h-full bg-transparent"
    aria-label="My Favorite Images"
  >
    <!-- Items-->
    <SplideSlide
      v-for="(image, id) in images"
      :key="id"
      class="duration-700 ease-in-out bg-transparent inset-0 transition-transform transform z-20 translate-x-0 block w-full h-ful"
    >
      <!--'../../assets/media/articles/'-->
      <img
        alt="ecommerce"
        class="object-cover object-center w-full h-full block"
        :src="helper.Assets('media/articles/' + image)"
      />
    </SplideSlide>
  </Splide>
</template>
