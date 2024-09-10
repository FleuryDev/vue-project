<script setup>
import {
  ref,
  watch,
} from 'vue';

import { useRoute } from 'vue-router';

import FooterComponent from './components/navigation/FooterComponent.vue';
import HeaderComponent from './components/navigation/HeaderComponent.vue';
import { useHelperStore } from './stores/Helper';
import ModalPopup from "@/components/others/ModalPopup.vue";
import imagesSlide from "@/components/carousels/ImagesSlide.vue";

const route = useRoute();
const filterSlot = ref(null);
const helper = useHelperStore();
const AppLogo = helper.Assets("media/Logo Osudada 2.svg");
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

<modal-popup :condition="helper.isZoomed" data-container-class="w-7/12 sticky top-20 bg-white h-[80vh] rounded p-6 mx-auto">
  <template #data>
    <images-slide></images-slide>
  </template>
</modal-popup>
  <FooterComponent :logo="AppLogo" />
</template>


