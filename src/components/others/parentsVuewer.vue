<template>
  <div>
    <zoom-image :image-src="imageUrl" />
  </div>
</template>

<script>
import ZoomImage from './ZoomImage.vue';

export default {
  components: {
    ZoomImage,
  },
  data() {
    return {
      imageUrl: "path/to/your/image.jpg",
    };
  },
};
</script>
