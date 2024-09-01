<script setup>
import ImagesSlide from "./ImagesSlide.vue";
</script>
<template>
  <div class="rounded-3xl shadow-sm bg-gray-50 border e-card">
    <div v-if="isZoomed" class="zoom-overlay" @click="toggleZoom">
      <img :src="imageSrc" class="zoomed-image" />
    </div>
    <a
      class="block e-card-imgs relative h-64 w-full rounded-3xl rounded-ee-none overflow-hidden"
    >
      <div id="default-carousel" class="relative flex w-full h-full z-0 p-0 default-font">
        <!-- Carousel wrapper -->
        <ImagesSlide :imagex="article"></ImagesSlide>

        <!-- like btn-->
        <div class="flex end-0 absolute top-3">
          <button
            @click="likeArticle"
            :class="{ 'text-red-500': isLiked }"
            type="button"
            class="z-40 flex items-center justify-centerh-full px-4 cursor-pointer"
          >
            <span
              class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white bg-opacity-50"
            >
              <svg
                class="w-3 h-3 text-gray-400 fill-white hover:text-white dark:text-gray-800 rtl:rotate-180"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8068 2.14575L17.8074 2.14634C19.9317 4.23018 19.9291 7.46337 17.8104 9.53207L17.8103 9.53216L10.0003 17.1612L2.19019 9.53216L2.1901 9.53207C0.0711561 7.4631 0.0691129 4.22991 2.1891 2.15025L2.18998 2.14938C2.68681 1.65999 3.27858 1.27066 3.93159 1.00448C4.58453 0.738337 5.28538 0.60076 5.99369 0.6C7.33154 0.600121 8.61824 1.09121 9.59932 1.97241L10.0002 2.33249L10.4011 1.97247C11.3824 1.09136 12.6691 0.600275 14.007 0.6C14.7144 0.600567 15.4144 0.737716 16.0667 1.00323C16.719 1.26877 17.3103 1.65728 17.8068 2.14575Z"
                  stroke-width="1.2"
                />
              </svg>
              <span class="sr-only">like it</span>
            </span>
          </button>
        </div>

        <!-- zoom btn-->
        <div class="flex end-0 absolute top-full -mt-14">
          <button
            @click="toggleZoom"
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
        <!-- comments btn-->
      </div>
    </a>
    <div
      id=""
      class="relative -mt-[4.5rem] p-3 pt-11 bg-gray-50 rounded-e-3xl rounded-es-3xl e-cardInfos text-black"
    >
      <h2 class="font-semibold mb-1 text-lg">{{ article.title }}</h2>
      <p class="flex text-sm font-light text-black">
        <svg
          class="w-4 h-4 my-auto mr-2"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99355 7.62785e-05C9.74897 0.000224534 9.51332 0.0920689 9.33315 0.257476L0.295151 8.22608C0.292322 8.22858 0.289521 8.23111 0.286751 8.23368C-0.00404868 8.50268 -0.0716487 8.94168 0.0747513 9.26208C0.221151 9.58268 0.564351 9.81188 0.953551 9.81208H3.28395V17.5137C3.28395 18.0395 3.74155 18.4317 4.24335 18.4319H15.7562C16.258 18.4319 16.7156 18.0395 16.7156 17.5139V9.81208H19.0462C19.4354 9.81208 19.7786 9.58288 19.925 9.26228C20.0714 8.94188 20.0038 8.50268 19.713 8.23368C19.7102 8.23111 19.7074 8.22858 19.7046 8.22608L10.6668 0.257476C10.4833 0.0890348 10.2426 -0.00303332 9.99355 7.62785e-05ZM9.99995 4.85748C12.12 4.85748 13.8566 6.58948 13.8566 8.70328C13.8566 9.21228 13.7552 9.69908 13.5726 10.1449C13.5333 10.2625 13.484 10.3765 13.4254 10.4857L10.4674 15.5197C10.155 15.9431 9.90535 16.0363 9.52955 15.5457L6.84755 10.9095C6.38954 10.265 6.14343 9.49394 6.14335 8.70328C6.14335 6.58928 7.87995 4.85728 9.99995 4.85728M9.99995 6.65928C8.85835 6.65928 7.95035 7.56468 7.95035 8.70308C7.95035 9.84128 8.85835 10.7467 9.99995 10.7467C11.1416 10.7467 12.0496 9.84128 12.0496 8.70308C12.0496 7.56468 11.1416 6.65928 9.99995 6.65928Z"
            fill="#FFD233"
          ></path>
        </svg>
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
          <svg
            class="w-4 h-4 my-auto ml-2"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.26686 1.45498C4.91012 1.40362 5.52077 1.15061 6.01186 0.731982C6.56652 0.259573 7.27129 0.00012207 7.99986 0.00012207C8.72843 0.00012207 9.4332 0.259573 9.98786 0.731982C10.4789 1.15061 11.0896 1.40362 11.7329 1.45498C12.4593 1.51304 13.1413 1.82794 13.6566 2.34325C14.1719 2.85855 14.4868 3.54055 14.5449 4.26698C14.5959 4.90998 14.8489 5.52098 15.2679 6.01198C15.7403 6.56665 15.9997 7.27141 15.9997 7.99998C15.9997 8.72856 15.7403 9.43332 15.2679 9.98798C14.8492 10.4791 14.5962 11.0897 14.5449 11.733C14.4868 12.4594 14.1719 13.1414 13.6566 13.6567C13.1413 14.172 12.4593 14.4869 11.7329 14.545C11.0896 14.5963 10.4789 14.8494 9.98786 15.268C9.4332 15.7404 8.72843 15.9998 7.99986 15.9998C7.27129 15.9998 6.56652 15.7404 6.01186 15.268C5.52077 14.8494 4.91012 14.5963 4.26686 14.545C3.54043 14.4869 2.85843 14.172 2.34313 13.6567C1.82782 13.1414 1.51292 12.4594 1.45486 11.733C1.4035 11.0897 1.15049 10.4791 0.73186 9.98798C0.259451 9.43332 0 8.72856 0 7.99998C0 7.27141 0.259451 6.56665 0.73186 6.01198C1.15049 5.5209 1.4035 4.91024 1.45486 4.26698C1.51292 3.54055 1.82782 2.85855 2.34313 2.34325C2.85843 1.82794 3.54043 1.51304 4.26686 1.45498ZM11.7069 6.70698C11.889 6.51838 11.9898 6.26578 11.9875 6.00358C11.9853 5.74138 11.8801 5.49057 11.6947 5.30516C11.5093 5.11976 11.2585 5.01459 10.9963 5.01231C10.7341 5.01003 10.4815 5.11082 10.2929 5.29298L6.99986 8.58598L5.70686 7.29298C5.51826 7.11083 5.26566 7.01003 5.00346 7.01231C4.74126 7.01459 4.49045 7.11976 4.30504 7.30516C4.11963 7.49057 4.01446 7.74138 4.01219 8.00358C4.00991 8.26578 4.1107 8.51838 4.29286 8.70698L6.29286 10.707C6.48039 10.8945 6.7347 10.9998 6.99986 10.9998C7.26502 10.9998 7.51933 10.8945 7.70686 10.707L11.7069 6.70698Z"
              fill="#FFC801"
            ></path>
          </svg>
        </div>
        <span class="rounded-xl p-1 px-2 bg-orange-200 my-auto uppercase font-light">{{
          article.status
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const options = {
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
          "splide__pagination top-48 translate-y-2 translate-x-4  p-0 px-5 h-min flex justify-start items-start w-max", // container
        page: "splide__pagination__page w-2 h-1 ", // each button
      },
    };

    return { options };
  },
  data() {
    return {
      name: "",
      isZoomed: false,
      isLiked: false,
    };
  },
  methods: {
    Assets(pathImg) {
      return new URL(pathImg, import.meta.url).href;
    },
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    },
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
