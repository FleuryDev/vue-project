To replace the SVG icon with an exclamation mark and apply the desired styling, you can
modify the `NotFound` component as follows: ```vue
<template>
  <div class="not-found-page">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
      <path d="M11 9h2v6h-2V9zm0 8h2v2h-2v-2z" />
    </svg>
    <h1>Aucun article trouvé !</h1>
    <p>
      Ces articles ont peut &ecirc;tre été mise en location. Vous pouvez rechercher
      d'autre
    </p>
    <router-link to="/" class="primary-orange px-4 py-1 rounded-full"
      >Actualiser</router-link
    >
  </div>
</template>

<style scoped>
.not-found-page {
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
  color: #333;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #444;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #666;
}

.icon {
  width: 50px;
  height: 50px;
  fill: #ff9800; /* color of the icon (orange-primary) */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.primary-orange {
  color: #ff9800; /* color used in primary-orange class */
  text-decoration: none;
}

.primary-orange:hover {
  color: #35495e;
}
/**  ```In this example, I've replaced the SVG path with an exclamation mark. The fill color of
the icon is set to `#ff9800` (orange-primary). The link color is also set to `#ff9800` and
will change to `#35495e` on hover. The animation remains the same.*/
</style>
