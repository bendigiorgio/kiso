/* eslint-disable import/no-anonymous-default-export */
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import nodeExternals from "rollup-plugin-node-externals";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        exports: "named",
        dir: "dist/cjs",
      },
      {
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        dir: "dist/esm",
      },
    ],
    plugins: [
      commonjs(),
      nodeExternals({ devDeps: true }),
      nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),

      esbuild({
        sourceMap: false,
        tsconfig: "./tsconfig.json",
        exclude: /node_modules/,
      }),
      json(),
      alias({
        entries: [
          { find: /^([^.]+)\.js$/, replacement: "$1.ts" },
          { find: /^([^.]+)\.jsx$/, replacement: "$1.tsx" },
        ],
      }),
      alias({
        entries: [{ find: "@", replacement: "./src" }],
      }),
      replace({ preventAssignment: true }),
    ],
    external: [],
  },
];
