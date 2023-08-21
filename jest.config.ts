import type { JestConfigWithTsJest } from "ts-jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions as componentCompileOptions } from "./src/components/tsconfig.json";
import { compilerOptions as libCompileOptions } from "./src/lib/tsconfig.json";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
  rootDir: "./",
  transform: { "^.+\\.(t|j)sx?$": "ts-jest" },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  projects: [
    {
      displayName: "Components",
      testEnvironment: "jsdom",
      transform: { "^.+\\.(t|j)sx?$": "ts-jest" },
      testMatch: [
        "<rootDir>/src/components/src/**/tests/**/*.[jt]s?(x)",
        "<rootDir>/src/components/src/**/**/?(*.)+(spec|test).[jt]s?(x)",
        "<rootDir>/src/components/**/tests/**/*.[jt]s?(x)",
        "<rootDir>/src/components/**/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
      modulePaths: [componentCompileOptions.baseUrl], // <-- This will be set to 'baseUrl' value
      moduleNameMapper: pathsToModuleNameMapper(componentCompileOptions.paths, {
        prefix: "<rootDir>/src/components/src/",
      }),
      testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
    },
    {
      displayName: "Lib",
      testEnvironment: "jsdom",
      transform: { "^.+\\.(t|j)sx?$": "ts-jest" },
      testMatch: ["<rootDir>/lib/src/**/?(*.)+(spec|test).[jt]s?(x)"],
      testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
      modulePaths: [libCompileOptions.baseUrl], // <-- This will be set to 'baseUrl' value
      moduleNameMapper: pathsToModuleNameMapper(
        libCompileOptions.paths,
        { prefix: "<rootDir>/src/lib/src/" } /*, { prefix: '<rootDir>/' } */
      ),
    },
  ],
  roots: ["<rootDir>"],
};

export default jestConfig;
