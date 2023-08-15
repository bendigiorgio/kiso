import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
  banner: {
    js: `"use client"`,
  },
  entry: ["src/index.ts", "src/**/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  splitting: false,
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  ...options,
}));
