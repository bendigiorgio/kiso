import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const theme = {
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
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      toggle: "hsl(var(--toggle))",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
      "collapsible-down": {
        from: { height: 0 },
        to: { height: "var(--radix-collapsible-content-height)" },
      },
      "collapsible-up": {
        from: { height: "var(--radix-collapsible-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "collapsible-down": "collapsible-down 0.2s ease-out",
      "collapsible-up": "collapsible-up 0.2s ease-out",
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  plugin(function ({ addComponents }) {
    addComponents({
      ".heading-1": {
        "@apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl":
          {},
      },
      ".heading-2": {
        "@apply scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0":
          {},
      },
      ".heading-3": {
        "@apply scroll-m-20 text-2xl font-semibold tracking-tight": {},
      },
      ".heading-4": {
        "@apply scroll-m-20 text-xl font-semibold tracking-tight": {},
      },
      ".paragraph": {
        "@apply leading-7 [&:not(:first-child)]:mt-6": {},
      },
      ".blockquote": {
        "@apply mt-6 border-l-2 pl-6 italic": {},
      },
      ".ilcode": {
        "@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold":
          {},
      },
    });
  }),
];
