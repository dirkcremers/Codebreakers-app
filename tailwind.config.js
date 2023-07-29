const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern:
        /(bg|text|border|ring|shadow|ring-offset|fill|outline|ring|divide|from|to)-(primary|lime|purple|red|green|blue|yellow|orange|pink|white|black|gray|slate|emerald|cyan|sky|amber|teal|rose|fuchsia)-(5|10|20|30|40|50|60|70|80|90|95)0/,
      variants: ["focus", "hover"],
    },
  ],
};
