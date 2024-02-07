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
      "grey-dark": "#f1f1f1",
      "grey-light": "#fafafa",
      "orange-dark": "#d87d4a",
      "orange-light": "#fbaf85",
    },
  },
  plugins: [],
};
export default config;
