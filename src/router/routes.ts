import { RouteRecordRaw } from 'vue-router';

import AgenceShow from '@/components/Agences/AgenceShow.vue';
import ArticleShow from '@/components/Articles/ArticleShow.vue';
import NotFound from '@/components/Errors/NotFound.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import FoundAgencesComponent
  from '@/components/navigation/FoundAgencesComponent.vue';
import FoundAHomeComponent
  from '@/components/navigation/FoundAHomeComponent.vue';

const routes : RouteRecordRaw[]= [
  /**FOR BUILD MODE  
    {path : '/vue-project/',name:'home',meta : {'filterSlot':'home-filter'}, component : HomeComponent, children : [
      {path: 'biens-immobiliers', component: FoundAHomeComponent, meta : {'filterSlot':'home-filter'}},
      {path: 'agences', name : 'agences', component: FoundAgencesComponent},
      {path: 'article/:id', component : ArticleShow, meta : {'layout':'simple-layout'}},

      // Add other routes as needed

      {path: '*', component: NotFound, } // catch-all route

      // Add other routes as needed
    ]},
    /** FOR DEVELOPMENT MODE  */
    
    {path: '/', name : 'home', alias: '/home', component: HomeComponent,meta : {'filterSlot':'home-filter'}},
    {path : '/article/:id',component : ArticleShow, meta : {'layout':'simple-layout'}},
    {path: '/biens-immobiliers', component: FoundAHomeComponent,meta : {'filterSlot':'home-filter'}},
    {path: '/agences', name : 'agences', component: FoundAgencesComponent},
    {path: '/agence/:id', name : "AgenceShow", component: AgenceShow, props: true},
    {path : '/:pathMatch(.*)*', component: NotFound, } // catch-all route
  
]


export default routes;