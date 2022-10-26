const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "fontSize": {
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "3rem"
      },
      "fontFamily": {
        "lexend": "Lexend",
        "source-code-pro": "Source Code Pro",
        "cinzel": "Cinzel"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.3125rem",
        "sm": "0.375rem",
        "default": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5625rem",
        "3xl": "2.1875rem",
        "4xl": "3rem",
        "full": "9999px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
