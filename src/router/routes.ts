import ArticleShow from '@/components/Articles/ArticleShow.vue';
import NotFound from '@/components/Errors/NotFound.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import FoundAgencesComponent
  from '@/components/navigation/FoundAgencesComponent.vue';
import FoundAHomeComponent
  from '@/components/navigation/FoundAHomeComponent.vue';

export default [
    {path: '/', alias: '/home', component: HomeComponent,meta : {'filterSlot':'home-filter'}},
    {path : '/article/:id',component : ArticleShow, meta : {'layout':'simple-layout'}},
    {path: '/biens-immobiliers', component: FoundAHomeComponent,meta : {'filterSlot':'home-filter'}},
    {path: '/agences', name : 'agences', component: FoundAgencesComponent},
    {path : '/:pathMatch(.*)*', component: NotFound, } // catch-all route
]