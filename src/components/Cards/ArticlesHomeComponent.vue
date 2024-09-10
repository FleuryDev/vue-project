<script setup>

import { useArticleStore } from "@/stores/Articles";
import { useHelperStore } from "@/stores/Helper";

import LikeArticleBtn from "../others/LikeArticleBtn.vue";
import ZoomBtn from "../others/ZoomBtn.vue";
import ImagesSlide from "./ImagesSlide.vue";

const helper = useHelperStore();
const userArticle = useArticleStore();
</script>
<template>
  <div class="rounded-3xl shadow-sm bg-gray-50 border e-card">
    <a
      class="block e-card-imgs relative h-64 w-full rounded-3xl rounded-ee-none overflow-hidden"
    >
      <div id="default-carousel" class="relative flex w-full h-full z-0 p-0 default-font">
        <!-- Carousel wrapper -->
        <ImagesSlide :options="options" :images="article.images"></ImagesSlide>

        <!-- like btn-->
        <LikeArticleBtn
          :id="article.id"
          :article="article"
          @like="userArticle.setLikeArticle"
        ></LikeArticleBtn>

        <!-- zoom btn-->
        <ZoomBtn :images="article" @zoom-image="helper.zoomHandler" />

        <!-- comments btn-->
      </div>
    </a>
    <router-link :to="'/article/' + article.id">
    <div
      id=""
      class="relative -mt-[4.5rem] p-3 pt-11 bg-gray-50 rounded-e-3xl rounded-es-3xl e-cardInfos text-black"
    >
      <h2 class="font-semibold mb-1 text-lg">{{ article.title }}</h2>
      <p class="flex text-sm font-light text-black">
        <id-icon name="home-location"  class="w-4 fill-[#FFC801] h-4 my-auto mr-2" fill="blue"/>
        {{ article.location }}
      </p>
      <p class="mt-1 my-3">
        <span class="text-lg text-black font-semibold">{{ article.prix }}</span>
        <span class="text-sm text-black font-light">Fcfa / mois</span>
      </p>
      <div
        class="text-gray-800 text-xs align-middle justify-between font-medium flex w-full my-auto"
      >
        <div class="flex">

          <svg
            class="w-8 h-8 stroke-slate-400 border border-gray-300 rounded-full p-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
            ></path>
          </svg>
          <span class="ml-2 my-auto font-extralight" translate="no">{{
            article.promoter
          }}</span>
          <id-icon class="w-4 h-4 my-auto ml-2 fill-[#ffc801]" name="verification-cheked"/>


        </div>

          <span class="rounded-xl p-1 px-2 bg-orange-200 my-auto uppercase font-light">{{
            article.status
          }}</span>

      </div>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      options: {
        rewind: true,
        autoplay: false,
        type: "loop",
        omitEnd: true,
        classes: {
          // Add classes for arrows.
          arrows: "splide__arrows  z-50",
          arrow: "splide__arrow scale-25",
          prev: "splide__arrow--prev  btn-cust",
          next: "splide__arrow--next h-4 w-4 btn-cust ",

          // Add classes for pagination.
          pagination:
            "splide__pagination top-[75%] translate-y-2 translate-x-4  p-0 px-5 h-min flex justify-start items-start w-max", // container
          page: "splide__pagination__page w-2 h-1 ", // each button
        },
      },
    };
  },

  props: ["article"],
};
</script>
<style>
.btn-cust svg {
  fill: currentColor;
  height: 50%;
  width: 1rem;
}

.zoom-image-container {
  position: relative;
  display: inline-block;
}

.zoom-image {
  cursor: zoom-in;
}

.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;

  z-index: 5000000064444444444444444444444444444444444444 !important;
}

.zoomed-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}
</style>
