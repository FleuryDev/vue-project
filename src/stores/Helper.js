import {
  computed,
  ref,
} from 'vue';

import { defineStore } from 'pinia';

export const useHelperStore = defineStore('HelperStore',()=> {

    const helperValue = ref(0);


    /** MEDIA FUNCTIONS */
    const isZoomed  = ref(false);
    const zoomData = ref(null)
    
    const isFitted  = ref(false);
   
    
    const toggleZoom = () => {
        isZoomed.value =!isZoomed.value;
    }
    
    const toggleFit = () => {
        isFitted.value =!isFitted.value;
    }
    const zoom = computed(() => {
        return isZoomed.value? 'Zoom' : 'Fit';
    })
    function zoomHandler(data){
        this.toggleZoom();
        zoomData.value =  data;
       
    }

    return {
        helperValue,
        isZoomed,
        zoom,
        zoomData,
        isFitted,
        toggleFit,
        toggleZoom,
        zoomHandler
    }

})