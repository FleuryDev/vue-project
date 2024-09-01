<script setup lang="ts">
import IndexCarouselComponent from './carousels/IndexCarouselComponent.vue';
</script>

<template>
  <IndexCarouselComponent/>
 
  <section class="text-gray-600 flex w-full mx-auto default-font">
    <div class="container px-0 py-8 mx-auto flex flex-wrap w-full">
      <div class="flex flex-wrap mx-auto -m-4 w-full justify-between">
        <!--Card 1-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 2-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 3-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 4-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 1-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 2-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 3-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>

        <!--Card 4-->
        <div
          class="flex rounded-xl flex-wrap shadow-sm bg-gray-100 border e-card flex-col"
        >
          <div
            class="flex container mx-auto w-full justify-between max-md:justify-center px-3 pt-4 pb-0"
          >
            <div class="w-1/3 p-4 flex">
              <svg
                class="w-full h-max stroke-slate-400 border border-gray-300 rounded-full p-2 object-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                />
              </svg>
            </div>
            <div class="w-2/3 flex justify-between flex-wrap p-6 px-0">
              <div class="w-full flex">
                <span class="text-gray-900 font-bold whitespace-nowrap"
                  >The Catalyzer</span
                >
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
              <div class="w-full flex text-sm">Agence immobilière</div>
            </div>
          </div>
          <div
            class="w-full mx-auto flex justify-between flex-wrap text-sm text-black space-y-1 px-6"
          >
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 fill-yellow-300 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <span>Abomey-Calavi, Zogbadje</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z"
                />
              </svg>

              <span>Expérience de 2 ans</span>
            </div>
            <div class="w-full flex flex-wrap">
              <svg
                class="w-4 h-4 mr-1 fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <span>Avis Clients (4.8)</span>
            </div>
          </div>
          <div class="w-full mt-4 flex mb-3 px-6 mx-auto">
            <a
              class="py-1 px-4 text-gray-900 rounded-xl font-semibold bg-yellow-200"
              href=""
              >Voir le profil</a
            >
          </div>
        </div>
      </div>
      <div class="flex mx-auto p-4 mt-5 mb-10">
        <button class="p-1 px-3 text-black bg-yellow-200 rounded-3xl">Suivant</button>
      </div>
    </div>
  </section>
</template>
