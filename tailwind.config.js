/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "var(--bg)",
        text: "var(--text)",
        border: "var(--border)",
        popup: "var(--popup)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        black: "var(--black)",
        success: "var(--success)",
        "success-light": "var(--success-light)",
        bestseller: "#FFD700",
      },
    },
  },
  plugins: [],
};
