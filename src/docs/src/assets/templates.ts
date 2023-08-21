export const STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;


@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;

    --toggle: 0 0% 100%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --error: 0 100% 96%;
    --error-foreground: 358 66% 48%;

    --success: 120 63% 85%;
    --success-foreground: 120 87% 17%;

    --warning: 44 100% 92%;
    --warning-foreground: 30 100% 32%;

    --ring: 240 5% 64.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;

    --toggle: 240 6.6% 28.5%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;

    --error: 357 46% 16%;
    --error-foreground: 358 100% 69%;

    --success: 120 61% 21%;
    --success-foreground: 120 94% 57%;

    --warning: 32 100% 10%;
    --warning-foreground: 35 100% 52%;

    --ring: 240 3.7% 15.9%;
  }
}
  
  @layer base {
    * {
      @apply border-border;
    }
    body {
      @apply bg-background text-foreground;
      font-feature-settings: "rlig" 1, "calt" 1;
    }
  }
  `;

export const TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
const path = require("path");
import plugin from "tailwindcss/plugin";
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    path.join(path.dirname(require.resolve("kiso-core")), "**/*.js"),
    path.join(path.dirname(require.resolve("kiso-charts")), "**/*.js")

	],
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
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
  },
  plugins: [require("tailwindcss-animate")],
}`;

export const TAILWIND_CONFIG_W_PROSE = `/** @type {import('tailwindcss').Config} */
const path = require("path");
import plugin from "tailwindcss/plugin";
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    path.join(path.dirname(require.resolve("kiso-core")), "**/*.js"),
    path.join(path.dirname(require.resolve("kiso-charts")), "**/*.js")

	],
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
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
  },
  plugins: [
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
  ],
}`;

export const codeStyle = {
  lineNumberColor: `#abb2bf`,
  lineNumberBgColor: `var(--background)`,
  backgroundColor: `var(--background)`,
  textColor: `#abb2bf`,
  substringColor: `#e06c75`,
  keywordColor: `#c678dd`,
  attributeColor: `#98c379`,
  selectorAttributeColor: `#e06c75`,
  docTagColor: `#c678dd`,
  nameColor: `#e06c75`,
  builtInColor: `#e6c07b`,
  literalColor: `#56b6c2`,
  bulletColor: `#61aeee`,
  codeColor: `#abb2bf`,
  additionColor: `#98c379`,
  regexpColor: `#98c379`,
  symbolColor: `#61aeee`,
  variableColor: `#d19a66`,
  templateVariableColor: `#d19a66`,
  linkColor: `#61aeee`,
  selectorClassColor: `#d19a66`,
  typeColor: `#d19a66`,
  stringColor: `#98c379`,
  selectorIdColor: `#61aeee`,
  quoteColor: `#5c6370`,
  templateTagColor: `#abb2bf`,
  deletionColor: `#e06c75`,
  titleColor: `#61aeee`,
  sectionColor: `#e06c75`,
  commentColor: `#5c6370`,
  metaKeywordColor: `#abb2bf`,
  metaColor: `#61aeee`,
  functionColor: `#abb2bf`,
  numberColor: `#d19a66`,
};
