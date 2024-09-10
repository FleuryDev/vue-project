<script setup>
defineProps(["value"])
</script>
<template v-if="value != 0 || null ">
  <span v-if="value > 9"
        class="py-0 -translate-y-1/2  transition-colors translate-x-1/2 absolute h-max  px-1 text-center text-white bg-red-500 text-[10px] rounded-full"
  >
    <span>
      9<sup>+</sup>
    </span>

  </span>
  <span v-else
      class="py-0 -translate-y-1/2  transition-colors translate-x-1/2 absolute h-max  px-2 text-center text-white bg-red-500 text-[10px] rounded-full"

  > {{value}}</span>
</template>
