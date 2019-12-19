<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div><img src="@/static/images/download.jpg"></div>
      <div><img src="@/static/images/download.jpg"></div>
      <div><img src="@/static/images/download.jpg"></div>
      <div><img src="@/static/images/download.jpg"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel }
}
</script>
