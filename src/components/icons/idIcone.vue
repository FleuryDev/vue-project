<template>
  <component class="icone-class" :is="icone" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({ name: String });
const icone = ref(props.name);
const iconeClass = ref("icone-class");
</script>

<style scoped>
svg {
 margin-right: 5px;
}
.icone-class path {
  display: inline-block;
  width: 3%;
  height: 36px;
  fill: currentColor;
  padding: 5px 10px;
}
</style>
