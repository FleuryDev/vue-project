import './assets/main.css';
import './assets/splide.min.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

import VueSplide from '@splidejs/vue-splide';

import App from './App.vue';
import ImagesSlide from './components/Cards/ImagesSlide.vue';
import { InnovDevIcon } from './components/icons';
import HomeFilter from './components/navigation/HomeFilter.vue';
import DefaultLayout from './layouts/defaultLayout.vue';
import SimpleLayout from './layouts/simpleLayout.vue';
import router from './router';

const app = createApp( App );
const pania= createPinia();
app.component('default-layout', DefaultLayout)
app.component('simpleLayout',SimpleLayout)
app.component('HomeFilter',HomeFilter)
app.component('ImagesSlide',ImagesSlide)
app.use(pania)
app.use(InnovDevIcon)
app.use( VueSplide );
app.use(ElementPlus)
app.use(router);
app.mount('#app')
