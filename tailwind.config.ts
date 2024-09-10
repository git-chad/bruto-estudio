import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        priblack: "#080808",
      },
      fontSize: {
        h1: "177.33px",
        h2: "109.6px",
        h3: "67.74px",
        h4: "41.87px",
        h5: "25.88px",
      },
      spacing: {
        xsmall: "0.618rem",
        small: "1rem",
        medium: "1.618rem",
        large: "2.618rem",
        xlarge: "4.236rem",
        xxlarge: "6.853rem",
        xxxlarge: "11.08rem",
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
