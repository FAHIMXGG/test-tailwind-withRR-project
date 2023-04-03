/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "./index.html",
//     './src/**/*.{js,jsx,ts,tsx}',
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//     "./node_modules/flowbite/**/*.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   //plugins: [],

//   plugins: [
//     require('flowbite/plugin')
// ]
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  
}

// module.exports = {
//   content: [
    
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ],
//   plugins: [ require('flowbite/plugin')],
// };