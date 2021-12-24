module.exports = {
  content: ["./src/views/**/*.ejs"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        text: "var(--text-color)",
        textInverted: "var(--text-color-inverted)",
        navColor: "var(--nav-color)",
        backgroundColor: "var(--background-color)",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
