import type { StorybookConfig } from "@storybook/nextjs";
import path, { dirname, join } from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions"), getAbsolutePath("storybook-addon-themes"), getAbsolutePath("@storybook/addon-storysource"), getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("storybook-dark-mode"), {
    name: "@storybook/addon-styling",
    options: {
      postCss: true
    }
  }, getAbsolutePath("@storybook/addon-mdx-gfm")],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async config => {
    // @ts-expect-error
    config.resolve.alias = {
      "@": path.resolve(__dirname, "../src")
    };
    // @ts-expect-error
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js"],
      ".mjs": [".mts", ".mjs"]
    };
    return config;
  }
};
export default config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}