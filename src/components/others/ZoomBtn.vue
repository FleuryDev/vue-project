<template>
  <div class="flex end-0 absolute z-[90] top-full -mt-14">
    <button
      @click="ZoomImage($event, images)"
      type="button"
      class="z-40 hover:scale-150 items-center justify-center h-full mr-3 cursor-pointer focus:outline-none"
    >
      <span
        class="flex cursor-pointer items-center justify-center w-5 h-5 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 my-auto fill-white cursor-pointer text-gray-400 hover:text-white dark:text-gray-800 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"
          ></path>
        </svg>
        <span class="sr-only">like it</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

defineProps(["images"]);
const emitter = defineEmits(["open-image", "zoom-image"]);
const ZoomImage = (e, images) => {
  emitter("zoom-image", images);
};
</script>
