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
        bluePalette: {
          50: "#eff6fe",
          100: "#e0ecfc",
          200: "#c1dafa",
          300: "#a1c7f7",
          400: "#82b5f5",
          500: "#63a2f2",
          600: "#4f82c2",
          700: "#3b6191",
          800: "#284161",
          900: "#142030",
        },
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
