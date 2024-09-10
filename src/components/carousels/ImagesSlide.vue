<script setup>

import LikeArticleBtn from "@/components/others/LikeArticleBtn.vue";
import {useHelperStore} from "@/stores/Helper.js";
import {useArticleStore} from "@/stores/Articles.js";
const helper = useHelperStore()
const useArticle = useArticleStore()
</script>

<template>

  <div class="flex sticky top-[20%] z-20  ml-auto">
    <LikeArticleBtn
        class="top-14  right-5 scale-[2]"
        :id="helper.zoomData.id"
        :article="helper.zoomData"
        @like="useArticle.setLikeArticle"
    ></LikeArticleBtn>
  </div>
  <div class="mt-2 p-0 bg-black h-[90%] rounded-md w-full">
    <!-- Your content goes here -->
    <ImagesSlide :options="options" :images="helper.zoomData.images"></ImagesSlide>
  </div>
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
    };
  },

};
</script>