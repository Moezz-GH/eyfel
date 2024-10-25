<template>
 
<div class="max-w-6xl mx-auto px-4 xl:px-0 pb-10">
  <!-- Grid -->
  <div class="grid lg:grid-cols-7 lg:gap-x-12 xl:gap-x-12 lg:items-center">
    <div class="lg:col-span-4">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">{{ titel1 }}</h1>
      <p class="mt-9 text-lg text-gray-800">{{ content1 }}</p>
    </div>
    

    <div class="lg:col-span-3 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src="../../assets/products/erfume.png" alt="Hero Image">
    </div>
   
  </div>
  
</div>
<!-- End Grid -->
<div class="max-w-6xl mx-auto px-4 xl:px-0 pb-10">
  <!-- Grid -->
  <div class="grid lg:grid-cols-7 lg:gap-x-12 xl:gap-x-12 lg:items-center">
    <div class="lg:col-span-3 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src="../../assets/products/download.jpg" alt="Hero Image">
    </div>

    <div class="lg:col-span-4">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">{{ titel2 }}</h1>
      <p class="mt-9 text-lg text-gray-800">{{ content2 }}</p>
    </div>
  </div>
  <!-- End Grid -->
</div>

</template>
    
<script>
export default{
    props: ["titel1" , "content1" ,"titel2","content2"] 

}
</script>
    