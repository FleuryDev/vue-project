<script setup>
import {
  ref,
  watch,
} from 'vue';

import { useRoute } from 'vue-router';

import FooterComponent from './components/navigation/FooterComponent.vue';
import HeaderComponent from './components/navigation/HeaderComponent.vue';

const route = useRoute();
const filterSlot = ref(null);
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
  <FooterComponent :logo="AppLogo" />
</template>

<script>
export default {
  data() {
    return {
      //'assets/media/Logo Osudada 2.svg' FOR LOCAL DEV
      //'media/Logo Osudada 2.svg' BUILD
      AppLogo: this.Assets("assets/media/Logo Osudada 2.svg"),
    };
  },
  methods: {
    Assets(pathImg) {
      return new URL(pathImg, import.meta.url).href;
    },
  },
};
</script>
