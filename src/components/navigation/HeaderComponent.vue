<script setup>
import routes from "@/router/routes";

import UserNav from "./user/UserNav.vue";
</script>
<template>
  <header class="w-full max-h-32 fixed top-0 default-font">
    <div
      class="w-full shadow-md p-3 max-lg:px-8 px-24 flex flex-col justify-around bg-white"
    >
      <div class="w-full flex justify-between">
        <div
          class="image max-lg:w-3/12 lg:w-2/12 relative left-0 justify-betewen justify-between"
        >
          <router-link to="/">
            <img :src="logo" class="image max-lg:w-2/3 lg:w-1/2 p-0" alt="logo" />
          </router-link>
        </div>
        <div
          class="max-lg:hidden lg:w-7/12 flex flex-wrap justify-center lg:justify-between p-0 align-top my-auto text-lg whitespace-normal"
        >
          <div class="">
            <router-link
              class="link"
              activeClass="router-link-exact-active font-regular "
              to="/home"
            >
              Rechercher un bien
            </router-link>
          </div>
          <div class=" ">
            <router-link
              class="link"
              activeClass="router-link-exact-active font-regular "
              to="/agences"
            >
              Trouver une agence immobilière</router-link
            >
          </div>
          <div class="px-4 rounded-full primary-orange text-white py-1 -mt-1">
            <a href="#" class="text-white">Publier un bien </a>
          </div>
        </div>
        <div class="max-lg:w-3/12 lg:w-2/12 flex float-right justify-between">
          <div class="flex ml-auto justify-between w-2/3 py-2 my-auto space-x-2">
            <div class="flex my-auto w-1/2">
              <svg
                class="h-auto w-1/2 m-auto"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.985 0C6.705 0 0 6.72 0 15C0 23.28 6.705 30 14.985 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 14.985 0ZM25.38 9H20.955C20.4855 7.14219 19.7904 5.34884 18.885 3.66C21.6212 4.602 23.9268 6.49759 25.38 9ZM15 3.06C16.245 4.86 17.22 6.855 17.865 9H12.135C12.78 6.855 13.755 4.86 15 3.06ZM3.39 18C3.15 17.04 3 16.035 3 15C3 13.965 3.15 12.96 3.39 12H8.46C8.34 12.99 8.25 13.98 8.25 15C8.25 16.02 8.34 17.01 8.46 18H3.39ZM4.62 21H9.045C9.525 22.875 10.215 24.675 11.115 26.34C8.37595 25.4031 6.06875 23.5062 4.62 21ZM9.045 9H4.62C6.06875 6.49377 8.37595 4.59685 11.115 3.66C10.2096 5.34884 9.51447 7.14219 9.045 9ZM15 26.94C13.755 25.14 12.78 23.145 12.135 21H17.865C17.22 23.145 16.245 25.14 15 26.94ZM18.51 18H11.49C11.355 17.01 11.25 16.02 11.25 15C11.25 13.98 11.355 12.975 11.49 12H18.51C18.645 12.975 18.75 13.98 18.75 15C18.75 16.02 18.645 17.01 18.51 18ZM18.885 26.34C19.785 24.675 20.475 22.875 20.955 21H25.38C23.9268 23.5024 21.6212 25.398 18.885 26.34ZM21.54 18C21.66 17.01 21.75 16.02 21.75 15C21.75 13.98 21.66 12.99 21.54 12H26.61C26.85 12.96 27 13.965 27 15C27 16.035 26.85 17.04 26.61 18H21.54Z"
                  fill="black"
                />
              </svg>
            </div>
            <UserNav />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between">
        <component :is="filters"></component>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["logo", "filters"],
};
</script>
