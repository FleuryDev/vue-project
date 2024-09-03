<template>
  <ArticlesFilterPiecesComponent @filter="filterArticle" />
  <section class="text-gray-600 flex w-full mx-auto default-font">
    <div class="px-0 py-8 mx-auto flex flex-wrap w-full">
      <div
        v-if="articlesItem.length > 0"
        class="flex flex-wrap mx-auto -m-4 w-full justify-center gap-5 p-0"
      >
        <!--ITEM -->
        <ArticlesHomeComponent
          v-for="item in articlesItem"
          :article="item"
          :key="item.id"
        />
        <div class="flex w-full mx-auto p-4 mt-5 mb-10">
          <button class="p-1 px-3 text-black bg-yellow-200 mx-auto rounded-full">
            Suivant
          </button>
        </div>
      </div>
      <ArticleNotFound v-else class="w-full" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";

import ArticleNotFound from "../Errors/ArticleNotFound.vue";
import ArticlesFilterPiecesComponent from "../Filters/ArticlesFilterPiecesComponent.vue";
import ArticlesHomeComponent from "./ArticlesHomeComponent.vue";

const searchFilterValue = ref("");
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const articlesLegth = ref(0);
onBeforeMount(() => {
  articlesLegth.value = props.items.length;
});
const articlesItem = computed(() =>
  // Filter articles by search query and type.
  {
    if (searchFilterValue.value != "" && searchFilterValue.value.length > 0) {
      const result = props.items.filter((
        item // for debug purposes
      ) => item.type.includes(searchFilterValue.value));

      articlesLegth.value = result.length;
      console.log(articlesLegth.value);
      return result;
    }

    console.log(articlesLegth.value);
    return props.items;
  }
);
const filterArticle = (values) => {
  // Update the search query when filter values change.
  searchFilterValue.value = values;
};
</script>
<style lang=""></style>
