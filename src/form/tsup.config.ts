import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
});
