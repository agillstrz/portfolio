/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#272b2d",

        main3: "#3a3f47",
        bg: "#1f242d",
        cyan: "#0ef",
        text: "#F2F6FF",

        hijau: "#1EB854",
        bg1: "#202020",

        dark1: "#242526",
        dark2: "#272b2d",
        light1: "#FFFF",
        light2: "#F7F2F2",
        text1: "#e8ecef",
        text2: "#676c6f",
      },
      animation: {
        "bounce-1": "kiri 4s infinite",
      },
      keyframes: {
        kiri: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(2%)" },
        },
      },
    },
  },
  plugins: [],
};
