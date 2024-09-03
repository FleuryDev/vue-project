<script setup lang="ts">
import IdIcone from '@/components/icons/idIcone.vue';
</script>

<template>
  <router-link to="/" class="menu__item">
    <IdIcone name="login-rounded" /> Connexion</router-link
  >
  <router-link to="/" class="menu__item"
    ><id-icone name="user-plus" /> Inscription
  </router-link>
  <router-link to="/" class="menu__item border-t">
    <id-icone name="help-rounded" /> Centre d'aide</router-link
  >
</template>
<style scoped>
.menu__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  align-content: start;
  padding: 10px 20px;
  text-align: left;
  gap: 5px;

  transition: all 300ms;
  &:hover {
    background-color: #eb89001c !important;
  }
}
</style>
