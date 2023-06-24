import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/globals.css";
import { DocsContainer } from "./DocContainer";

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal },
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
    docs: {
      container: DocsContainer,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
