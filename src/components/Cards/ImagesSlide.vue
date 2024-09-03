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
        :src="Assets('../../media/articles/' + image)"
      />
    </SplideSlide>
  </Splide>
</template>
<script>
export default {
  props: ["images", "options"],
  methods: {
    Assets(pathImg) {
      return new URL(pathImg, import.meta.url).href;
    },
  },
};
</script>
<style setup>
.btn-cust svg {
  fill: currentColor;
  height: 50%;
  width: 1rem;
}
</style>
