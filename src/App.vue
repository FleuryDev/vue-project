<script setup>
import { ref, watch } from "vue";

import { useRoute } from "vue-router";

import FooterComponent from "./components/navigation/FooterComponent.vue";
import HeaderComponent from "./components/navigation/HeaderComponent.vue";
import LikeArticleBtn from "./components/others/LikeArticleBtn.vue";
import { useArticleStore } from "./stores/Articles";
import { useHelperStore } from "./stores/Helper";

const route = useRoute();
const filterSlot = ref(null);
const helper = useHelperStore();
const userArticle = useArticleStore();
watch(
  () => route.meta.filterSlot,
  (newSlot) => {
    filterSlot.value = newSlot ?? null; // Update filter slot based on the new filter slot meta in the route
  },
  { immediate: true }
);
const layout = ref("default-layout");
watch(
  () => route.meta.layout,
  (Newlayout) => {
    layout.value = Newlayout ?? "default-layout"; // Update layout based on the new layout meta in the route
  },
  { immediate: true }
);
</script>

<template>
  <HeaderComponent :logo="AppLogo" :filters="filterSlot" />

  <component :is="layout" />
  <div
    v-if="helper.isZoomed"
    class="flex justify-around align-middle absolute w-full min-h-[100%] z-[105!important] bg-[rgba(0,0,0,.4)] backdrop-blur-md p-10"
  >
    <div class="w-7/12 fixed sticky top-20 bg-white h-[80vh] rounded p-6 mx-auto">
      <button
        title="Close"
        @click="helper.toggleZoom"
        class="px-4 py-1 text-2xl bg-gray-700 transition-none text-white w-auto absolute top-0 ml-auto right-0 hover:bg-red-600"
      >
        x
      </button>
      <div class="mt-2 p-0 bg-black h-[90%] rounded-md w-full">
        <!-- Your content goes here -->
        <ImagesSlide :options="options" :images="helper.zoomData.images"></ImagesSlide>
      </div>
      <div class="flex top-[95%] ml-auto">
        <LikeArticleBtn
          class="top-14 right-10 scale-[2]"
          :id="helper.zoomData.id"
          :article="helper.zoomData"
          @like="userArticle.setLikeArticle"
        ></LikeArticleBtn>
      </div>
    </div>
  </div>

  <FooterComponent :logo="AppLogo" />
</template>

<script>
export default {
  data() {
    return {
      //'assets/media/Logo Osudada 2.svg' FOR LOCAL DEV
      //'media/Logo Osudada 2.svg' BUILD
      options: {
        rewind: true,
        autoplay: false,
        type: "loop",
        omitEnd: true,
        classes: {
          // Add classes for arrows.
          arrows: "splide__arrows  z-10", // container
          arrow: "splide__arrow scale-25",
          prev: "splide__arrow--prev  btn-cust",
          next: "splide__arrow--next h-4 w-4 btn-cust ",

          // Add classes for pagination.
          pagination:
            "splide__pagination top-[90%] translate-y-2 translate-x-4  p-0 px-5 h-min flex justify-start items-start w-max", // container
          page: "splide__pagination__page w-2 h-1 ", // each button
        },
      },
      AppLogo: this.Assets("media/Logo Osudada 2.svg"),
    };
  },
  methods: {
    Assets(pathImg) {
      return new URL(pathImg, import.meta.url).href;
    },
  },
};
</script>
