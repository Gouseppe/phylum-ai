/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // WARNING: la animacion pulsate se puede usar pero no se le puede agregar un animation duration muy bajo (0.11 por ejemplo) ya que genera mucha precion para la GPU, usar bajo las consideraciones mencionadas
        pulsate: {
          "100%": {
            "text-shadow":
              "0 0 4px #f9fafb,0 0 11px #f9fafb,0 0 19px #f9fafb,0 0 40px #5271ff, 0 0 80px #5271ff,0 0 90px #5271ff,0 0 100px #5271ff,0 0 150px #5271ff;",
          },
          "0%": {
            "text-shadow":
              "0 0 4px #f9fafb,0 0 10px #f9fafb,0 0 18px #f9fafb,0 0 38px #5271ff, 0 0 73px #5271ff,0 0 80px #5271ff,0 0 94px #5271ff,0 0 140px #5271ff;",
          },
        },
        open: {
          "0%": {
            position: "relative",
            left: "50%",
            top: "40vh",
            transform: "translate(-50%, -50%)",
            opacity: "0",
          },
          "20%": {
            position: "relative",
            left: "50%",
            top: "40vh",
            transform: "translate(-50%, -50%)",
            opacity: "1",
          },
          "70%": {
            position: "relative",
            left: "50%",
            top: "40vh",
            transform: "translate(-50%, -50%)",
          },
          "100%": {
            position: "relative",
            left: "50%",
            top: "0%",
            transform: "translate(-50%, 0%)",
          },
        },
        appears: {
          "0%": {
            opacity: "0",
          },
          "70%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        cursorTextAnimation: {
          "0%": {
            top: "50%",
            bottom: "50%",
          },
          "20%": {
            top: "0",
            bottom: "0",
          },
          "80%": {
            top: "0",
            bottom: "0",
          },
          "100%": {
            top: "50%",
            bottom: "50%",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
