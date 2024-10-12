<script>

import Slider from '@/components/Slider/Slider.vue'
import Products from '@/components/Products/HomeProducts.vue'
import About from '@/components/About/HomeAbout.vue'


export default {
  name: 'HomeView',
  components: {
    Slider,Products,About
  },
};

</script>

<template>
  <div>
    <Slider/>
    <Products/>
    <About/>
    
  </div>
</template>
