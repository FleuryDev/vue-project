<script setup>
import SearchFilterComponent from '../Filters/SearchFilterComponent.vue'
</script>
<template>
    <header class="w-full max-h-32  fixed top-0 default-font   ">
        <div class="w-full  shadow-md  p-3 max-lg:px-8 px-24 flex flex-col justify-around bg-white">
            <div class="w-full flex   justify-between"> 
                <div class="image max-lg:w-3/12 lg:w-2/12  relative left-0 justify-betewen justify-between">
                   <img src="../../assets/media/Logo Osudada 2.svg" class="image max-lg:w-2/3 lg:w-1/2 p-0" alt="">
                </div>
                <div class=" max-lg:hidden lg:w-7/12 flex flex-wrap justify-center lg:justify-between  p-0 align-top   my-auto text-lg whitespace-normal ">
                    <div class=""><a href="index.html">Rechercher un bien</a></div>
                    <div class=" "><a href="agences.html">Trouver une agence immobilière</a></div>
                    <div class="px-4 rounded-full primary-orange text-white py-1 -mt-1"><a href="#" class="text-white">Publier un bien</a></div>
                    
                </div>
                <div class="  max-lg:w-3/12 lg:w-2/12 flex float-right p-2  justify-between ">
                    <div class="flex ml-auto justify-between w-2/3 my-auto space-x-2">
                        <div class=" flex my-auto w-1/2">
                        <svg class=" h-auto w-1/2 m-auto"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.985 0C6.705 0 0 6.72 0 15C0 23.28 6.705 30 14.985 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 14.985 0ZM25.38 9H20.955C20.4855 7.14219 19.7904 5.34884 18.885 3.66C21.6212 4.602 23.9268 6.49759 25.38 9ZM15 3.06C16.245 4.86 17.22 6.855 17.865 9H12.135C12.78 6.855 13.755 4.86 15 3.06ZM3.39 18C3.15 17.04 3 16.035 3 15C3 13.965 3.15 12.96 3.39 12H8.46C8.34 12.99 8.25 13.98 8.25 15C8.25 16.02 8.34 17.01 8.46 18H3.39ZM4.62 21H9.045C9.525 22.875 10.215 24.675 11.115 26.34C8.37595 25.4031 6.06875 23.5062 4.62 21ZM9.045 9H4.62C6.06875 6.49377 8.37595 4.59685 11.115 3.66C10.2096 5.34884 9.51447 7.14219 9.045 9ZM15 26.94C13.755 25.14 12.78 23.145 12.135 21H17.865C17.22 23.145 16.245 25.14 15 26.94ZM18.51 18H11.49C11.355 17.01 11.25 16.02 11.25 15C11.25 13.98 11.355 12.975 11.49 12H18.51C18.645 12.975 18.75 13.98 18.75 15C18.75 16.02 18.645 17.01 18.51 18ZM18.885 26.34C19.785 24.675 20.475 22.875 20.955 21H25.38C23.9268 23.5024 21.6212 25.398 18.885 26.34ZM21.54 18C21.66 17.01 21.75 16.02 21.75 15C21.75 13.98 21.66 12.99 21.54 12H26.61C26.85 12.96 27 13.965 27 15C27 16.035 26.85 17.04 26.61 18H21.54Z" fill="black"/>
                        </svg>
                        </div>
                        <button class="flex w-1/2  my-auto">
                            <img class="w-full" src="../../assets/media/img/Frame 85.svg" alt="user" srcset="">
                        </button>
                    </div>
                    
                </div>
            </div>
          <div class="w-full flex justify-between ">
            <div class="flex justify-between px-1 max-lg:hidden lg:w-7/12  rounded-full  mx-auto  border border-gray-300  ">
                
                <div id="filter1" class="flex filter1  w-10/12 container justify-between px-4 py-1 align-middle"  >
                        <SearchFilterComponent title="Projet" :items="['Location','achat']"/>
                        <SearchFilterComponent title="Bien" :items="['Terrain','Maison']"/>
                        <SearchFilterComponent title="Ville" :items="['Abomey-calavi','Cotonou','Porto-novo']"/>
                        <SearchFilterComponent title="Quartier" :items="['Zogbadjè','---','---']"/>
                        <SearchFilterComponent title="Budjet" :items="['10 000','50 000','100 000','1 000 000']"/>
                       


                </div>
            
               <div class="w-2/12 my-auto">
                    <button class="border bg-search-btn p-2 rounded-full :focus[none]  float-right">
                      <svg class="w-5 h-5 fill-current text-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                     </button>
                </div>
            </div>
          </div>

        </div>
    </header>
</template>
<script>

export default {
    
}
</script>
<style lang="">
    
</style>