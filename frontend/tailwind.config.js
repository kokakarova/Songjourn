/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3771a0",
          "secondary": "#61c0c9",
          "base-100": "#ffffff",
        }
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};

