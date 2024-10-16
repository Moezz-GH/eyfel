<script>
import AboutSection from '@/components/AboutSection/AboutSection.vue'
import AboutUsTimeLine from '@/components/AboutUsTimeLine/AboutUsTimeLine.vue'



export default {
  name: 'AboutUs',
  components: {
    AboutSection,AboutUsTimeLine,
    
  },
};

</script>

<template>
    <div>
        <AboutSection/>
        <AboutUsTimeLine/>
      
    </div>
  </template>