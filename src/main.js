import './assets/main.css'
import './assets/splide.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp( App );
app.use( VueSplide );

app.use(ElementPlus)
app.mount('#app')
