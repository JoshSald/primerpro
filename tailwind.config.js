/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1248px",
    },
    extend: {
      colors: {
        evergreen: "#2e5e4e",
        moss: "#7ca982",
        beige: "#f5f2e7",
        gray: "#4a4a4a",
        pine: "#2b7a78",
        white: "#ffffff",
      },
      fontFamily: {
        heading: ["Montserrat", "Poppins", "Inter", "sans-serif"],
        body: ["Lato", "Nunito", "Open Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["2rem", { lineHeight: "1.2" }], // mobile default
        h2: ["1.5rem", { lineHeight: "1.3" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "24px",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
