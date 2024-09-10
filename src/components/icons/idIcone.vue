<template>
  <component
    class="icon-class"
    :is="icon"
    :stroke="stroke"
    :ref="'icon-' + name"
  />

</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue";

const props = defineProps(["name", "stroke","fill"]);
const icon = defineAsyncComponent(() => import(`./icons/${props.name}.svg`));
</script>

<style scoped>
svg {
  margin-right: 5px;
}
svg path{
  stroke: v-bind(stroke);
  fill: v-bind(fill);
}
.icon-class path {
  display: inline-block;
  width: 3%;
  height: 36px;
  fill: currentColor;
  padding: 5px 10px;

}
</style>
