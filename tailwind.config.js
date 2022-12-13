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
        "trend" : "350px",
        
      },
      colors:{
        "twitterPrimaryColor" : "#15202B",
        "twitterHoverColor" : "#2C3640",
        "twitterTextColor" : "#F7F9F9",
        "twitterButtonColor" : "#1A8CD8",
        "twitterLogoColor" : "#162D3F",
        "twitterBorderColor" : "#38444D",
        "twitterPlaceHolder" : "#6C7885",
        "twitterPlaceHolderWhite" : "#8B98A5",
        "twitterWhiteshBorder" : "#4F5F6C",
        "twitterMuteColor" : "#5E6976",
        "twitterSearchColor" : "#273340",
        "twitterTrendItemHover":"#252E38",
        "twitterTrendBackground" : "#1E2732",
      },
      fontSize : {
        "15" : "15px",
      }
    },

  },
  plugins: [],
}
