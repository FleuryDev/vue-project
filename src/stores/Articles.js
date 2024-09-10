import { ref } from 'vue';

import { defineStore } from 'pinia';

import { useUserStore } from './User';

export const useArticleStore = defineStore('ArticleStore',()=> {
    const articles = ref([])
    const currentArticle = ref(null)
    const user = useUserStore()
    
    function fetchArticles () {
        // Assuming fetchArticles is an async function that fetches articles from an API
        fetchArticles().then(data => articles.value = data)
    }
    
    function fetchArticle (id) {
        // Assuming fetchArticle is an async function that fetches a single article from an API
        return fetchArticle(id)
    }
    
    function addArticle (article) {
        articles.value.push(article)
    }
     const likeArticle = () => {
     
       if(user.isLogedIn )
           { 
            console.log('Article liké')
            if(user.favoriteArticles.includes( currentArticle.value.id))
           {
            console.log('Article déjà dans vos favoris')
            user.favoriteArticles.splice(user.favoriteArticles.indexOf(currentArticle.value.id), 1)
          
           }
           else{
            
            user.favoriteArticles.push(currentArticle.value.id)
           }
                }

                
                else  {
                alert('Veuillez vous connecter pour liker un article')}
      //console.log(user.favoriteArticles)
    }
    function setLikeArticle (article) {
         
        currentArticle.value = article
        likeArticle()
    }

    function isFavorite (articleId) {
  
            // console.log(user.favoriteArticles.includes(articleId))
       return user.favoriteArticles.includes(articleId)
    }

   

    return {
        articles,
        setLikeArticle,
        currentArticle,
        fetchArticles,
        fetchArticle,
        addArticle,
        likeArticle,
        isFavorite,
        // Other computed properties and methods can be added here...
    }
})