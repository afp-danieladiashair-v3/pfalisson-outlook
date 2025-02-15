
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF4B81",
          50: "#FFF0F4",
          100: "#FFE1E9",
          200: "#FFB3C7",
          300: "#FF85A5",
          400: "#FF5783",
          500: "#FF4B81",
          600: "#FF1A5E",
          700: "#EB0047",
          800: "#B30036",
          900: "#7A0024",
        },
        secondary: {
          DEFAULT: "#FDF4F6",
          50: "#FFFFFF",
          100: "#FDF4F6",
          200: "#F8D9E0",
          300: "#F3BECB",
          400: "#EEA3B5",
          500: "#E9889F",
          600: "#E46D8A",
          700: "#DF5274",
          800: "#DA375F",
          900: "#D51C49",
        },
        accent: {
          DEFAULT: "#FFD700",
          50: "#FFF9E5",
          100: "#FFF4CC",
          200: "#FFE999",
          300: "#FFDF66",
          400: "#FFD433",
          500: "#FFD700",
          600: "#CCAC00",
          700: "#998100",
          800: "#665600",
          900: "#332B00",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
