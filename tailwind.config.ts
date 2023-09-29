import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "components-light":
          "url(https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/components-bg-light.png)",
        "components-dark":
          "url(https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/components-bg-dark.png)",
        "home-light":
          "url(https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/web-bg-light.png)",
        "home-dark":
          "url(https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/web-bg-dark.png)",
      },
      colors: {
        light: "#FFFFFF",
        dark: "#05070A",
        default: {
          25: "#FCFCFD",
          50: "#F8FAFC",
          100: "#EEF2F6",
          200: "#E3E8EF",
          300: "#CDD5DF",
          400: "#9AA4B2",
          500: "#697586",
          600: "#4B5565",
          700: "#364152",
          800: "#202939",
          900: "#121926",
        },

        primary: {
          25: "#F2F2FF",
          50: "#EAEAFB",
          100: "#D4D4F7",
          200: "#E3E8EF",
          300: "#7F7FE6",
          400: "#5454DE",
          500: "#4C4CDC",
          600: "#2121AB",
          700: "#191980",
          800: "#111155",
          900: "#08082B",
        },

        success: {
          25: "#F2FFF9",
          50: "#DEF7EC",
          100: "#BCF0DA",
          200: "#84E1BC",
          300: "#31C48D",
          400: "#0E9F6E",
          500: "#057A55",
          600: "#046C4E",
          700: "#03543F",
          800: "#014737",
          900: "#023122",
        },

        warning: {
          25: "#FFF9F2",
          50: "#FFF5E6",
          100: "#FEEBCD",
          200: "#FDD89B",
          300: "#FDC468",
          400: "#FCB036",
          500: "#E38D02",
          600: "#C97E04",
          700: "#975E02",
          800: "#643F02",
          900: "#321F01",
        },

        error: {
          25: "#FFF4F2",
          50: "#FCEDED",
          100: "#F9D2D2",
          200: "#F2A6A6",
          300: "#EC7979",
          400: "#E64C4C",
          500: "#E02424",
          600: "#B31919",
          700: "#861313",
          800: "#590D0D",
          900: "#2D0606",
        },

        info: {
          25: "#F0F3FF",
          50: "#E5ECFF",
          100: "#D2DEF9",
          200: "#A5BCF3",
          300: "#789BED",
          400: "#4B7AE7",
          500: "#3267E3",
          600: "#1847B4",
          700: "#123587",
          800: "#0C235A",
          900: "#06122D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
