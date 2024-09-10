<template>
  <div class="px-12 w-full flex flex-wrap space-y-5">
    <div class="flex w-full flex-wrap gap-5">
      <div class="mx-auto min-w-[300px] w-1/2 flex space-x-5">
        <div class="flex flex-col flex-1">
          <div class="flex mx-auto">
            <div class="rounded-full h-28 w-28 object-cover border border-gray-200">
              <img
                class="w-full h-full rounded-full"
                :src="helper.Assets('media/img/img1.jpg')"
                alt=""
              />
            </div>
          </div>
          <button
            class="text-center px-4 py-1 mx-auto mt-auto font-regular w-max text-black text-lg bg-[--secondary-orange] rounded-full"
          >
            Contacter l'agence
          </button>
        </div>
        <div class="flex flex-wrap flex-col gap-2 flex-1 text-black">
          <h3 class="text-xl font-bold flex">
            Christ Est Roi
            <id-icon
              class="w-5 h-5 ml-2 my-auto fill-[#FFC801]"
              name="verification-cheked"
            />
          </h3>
          <p class="font-regular text-base font-light">
            <span class="font-bold">Type : </span> Agence immobilière
          </p>
          <p class="font-regular text-base font-light">
            <span class="font-bold">Localisation : </span> Abomey-Calavi, Zogbadje
          </p>
          <p class="font-regular text-base font-light">
            <span class="font-bold">Expérience : </span> 2 ans
          </p>
          <p class="font-regular text-base font-light">
            <span class="font-bold">Biens gérés : </span> 40
          </p>
          <p class="font-regular text-base font-light">
            <span class="font-bold">Avis positf(s) : </span> 20
          </p>
          <p class="font-regular text-base font-light">
            <span class="font-bold">Avis négatif(s) : </span> 01
          </p>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-wrap justify-space-evenly gap-y-5">
      <div class="w-full lg:w-1/4 place-items-center">
        <div
          ref="myDiv"
          @scroll.passive="handleScroll($event, 'f')"
          class="w-full sticky top-28 flex flex-wrap searchContainer"
        >
          <div class="w-11/12 flex p-4 border rounded-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eos modi
            sit aliquid non ullam dignissimos optio adipisci vitae fugit provident quam
            officia, cum at ad vero odio minus maxime!
          </div>
        </div>
      </div>
      <div class="w-full lg:w-3/4 gap-5 px-5">
        <h2
          class="font-regular text-lg sticky top-16 place-content-center lg:min-h-20 bg-white bg-opacity-70 z-50 backdrop-blur-sm"
        >
          Nos offres disponibles
        </h2>

        <DataArticle :items="items" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { document } from "postcss";

import { useHelperStore } from "@/stores/Helper";

import DataArticle from "../Cards/DataArticle.vue";
import IdIcon from "../icons/idIcone.vue";

const helper = useHelperStore();
const items = ref([]);
const isAtBottom = ref(false);
function onSticky(selector, callback = (isSticky) => {}) {
  const element =
    typeof selector === "string" ? window.document.querySelector(selector) : selector;

  if (!element) {
    return;
  }

  const observer = new IntersectionObserver(
    ([event]) => callback(event.intersectionRatio < 1),
    { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
  );
  observer.observe(element);

  return { observer, element };
}

const sticky = onSticky(".searchContainer", (isSticky) => {
  alert(`Sticky: ${isSticky}`);
});
sticky?.observer.unobserve(sticky.element);
function handleScroll(e, d) {
  // const element = e.target;
  // const elementRect = element.getBoundingClientRect();

  // const scrollHeight = element.scrollHeight;
  // const scrollTop = element.scrollTop;
  // const clientHeight = element.clientHeight;

  // if (scrollTop + clientHeight >= scrollHeight) {
  //   isAtBottom.value = true;
  // } else {
  //   isAtBottom.value = false;
  // }
  console.log(e);
  //console.log("Element position:", elementRect);
}

onMounted(() => {
  const data = [
    {
      id: 13023,
      title: "2 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 51000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
      type: ["2 Pieces"],
    },
    {
      id: 54454,
      title: "3 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 91000,
      promoter: "THome Dom",
      status: "À louer",
      images: ["image4.jpg", "image5.jpg", "image6.jpg"],
      type: ["3 Pieces"],
    },
    {
      id: 4606,
      title: "1 Pièce - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 50000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image2.jpg", "image1.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      type: ["1 Piece"],
    },
    {
      id: 45128,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image9.jpg", "image10.jpg", "image11.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 58786,
      title: "3 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 51000,
      promoter: "ADA Home",
      status: "À louer",
      images: ["image12.jpg", "image13.jpg", "image14.jpg"],
      type: ["3 Pieces", "Sanitaire"],
    },
    {
      id: 40228,
      title: "2 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 90000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image14.jpg", "image15.jpg", "image16.jpg"],
      type: ["2 Pieces", "Sanitaire"],
    },
    {
      id: 455648,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 45060,
      title: "2 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image9.jpg", "image10.jpg", "image11.jpg"],
      type: ["2 Pieces", "Sanitaire"],
    },
    {
      id: 466,
      title: "1 Pièce - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 50000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image2.jpg", "image1.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      type: ["1 Piece"],
    },
    {
      id: 49948,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image9.jpg", "image10.jpg", "image11.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 58696,
      title: "3 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 51000,
      promoter: "ADA Home",
      status: "À louer",
      images: ["image12.jpg", "image13.jpg", "image14.jpg"],
      type: ["3 Pieces", "Sanitaire"],
    },
    {
      id: 47648,
      title: "2 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 90000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image14.jpg", "image15.jpg", "image16.jpg"],
      type: ["2 Pieces", "Sanitaire"],
    },
    {
      id: 422648,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Simple"],
    },

    {
      id: 4606,
      title: "1 Pièce - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 50000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image2.jpg", "image1.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      type: ["1 Piece"],
    },
    {
      id: 45648,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image9.jpg", "image10.jpg", "image11.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 58696,
      title: "3 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 51000,
      promoter: "ADA Home",
      status: "À louer",
      images: ["image12.jpg", "image13.jpg", "image14.jpg"],
      type: ["3 Pieces", "Sanitaire"],
    },
    {
      id: 40648,
      title: "2 Pièces - Sanitaire",
      location: " Bidossessi, Abomey-Calavi",
      prix: 90000,
      promoter: "The Catalyzer",
      status: "À louer",
      images: ["image14.jpg", "image15.jpg", "image16.jpg"],
      type: ["2 Pieces", "Sanitaire"],
    },
    {
      id: 455648,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 148,
      title: "5 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 120000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["5 Pieces", "Simple"],
    },
    {
      id: 13,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 35000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 148,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "The houser pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Simple"],
    },
    {
      id: 45,
      title: "2 Pièces - Carrelée",
      location: " Bidossessi, Abomey-Calavi",
      prix: 150000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "carrelee"],
    },
    {
      id: 4,
      title: "Guest House - Carrelée",
      location: " Bidossessi, Abomey-Calavi",
      prix: 300000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Carrelee"],
    },
    {
      id: 422,
      title: "2 Pièces - Simple",
      location: " Bidossessi, Abomey-Calavi",
      prix: 40000,
      promoter: "Azus pro",
      status: "À louer",
      images: ["image20.jpg", "image18.jpg", "image1.jpg"],
      type: ["2 Pieces", "Simple"],
    },
  ];
  items.value = data;
  window.addEventListener("scroll", handleScroll(this, this));
});
</script>
<script></script>
<style lang="scss" scoped></style>
