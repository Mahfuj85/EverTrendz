/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // default sans
        heading: ["Roboto", "sans-serif"], // custom font family
        body: ["Poppins", "sans-serif"], // another custom font family
      },
    },
  },
  plugins: [require("daisyui")],
};
