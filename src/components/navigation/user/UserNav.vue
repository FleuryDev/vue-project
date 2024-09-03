<template>
  <el-dropdown class="flex w-1/2 py-0" trigger="click">
    <span class="el-dropdown-link">
      <button>
        <img
          class="w-full"
          src="../../../assets/media/img/Frame 85.svg"
          alt="user"
          srcset=""
        />
      </button>
    </span>
    <template #dropdown>
      <div class="py-0">
        <UserAuthenticated v-if="userStore.isLogedIn" />
        <WebUser v-else />
      </div>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/User";

import UserAuthenticated from "./UserAuthenticated.vue";
import WebUser from "./WebUser.vue";

const userStore = useUserStore();
</script>
<style>
.el-popper {
  border-radius: 10px !important;
}
el-dropdown-menu {
  padding: 0;
  display: none !important;
}
</style>
