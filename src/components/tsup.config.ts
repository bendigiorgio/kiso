import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/**/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
});
