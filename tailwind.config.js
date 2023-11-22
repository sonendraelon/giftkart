/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#838383",
          "200": "#211935",
        },
        whitesmoke: "#f8f8f8",
        blueviolet: "#7e22ce",
        darkslategray: "#3c3c3c",
        darkgray: "#999",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
