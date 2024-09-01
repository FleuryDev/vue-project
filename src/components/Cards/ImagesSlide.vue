<template>
  <Splide
    :options="options"
    class="relative flex overflow-hidden h-full bg-transparent"
    aria-label="My Favorite Images"
  >
    <!-- Items-->
    <SplideSlide
      v-for="(image, id) in imagex.images"
      :key="id"
      class="duration-700 ease-in-out bg-transparent inset-0 transition-transform transform z-20 translate-x-0 block w-full h-ful"
    >
      <img
        alt="ecommerce"
        class="object-cover object-center w-full h-full block"
        src="  "
      />
    </SplideSlide>
  </Splide>
</template>
<script>
export default {
  props: {
    imagex: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    methods: {
      Assets(pathImg) {
        return new URL(pathImg, import.meta.url).href;
      },
    },
  },
};
</script>
<style lang=""></style>
