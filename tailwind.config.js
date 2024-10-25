module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    colors: {
      'eyfel':'#FFD203'
    },
    extend: {
      backgroundImage: {
        'my-bg-image': "url('@/assets/BANNER-1.png')",
        'my-bg-image1': "url('@/assets/BANNER-2.png')",
        'my-bg-image2': "url('@/assets/BANNER-3.png')",
        'my-bg-image25': "url('@/assets/BANNER-4.png')",
        'my-bg-image3': "url('@/assets/products/photo1.jpg')",
        'my-bg-image4': "url('@/assets/products/12.png')",
      }}
  },
  plugins: [ require('flowbite/plugin'), require('preline/plugin'), ],
}