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
        'my-bg-image': "url('@/assets/products/WhatsApp Image 2024-10-09 at 17.13.57_03dd14ea.jpg')",
        'my-bg-image1': "url('@/assets/products/WhatsApp Image 2024-10-09 at 17.13.57_314c3234.jpg')",
        'my-bg-image2': "url('@/assets/products/WhatsApp Image 2024-10-09 at 17.13.57_982e0caa.jpg')",
        'my-bg-image3': "url('@/assets/products/photo1.jpg')",
        'my-bg-image4': "url('@/assets/products/12.png')",
      }}
  },
  plugins: [ require('flowbite/plugin'), require('preline/plugin'), ],
}