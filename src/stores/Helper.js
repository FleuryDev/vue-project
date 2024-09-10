import {
  computed,
  ref,
} from 'vue';

import { defineStore } from 'pinia';

export const useHelperStore = defineStore('HelperStore',()=> {

    const helperValue = ref(0);
    /**ASSETS DATA */

    function Assets(pathImg) {
      return new URL('../assets/'+pathImg, import.meta.url).href;
    }


    /** MEDIA FUNCTIONS */
    const isZoomed  = ref(false);
    const zoomData = ref(null)
    
    const isFitted  = ref(false);
   
    
    const toggleModal = () => {
        isZoomed.value =!isZoomed.value;
    }
    
    const toggleFit = () => {
        isFitted.value =!isFitted.value;
    }
    const zoom = computed(() => {
        return isZoomed.value? 'Zoom' : 'Fit';
    })
    function zoomHandler(data){
        this.toggleModal();
        zoomData.value =  data;
       
    }

    return {
        helperValue,
        isZoomed,
        zoom,
        zoomData,
        isFitted,
        toggleFit,
        toggleModal,
        zoomHandler,
        Assets
    }

})