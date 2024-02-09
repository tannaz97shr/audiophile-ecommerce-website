import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "black-light": "#101010",
      "border-grey": "#979797",
      "grey-dark": "#cfcfcf",
      grey: "#f1f1f1",
      "grey-light": "#fafafa",
      "orange-dark": "#d87d4a",
      "orange-light": "#fbaf85",
      red: "#CD2C2C",
      backdrop: "rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [],
};
export default config;
