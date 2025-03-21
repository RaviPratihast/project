export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  darkMode: "class", // Enables dark mode via class
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fold-unfold": {
          "0%": {
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(2deg) rotateY(-5deg)",
          },
        },
        "spin-full": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        fold: "fold-unfold 0.5s ease-out forwards",
        "spin-360": "spin-full 1s linear infinite",
      },
    },
  },
  plugins: [],
};
