export const useSnippet = `import { Button } from "kiso-core/button"

const AddToCartButton = () => {
  return (
    <div>
      <Button>Add to cart</Button>
    </div>
  );
};
`;

export const extendSnippet = `import { Avatar, AvatarFallback, AvatarImage } from "kiso-core/avatar";
import { motion } from "framer-motion";

const MotionAvatar = motion(Avatar);
`;

export const styleSnippet = `import { Button } from "kiso-core/button"

const AddToCartButton = () => {
  return (
    <div>
      <Button className=”hover:scale-150”>Add to cart</Button>
    </div>
  );
};
`;

export const tailwindSnippet = `/** @type {import('tailwindcss').Config} */
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

export const globalsSnippet = `@tailwind base;
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
  
      --success: 119.7 84.3% 45.1%;
      --success-foreground: 0 85.7% 97.3%;
  
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
  
      --success: 119.7 84.3% 45.1%;
      --success-foreground: 0 0% 98%;
  
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
