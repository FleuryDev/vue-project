<script setup lang="ts">
import IndexCarouselComponent from '../carousels/IndexCarouselComponent.vue';
import IdIcone from '../icons/idIcone.vue';
</script>

<template>
  <div
    class="w-full mx-auto flex flex-wrap space-y-5 min-h-96 z-0 default-font text-black"
  >
    <div
      class="flex mx-auto w-full lg:px-36 justify-between align-middle place-content-center place-items-center sticky top-20 backdrop-blur-sm lg:min-h-10 bg-[#ffffff50] z-50"
    >
      <h2 class="text-xl font-bold">2 Pièces - Sanitaire</h2>
      <span class="text-sm py-1 px-4 bg-[#fe96042a] rounded-full"> &Agrave; louer</span>
    </div>
    <div class="w-full justify-between">
      <div class="w-full flex justify-center">
        <!-- carousel-->
        <IndexCarouselComponent />
      </div>
    </div>
    <div class="w-full lg:px-24 justify-between">
      <!--Details product-->

      <section class="flex w-full mx-auto default-font">
        <div class="container px-0 py-8 mx-auto flex flex-wrap w-full">
          <div class="container flex flex-wrap w-full lg:w-9/12 gap-5">
            <div
              class="flex flex-wrap space-y-3 justify-between w-full lg:w-10/12 p-5 shadow-md border border-gray-300 rounded-3xl"
            >
              <div
                class="flex flex-wrap justify-between w-full max-lg:space-y-5 max-lg:text-center"
              >
                <div class="flex flex-col w-full lg:w-1/2 align-text-bottom">
                  <h3 class="text-lg font-bold">Abomey-Calavi, Bidossessi</h3>
                  <p class="flex p-0 mt-auto text-sm font-light max-lg:mx-auto">
                    <svg
                      class="w-4 fill-yellow-300 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>

                    Pharmacie le Journdain
                  </p>
                </div>
                <div class="flex flex-col p-0 w-full lg:w-1/2">
                  <p class="lg:ml-auto">
                    <span class="text-xl font-semibold">51.000</span>
                    <span class="text-sm font-light">Fcfa / mois</span>
                  </p>
                  <p class="lg:ml-auto">
                    <span class="font-light">Surface totale :</span>
                    <span class="font-semibold">1000m²</span>
                  </p>
                </div>
                <div class="w-full mt-4 flex">
                  <div class="flex w-max justify-between max-md:justify-center">
                    <div class="w-12 h-12 flex">
                      <svg
                        class="w-12 h-12 stroke-slate-400 border border-gray-300 rounded-full object-cover"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                        />
                      </svg>
                    </div>
                    <div class="w-auto ml-4 flex justify-between flex-wrap space-y-0">
                      <div class="w-full flex">
                        <span class="font-semibold text-base">The Catalyzer</span>
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.26686 1.45498C4.91012 1.40362 5.52077 1.15061 6.01186 0.731982C6.56652 0.259573 7.27129 0.00012207 7.99986 0.00012207C8.72843 0.00012207 9.4332 0.259573 9.98786 0.731982C10.4789 1.15061 11.0896 1.40362 11.7329 1.45498C12.4593 1.51304 13.1413 1.82794 13.6566 2.34325C14.1719 2.85855 14.4868 3.54055 14.5449 4.26698C14.5959 4.90998 14.8489 5.52098 15.2679 6.01198C15.7403 6.56665 15.9997 7.27141 15.9997 7.99998C15.9997 8.72856 15.7403 9.43332 15.2679 9.98798C14.8492 10.4791 14.5962 11.0897 14.5449 11.733C14.4868 12.4594 14.1719 13.1414 13.6566 13.6567C13.1413 14.172 12.4593 14.4869 11.7329 14.545C11.0896 14.5963 10.4789 14.8494 9.98786 15.268C9.4332 15.7404 8.72843 15.9998 7.99986 15.9998C7.27129 15.9998 6.56652 15.7404 6.01186 15.268C5.52077 14.8494 4.91012 14.5963 4.26686 14.545C3.54043 14.4869 2.85843 14.172 2.34313 13.6567C1.82782 13.1414 1.51292 12.4594 1.45486 11.733C1.4035 11.0897 1.15049 10.4791 0.73186 9.98798C0.259451 9.43332 0 8.72856 0 7.99998C0 7.27141 0.259451 6.56665 0.73186 6.01198C1.15049 5.5209 1.4035 4.91024 1.45486 4.26698C1.51292 3.54055 1.82782 2.85855 2.34313 2.34325C2.85843 1.82794 3.54043 1.51304 4.26686 1.45498ZM11.7069 6.70698C11.889 6.51838 11.9898 6.26578 11.9875 6.00358C11.9853 5.74138 11.8801 5.49057 11.6947 5.30516C11.5093 5.11976 11.2585 5.01459 10.9963 5.01231C10.7341 5.01003 10.4815 5.11082 10.2929 5.29298L6.99986 8.58598L5.70686 7.29298C5.51826 7.11083 5.26566 7.01003 5.00346 7.01231C4.74126 7.01459 4.49045 7.11976 4.30504 7.30516C4.11963 7.49057 4.01446 7.74138 4.01219 8.00358C4.00991 8.26578 4.1107 8.51838 4.29286 8.70698L6.29286 10.707C6.48039 10.8945 6.7347 10.9998 6.99986 10.9998C7.26502 10.9998 7.51933 10.8945 7.70686 10.707L11.7069 6.70698Z"
                            fill="#FFC801"
                          />
                        </svg>
                      </div>
                      <div class="w-full flex text-sm">Avis clients (4.8)</div>
                      <div class="w-full flex text-sm">
                        <svg
                          class="w-3 h-3 mr-1 fill-yellow-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                          <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          class="w-3 h-3 mr-1 fill-yellow-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                          <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          class="w-3 h-3 mr-1 fill-yellow-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                          <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          class="w-3 h-3 mr-1 fill-yellow-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                          <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        <svg
                          class="w-3 h-3 mr-1 fill-yellow-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                          <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap space-y-3 text-black justify-between w-full p-5">
              <div
                class="flex flex-wrap justify-between gap-5 w-full max-lg:space-y-5 max-lg:text-center"
              >
                <div class="flex flex-col p-0 w-full">
                  <h3 class="font-semibold text-lg">Caract&eacute;ristiques</h3>
                </div>
                <div
                  class="flex text-sm flex-wrap font-regular align-baseline gap-4 w-full"
                >
                  <span class="py-1 px-4 rounded-full link-bg">Appartement</span>
                  <span class="py-1 px-4 rounded-full link-bg">Véranda</span>
                  <span class="py-1 px-4 rounded-full link-bg">Staffé</span>
                  <span class="py-1 px-4 rounded-full link-bg">Forage</span>
                  <span class="py-1 px-4 rounded-full link-bg">3 pièces</span>
                  <span class="py-1 px-4 rounded-full link-bg">Collectif</span>
                  <span class="py-1 px-4 rounded-full link-bg">Meublé</span>
                  <span class="py-1 px-4 rounded-full link-bg">Douche</span>
                  <span class="py-1 px-4 rounded-full link-bg">Couloir</span>
                  <span class="py-1 px-4 rounded-full link-bg">Compteur à carte</span>
                  <span class="py-1 px-4 rounded-full link-bg">...</span>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap space-y-3 justify-between w-full p-5">
              <div
                class="flex flex-wrap justify-between w-full gap-5 max-lg:space-y-5 max-lg:text-center"
              >
                <div class="flex flex-col p-0 w-full">
                  <h3 class="font-semibold text-lg">Description</h3>
                </div>
                <div
                  class="flex flex-wrap space-x-1 space-y-1 p-5 w-full border rounded-3xl"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  consequatur distinctio doloremque nobis quis ullam consectetur, nihil
                  deleniti animi facere assumenda qui praesentium est. Qui delectus culpa
                  porro est soluta quod et debitis nulla. Debitis, nam quas? Molestias
                  inventore reprehenderit pariatur quibusdam necessitatibus deserunt? Eum
                  et harum, aut necessitatibus praesentium quos fuga temporibus illum
                  soluta expedita quae exercitationem adipisci explicabo nostrum quibusdam
                  ipsam molestiae labore doloribus officiis, rerum nobis? Commodi
                  dignissimos libero iure perspiciatis ducimus.
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-between w-full p-5">
              <div
                class="flex flex-wrap justify-between w-full max-lg:space-y-5 gap-5 max-lg:text-center"
              >
                <div class="flex flex-col p-0 w-full">
                  <h3 class="font-semibold text-lg">Points forts du quartier</h3>
                </div>
                <div class="flex flex-wrap gap-4 w-full text-sm">
                  <span class="py-1 px-4 rounded-full link-bg">Poteau électrique</span>
                  <span class="py-1 px-4 rounded-full link-bg">Sécurisé</span>
                  <span class="py-1 px-4 rounded-full link-bg"
                    >Préseance récurrent des policiers</span
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-wrap space-y-3 justify-between w-full p-5">
              <div
                class="flex flex-wrap justify-between w-full max-lg:space-y-5 gap-5 max-lg:text-center"
              >
                <div class="flex flex-col p-0 w-full">
                  <h3 class="font-semibold text-lg">Conditions du Propriétaire</h3>
                </div>
                <div class="flex flex-col space-x-4 w-full text-base">
                  <ul class="list-disc px-6 font-light">
                    <li class="list-item">Avance : 3 mois</li>
                    <li class="list-item">Prépayé : 3 mois</li>
                    <li class="list-item">Caution eau & électricité : 1 mois</li>
                    <li class="list-item">Fosse sceptique : 1000 par mois</li>
                    <li class="list-item">Frais de peinture : 10.OOO</li>
                    <li class="list-item">Commission : 1 mois</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap space-y-3 justify-between w-full p-5">
              <div
                class="flex flex-wrap justify-between w-full max-lg:space-y- gap-5 max-lg:text-center"
              >
                <div class="flex flex-col p-0 w-full">
                  <h3 class="font-semibold text-lg">Les avis clients de l’agence</h3>
                </div>
                <div
                  class="grid col-span-3 max-md:grid-cols-3 max-lg:grid-cols-6 grid-cols-10 gap-4 w-full"
                >
                  <!--avis x-->

                  <div
                    class="flex rounded-3xl p-4 space-y-3 flex-wrap shadow-sm border max-lg:w-full col-span-3 flex-col"
                  >
                    <div
                      class="flex mx-auto w-full justify-between max-md:justify-center"
                    >
                      <div class="w-auto flex">
                        <svg
                          class="w-12 h-12 stroke-slate-400 border border-gray-300 rounded-full object-cover"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                          <path
                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                          />
                        </svg>
                      </div>
                      <div class="ml-2 flex justify-between flex-wrap px-0">
                        <div class="w-full flex">
                          <span class="text-sm font-bold font-regular whitespace-nowrap"
                            >Julien T.</span
                          >
                        </div>
                        <div class="w-full flex text-xs font-light">
                          Locataire, Calavi
                        </div>
                        <div class="w-full flex text-xs font-light">
                          <id-icon class="w-3 h-3 mr-1 fill-yellow-300" name="star" />
                          <id-icon class="w-3 h-3 mr-1 fill-yellow-300" name="star" />
                          <id-icon class="w-3 h-3 mr-1 fill-yellow-300" name="star" />
                          <id-icon class="w-3 h-3 mr-1 fill-yellow-300" name="star" />
                          <id-icon class="w-3 h-3 mr-1 fill-yellow-300" name="star" />

                          <span class="text-xs ml-2">il y a 3 jrs</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="w-full mx-auto flex justify-between flex-wrap text-sm text-black font-light"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
                      cumque rerum aliquam laudantium sunt quam, facilis veniam sit sequi
                      in laborum suscipit, libero deleniti? Nostrum illo itaque non
                      debitis quasi.
                    </div>
                  </div>
                </div>
                <div class="flex flex-col w-10/12">
                  <a
                    class="py-1 px-4 text-sm link-bg rounded-full max-lg:mx-auto lg:ml-auto hover:bg-orange-400 hover:text-white"
                    href=""
                  >
                    Voir d'autres avis (77)</a
                  >
                </div>
              </div>
            </div>

            <div class="flex flex-wrap justify-between w-full p-5">
              <div
                class="flex flex-wrap justify-between w-full max-lg:space-y-5 gap-5 max-lg:text-center"
              >
                <div class="flex flex-col p-0 w-full">
                  <h3 class="font-semibold text-lg">Où se trouve le bien immobilier ?</h3>
                </div>
                <div class="block space-x-4 border py-3 w-full">
                  <!--google maps-->
                  <iframe
                    disabled
                    class="mx-auto w-full max-lg:max-h-52 lg:h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.571501788772!2d2.3488121550030923!3d6.43988742449238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9a9fcecbe53%3A0x7c7a2e2d05a13fa2!2sEglise%20Sainte%20Jos%C3%A9phine%20Bakhita!5e0!3m2!1sfr!2sbj!4v1724080664951!5m2!1sfr!2sbj"
                    style="border: 0"
                    allowfullscreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div
                    class="w-full h-full bg-[#ffffff70] -translate-x-4 -translate-y-full left-0 backdrop-blur-sm"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full lg:w-3/12 sticky top-40">
            <div class="flex w-full flex-col sticky top-40">
              <div
                class="flex container w-full flex-wrap justify-center shadow box-decoration-slice border rounded-xl"
              >
                <div
                  class="text-center text-black p-4 w-full text-lg font-semibold flex mx-auto justify-around border-b shadow-sm"
                >
                  Réserver une visite
                </div>
                <div class="w-full flex flex-col justify-start p-4">
                  <form
                    class="contact flex text-sm space-y-5 text-black w-full flex-col resize flex-wrap"
                    action=""
                  >
                    <div class="relative text-base text-black z-0 w-full flex">
                      <div
                        class="w-4/12 p-0 flex flex-row space-x-1 align-text-start justify-start"
                      >
                        <IdIcone name="user-full" class="h-5 w-4" />
                        <label for="name" class="w">Prénom</label>
                      </div>
                      <div class="w-10/12 flex">
                        <input type="text" name="name" id="name" required />
                      </div>
                    </div>
                    <div class="relative text-base text-black z-0 w-full flex">
                      <div
                        class="w-4/12 p-0 flex flex-row space-x-1 align-text-bottom justify-start"
                      >
                        <IdIcone name="telephone" class="h-5 w-5" />
                        <label for="tel" class="">Numéro</label>
                      </div>
                      <div class="w-10/12 flex">
                        <input type="number" name="tel" id="tel" class="peer" required />
                      </div>
                    </div>
                    <div class="relative text-base text-black z-0 w-full flex">
                      <div
                        class="w-9/12 p-0 flex flex-row space-x-1 align-text-bottom justify-start"
                      >
                        <idIcone name="calendar-check" class="h-5 w-5" />
                        <label for="day" class="w">Jour de visite</label>
                      </div>
                      <div class="w-10/12 flex">
                        <input type="date" name="day" id="day" class="peer" required />
                      </div>
                    </div>
                    <div class="relative text-base text-black z-0 w-full flex mb-1">
                      <div
                        class="w-10/12 p-0 flex flex-row space-x-1 align-text-bottom justify-start"
                      >
                        <IdIcone name="hour-full" class="h-5 w-5" />
                        <label for="hour" class="w">Heure de visite</label>
                      </div>
                      <div class="w-10/12 flex">
                        <input
                          type="time"
                          name="hours"
                          id="hours"
                          class="peer"
                          required
                        />
                      </div>
                    </div>
                  </form>
                  <div class="flex w-full justify-center py-4">
                    <button
                      type="button"
                      class="py-1 px-4 primary-orange text-white rounded-full font-regular text-lg"
                    >
                      Payer 2000 Fcfa
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-center py-4 mt-6">
                <button
                  type="button"
                  class="py-1 px-4 bg-[--secondary-orange] text-black rounded-full text-lg font-regular lg:ml-auto"
                >
                  Contacter l’agence
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
