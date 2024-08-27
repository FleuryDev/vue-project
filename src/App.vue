<script setup>
import HeaderComponent from './components/navigation/HeaderComponent.vue'
import IndexCarouselComponent from './components/carousels/IndexCarouselComponent.vue'
import ArticlesFilterPiecesComponent from './components/Filters/ArticlesFilterPiecesComponent.vue';
import ArticlesHomeComponent from './components/Cards/ArticlesHomeComponent.vue'
import FooterComponent from './components/navigation/FooterComponent.vue'
</script>

<template>
  <HeaderComponent/>
  <main class="container w-full mx-auto flex max-lg:mt-20 lg:mt-32 min-h-96 z-0">
      <div class="w-full container  justify-between max-lg:mx-8 lg:px-24">
                <IndexCarouselComponent/>
                    <!-- home filter-->
                <ArticlesFilterPiecesComponent/>
               

                <!--Articles-->
                 
                <section class="text-gray-600 flex w-full mx-auto default-font">
                  <div class="container px-0 py-8 mx-auto flex flex-wrap w-full">
                    <div  class="flex flex-wrap mx-auto  -m-4 w-full justify-between">

                       
                        
                        <!--ITEM -->
                        <ArticlesHomeComponent v-for="article in articles" :key="article.id" :title="article.title" :location="article.location" :prix="article.prix" :promoter="article.promoter" :status="article.status"/>
                      

                       
                    </div>
                    <div class="flex mx-auto p-4 mt-5 mb-10">
                        <button class=" p-1 px-3 text-black bg-yellow-200 rounded-3xl">Suivant</button>
                    </div>
                  </div>
                </section>
                 
            </div>
  </main>
  <FooterComponent/>
</template>

<script>
  export default {
    data (){
      return {
      articles : [
            {
              id : 13023,
              title : '2 Pièces - Sanitaire',
              location : ' Bidossessi, Abomey-Calavi',
              prix : 51000,
              promoter : 'The Catalyzer',
              status : 'À louer'

            },
             {
              id : 54454,
              title : '3 Pièces - Sanitaire',
              location : ' Bidossessi, Abomey-Calavi',
              prix : 91000,
              promoter : 'THome Dom',
              status : 'À louer'

            },
             {
              id : 4606,
              title : '1 Pièce - Sanitaire',
              location : ' Bidossessi, Abomey-Calavi',
              prix : 50000,
              promoter : 'The Catalyzer',
              status : 'À louer'

            },
             {
              id : 45648,
              title : '2 Pièces - Simple',
              location : ' Bidossessi, Abomey-Calavi',
              prix : 40000,
              promoter : 'The Catalyzer',
              status : 'À louer'

            },
             {
              id : 58696,
              title : '3 Pièces - Sanitaire',
              location : ' Bidossessi, Abomey-Calavi',
              prix : 51000,
              promoter : 'ADA Home',
              status : 'À louer'

            }
           
      ],
      }
    },
  }
</script>
<style scoped>

</style>
