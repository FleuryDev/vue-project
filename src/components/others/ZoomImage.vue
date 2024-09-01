<template>
  <div class="zoom-image-container">
    <img :src="imageSrc" class="zoom-image" @click="toggleZoom" />
    <div v-if="isZoomed" class="zoom-overlay" @click="toggleZoom">
      <img :src="imageSrc" class="zoomed-image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isZoomed: false,
    };
  },
  methods: {
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    },
  },
};
</script>

<style scoped>
.zoom-image-container {
  position: relative;
  display: inline-block;
}

.zoom-image {
  cursor: zoom-in;
}

.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
  z-index: 5000000000 !important;
}

.zoomed-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}
</style>
