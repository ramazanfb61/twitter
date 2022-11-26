/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      translate: {
        '4.25': '17rem'
      },
      spacing: {
        "navi": "595px",
        "main" : "1395px",
        "content" : "600px",
        "trend" : "350px"
      },
      colors:{
        "twitterPrimaryColor" : "#15202B",
        "twitterHoverColor" : "#2C3640",
        "twitterTextColor" : "#F7F9F9",
        "twitterButtonColor" : "#1A8CD8",
        "twitterLogoColor" : "#162D3F",
        "twitterBorderColor" : "#38444D",
      }
    },

  },
  plugins: [],
}
