<template>
  <Splide
    :options="options"
    class="relative w-full overflow-hidden rounded-lg h-max flex justify-between"
    aria-label="My Favorite Images"
  >
    <SplideSlide
      class="duration-700 ease-in-out block w-[70%] -translate-y-1/2 top-1/2 p-6 primary-orange text-white rounded-3xl shadow"
    >
      <div class="w-full flex justify-between">
        <div class="mb-1 font-normal text-lg w-9/12">
          <h5 class="mb-2 font-light">Dans le besoin d’une maison locative,</h5>
          <p class="w-9/12 font-regular text-white">
            Trouvez la meilleure agence immobilière située dans votre ville grâce à notre
            annuaire.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 mt-3 py-1 text-sm font-medium text-center bg-white text-black rounded-full hover:bg-orange-300 focus:ring-4 focus:outline-none"
          >
            Consulter
          </a>
        </div>
        <div class="w-2/12 my-auto mr-10">
          <img
            src="../../assets/media/img/3dicons.svg"
            class="w-full my-auto fill-white"
            alt=""
          />
        </div>
      </div>
    </SplideSlide>
    <SplideSlide
      class="duration-700 ease-in-out block w-[70%] -translate-y-1/2 top-1/2 absolute p-6 secondary-orange border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="w-full flex justify-between">
        <div class="mb-1 font-normal text-lg w-9/12">
          <h5 class="mb-2 font-normal">Propriétaitaire de bien Immobilier,</h5>
          <p class="w-9/12 font-regular text-black">
            Trouvez la meilleure agence immobilière située dans votre ville grâce à notre
            annuaire.
          </p>
          <a
            href="#"
            class="inline-flex items-center mt-3 px-4 py-1 text-sm font-medium text-center bg-white text-black rounded-full hover:bg-yellow-200 focus:ring-4 focus:outline-none"
          >
            Consulter
          </a>
        </div>
        <div class="w-2/12 mr-16">
          <img
            src="../../assets/media/img/3dicons (1).svg"
            class="w-full my-auto fill-white"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>
<script>
export default {
  setup() {
    const options = {
      rewind: true,
      autoplay: true,
      autoWidth: true,
      type: "loop",
      focus: 0,
      omitEnd: true,
      gap: "2rem",
      pauseOnHover: true,
      arrows: false,
    };

    return { options };
  },
};
</script>
<style scoped></style>
