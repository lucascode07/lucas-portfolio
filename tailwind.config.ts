import type { Config } from "tailwindcss";

const safelist = [
  "text-pink-500",
  "text-teal-500",
  "text-red-400",
  "text-purple-400",
  "text-blue-600",
  "text-sky-500",
  "text-pink-600",
  "text-blue-900",
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  safelist,
};
export default config;
