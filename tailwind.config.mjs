/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        sonic: {
          green: "#4ade80",
          dark: "#171717",
          light: "#ffffff",
          gray: "#FAFAFA", // Your gray background color
        },
      },
    },
  },
  plugins: [],
};
