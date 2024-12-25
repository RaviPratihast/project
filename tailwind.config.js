// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your file structure
  ],
  darkMode: 'class', // Enables dark mode via class
  theme: {
    extend: {
      // Your theme settings here
    },
  },
  plugins: [],
};
