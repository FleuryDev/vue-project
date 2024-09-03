<script setup>
import SearchFilterComponent from "./SearchFilterComponent.vue";
</script>

<template>
  <div
    class="flex justify-between max-lg:hidden lg:w-7/12 rounded-full mx-auto border border-gray-300"
  >
    <div
      id="filter1"
      class="flex filter1 w-10/12 container justify-between px-4 py-1 align-middle"
    >
      <SearchFilterComponent title="Projet" :items="['Location', 'achat']" />
      <SearchFilterComponent title="Bien" :items="['Terrain', 'Maison']" />
      <SearchFilterComponent
        title="Ville"
        :items="['Abomey-calavi', 'Cotonou', 'Porto-novo']"
      />
      <SearchFilterComponent title="Quartier" :items="['Zogbadjè', '---', '---']" />
      <SearchFilterComponent
        title="Budjet"
        :items="[
          '- 10 000',
          '10 - 20 000',
          '20 - 30 000',
          '30 - 50 000',
          '50 - 75 000',
          '75 - 100 000',
          '100 - 200 000',
          '200 - 500 000',
          '500 000 +',
        ]"
      />
    </div>
    <div class="w-2/12 my-auto p-0">
      <button class="border bg-search-btn p-2 rounded-full :focus[none] float-right">
        <svg
          class="w-5 h-5 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
