<template>
  <router-link to="/" class="menu__item"><id-icon name="envelope" />
  <badge value="9"/>
    Message</router-link>

  <router-link to="/" class="menu__item"
    ><id-icon name="calendar" />Réservation</router-link
  >
  <router-link to="/" class="menu__item menu__item-active"
    ><id-icon name="heart" stroke="black" />Favoris</router-link
  >
  <router-link to="/" class="menu__item border-t"
    ><id-icon name="user"  />Mon Compte</router-link
  >
  <router-link to="/" class="menu__item border-t">
    <id-icon name="help-rounded" /> Centre d'aide</router-link
  >
  <router-link to="/" class="menu__item">
    <id-icon name="logout-rounded" /> Déconnexion</router-link
  >
</template>
<script setup lang="ts">
import IdIcon from "@/components/icons/idIcone.vue";
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
