<template>
  <Splide :options="options" class="relative w-full  overflow-hidden rounded-lg h-48 flex justify-between " aria-label="My Favorite Images">
    <SplideSlide  class=" duration-700 ease-in-out  block w-[70%]  -translate-y-1/2 top-1/2  p-6 primary-orange text-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">         
                                    <div class="w-full flex justify-between">
                                             <div class="mb-3 font-normal  text-lg w-9/12">
                                                     <h5 class="mb-2   font-thin">Dans le besoin d’une maison locative,</h5>
                                                    <p class="w-9/12  font-regular text-white ">Trouvez la meilleure agence immobilière située dans votre ville grâce à notre annuaire.</p>
                                                </div>
                                            <div class="w-2/12 my-auto mr-10 ">
                                            <img src="../../assets/media/img/3dicons.svg" class="w-full my-auto  fill-white" alt="" >
                                            </div>
                                    </div>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white text-black rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                              
 
                           
    </SplideSlide>
    <SplideSlide class=" duration-700 ease-in-out block w-[70%]  -translate-y-1/2 top-1/2  absolute p-6 secondary-orange border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">          
                                  
                                   
                                    <div class="w-full flex justify-between">
                                             <div class="mb-3 font-normal text-lg w-9/12 ">
                                        <h5 class="mb-2  font-extralight ">Propriétaitaire de bien Immobilier,</h5>
                                                    <p class="w-9/12 font-regular text-black">Trouvez la meilleure agence immobilière située dans votre ville grâce à notre annuaire.</p>

                                                </div>
                                            <div class="w-2/12 mr-16">
                                                 <img src="../../assets/media/img/3dicons (1).svg" class="w-full my-auto   fill-white" alt="" srcset="">
                                            </div>
                                    </div>
                                   
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white text-black rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                               
    </SplideSlide>
  </Splide>
</template>
<script>

export default {
    setup() {
    const options = {
      rewind: true,
      autoplay : true, 
      autoWidth: true,
     type   : 'loop',
    focus    : 0,
    omitEnd  : true,
      gap   : '2rem',
      pauseOnHover : true,
      arrows:false,
    };

    return { options };
  },
}
</script>
<style scoped>

</style>