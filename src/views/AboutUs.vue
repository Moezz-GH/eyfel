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
        <AboutUsTimeLine titel1="Build Better Products" content1="Introducing a new way for your brand to reach the creative community. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, recusandae ab eum, aut expedita autem placeat voluptatum, animi id ipsam distinctio a? Qui tempora sint deserunt. Quidem molestiae neque voluptatum!"
         titel2="Build Better Products" content2="Introducing a new way for your brand to reach the creative community. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, recusandae ab eum, aut expedita autem placeat voluptatum, animi id ipsam distinctio a? Qui tempora sint deserunt. Quidem molestiae neque voluptatum!"
         />
       
      
    </div>
  </template>