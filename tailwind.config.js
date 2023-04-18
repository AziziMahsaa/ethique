/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        makaron: "url('/public/images/makaron.webp')",
        makaronweb: "url('/public/images/webimg/Makaron_web.jpg')",
      },
      colors: {
        darkgreen: "rgba(38,57,43,255)",
        golden: "rgba(204,180,107,255)",
        rose: "rgb(239, 233, 217)",
        lightgreen: "#535e4c",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
  },

  plugins: [require("daisyui")],
};
