import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore',()=>{
    const pseudo = ref('')
    const isLogedIn = ref(true)
    const favoriteArticles = ref([])
   


   
    const dislikeArticle = () => {
        this.favoriteArticles.value = this.favoriteArticles.value.filter(id => id!== this.Articles.currentArticle.id)
    }

    const getUserArticles = async () => {
        if(this.isLogedIn.value) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.pseudo.value}`)
            const articles = await response.json()
            this.favoriteArticles.value = articles.map(article => article.id)
        }
    }
    return {
        pseudo,
        isLogedIn,
        favoriteArticles,
        dislikeArticle,
        getUserArticles,
        checkFavoriteArticle: id => this.favoriteArticles.value.includes(id)
    }
})