<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
</script>
<template>
  <el-dropdown>
    <span class="el-dropdown-link flex flex-col">
      <span>
        {{ title }} <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <small v-if="selectedval" id="ol">{{ selectedval }}</small>
      <small v-else> --- </small>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, i) in items"
          :key="i"
          @click="selectedOption(item)"
          >{{ item }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      selectedval: null,
    };
  },
  methods: {
    selectedOption(e) {
      this.selectedval = e;
    },
  },
  props: ["title", "items", "default"],
};
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
