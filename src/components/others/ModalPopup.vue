<script setup>
import {useHelperStore} from "@/stores/Helper.js";
defineProps(['condition','dataContainerClass'])
const helper = useHelperStore()
</script>

<template>
  <div
      v-if="condition"
      class="flex justify-around align-middle absolute w-full min-h-[100%] z-[105!important] bg-[rgba(0,0,0,.4)] backdrop-blur-md p-10"
  >

    <div :class="dataContainerClass">
      <button
          title="Close"
          @click="helper.toggleModal"
          class="px-4 py-1 text-2xl bg-gray-700 transition-none text-white w-auto absolute top-0 ml-auto right-0 hover:bg-red-600"
      >
        x
      </button>
      <slot name="data"></slot>



    </div>
  </div>
</template>

<style scoped>

</style>