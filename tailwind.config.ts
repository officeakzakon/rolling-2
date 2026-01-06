import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // black
        "custom-black-1": "#16171B",
        "custom-black-2": "#282A33",
        "custom-black-3": "#191A1E",

        //grey
        "custom-grey-1": "#ABB0BF",
        "custom-grey-2": "#939393",
        "custom-grey-3": "#4b4b4b",

        //green
        "custom-green-1": "#42a66c",

        //red
        "custom-red-1": "#C62B33FC",
      },
    },
  },
  plugins: [],
};
export default config;
