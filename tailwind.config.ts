import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3DDF",
        doveGray: "#696969",
        steelGray: "#221f3c",
        saffronMango: "#ffc362",
        carnation: "#ff6969",
        silverChalice: "#a8a8a8",
        gallery: "#efeeee",
        meelrose: "#bec3ff",
        selago: "#f2f3ff",
        mountainMist: "#8e8e8e",
        meelrose2: "#b7bcf3",
        gamboge: "#dfa12d",
        zircon: "#f4f7ff"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
