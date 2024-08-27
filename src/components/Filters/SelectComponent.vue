<script setup>
import { ref } from "vue";

 const  selectedCity = ref(),
            cities = ref([
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' },
                
            ])
</script>

<template>
    <div class="w-10 relative flex justify-center">
        <FloatLabel class="w-full">
            <Select v-model="selectedCity" inputId="{{for}}" :options="cities" optionLabel="name" class="w-full" />
            <label for="{{for}}">{{ title }}</label>
        </FloatLabel>
    </div>
</template>

<script >



export default {
    data() {
        return {
           
                    }
                },
        props :['title', 'for', 'options']
    }
</script>
