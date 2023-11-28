/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   fillPrimary: "text-primary", // Exemple de couleur primaire
      //   fillSecondary: "text-secondary", // Exemple de couleur secondaire
      //   fillAccent: "text-accent", // Exemple de couleur d'accent
      //   // Ajoutez d'autres couleurs personnalisées selon vos besoins
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["aqua"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
};
