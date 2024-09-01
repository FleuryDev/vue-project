import HomeComponent from '@/components/HomeComponent.vue';
import FoundAgencesComponent
  from '@/components/navigation/FoundAgencesComponent.vue';
import FoundAHomeComponent
  from '@/components/navigation/FoundAHomeComponent.vue';
import ParentsVuewer from '@/components/others/parentsVuewer.vue';

export default [
    {path: '/', alias: '/home', component: HomeComponent,meta : {'filterSlot':'home-filter'}},
    {path: '/biens-immobiliers', component: FoundAHomeComponent,meta : {'filterSlot':'home-filter'}},
    {path: '/agences', name : 'agences', component: FoundAgencesComponent},
    {path : '/:pathMatch(.*)*', component: ParentsVuewer, } // catch-all route
]