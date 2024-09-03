<template>
  <router-link to="/" class="menu__item"><id-icone name="envelope" />Message</router-link>

  <router-link to="/" class="menu__item"
    ><id-icone name="calendar" />Réservation</router-link
  >
  <router-link to="/" class="menu__item menu__item-active"
    ><id-icone name="heart" />Favoris</router-link
  >
  <router-link to="/" class="menu__item border-t"
    ><id-icone name="user" />Mon Compte</router-link
  >
  <router-link to="/" class="menu__item border-t">
    <id-icone name="help-rounded" /> Centre d'aide</router-link
  >
  <router-link to="/" class="menu__item">
    <id-icone name="logout-rounded" /> Déconnexion</router-link
  >
</template>
<script setup lang="ts">
import IdIcone from '@/components/icons/idIcone.vue';
</script>
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
