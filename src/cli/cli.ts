#!/usr/bin/env node

import { Command } from "@commander-js/extra-typings";
import fs from "fs";
import { getPackageManager } from "./src/package-manager";
import { getProjectInfo } from "./src/get-project-info";
import {
  HOOK,
  STYLES,
  STYLES_W_PROSE,
  TAILWIND_CONFIG,
  UTILS,
} from "./src/templates";
import { execa } from "execa";
import { logger } from "./src/logger";
import prompts from "prompts";
import ora from "ora";

const PROJECT_DEPENDENCIES = [
  "tailwindcss-animate",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
  "lucide-react",
  "next-themes",
  "@radix-ui/react-aspect-ratio",
  "@radix-ui/react-label",
  "@radix-ui/react-scroll-area",
  "@radix-ui/react-separator",
  "@radix-ui/react-slot",
  "@radix-ui/react-tabs",
  "@radix-ui/react-toast",
  "@radix-ui/react-tooltip",
];

const program = new Command();

program
  .name("Maison-Components")
  .version("1.0.0")
  .description("CLI for Maison Components");

program
  .command("init")
  .description("Initialize Maison Components")
  .action(async () => {
    const packageManager = getPackageManager();
    const projectInfo = await getProjectInfo();
    const tailwindConfigFileName = "tailwind.config.js";
    const oldTailwindConfigFileName = "tailwind.config.old.js";

    logger.warn("This command will override the following files:");
    logger.warn(`- ${tailwindConfigFileName}`);
    logger.warn(`- ./styles/globals.css`);
    logger.warn(`- ./lib/utils.ts`);

    const { confirm } = await prompts({
      type: "confirm",
      name: "confirm",
      message: "Are you sure you want to continue?",
      initial: true,
    });

    if (!confirm) {
      process.exit(0);
    }

    const tailwindSpinner = ora("Adding TailwindCSS Styles").start();
    if (fs.existsSync(tailwindConfigFileName)) {
      fs.renameSync(tailwindConfigFileName, oldTailwindConfigFileName);
      console.log(
        `${tailwindConfigFileName} has been renamed to ${oldTailwindConfigFileName}`
      );
    }

    fs.writeFileSync(tailwindConfigFileName, TAILWIND_CONFIG);
    tailwindSpinner.succeed("TailwindCSS Styles have been added");

    const globalStlyesSpinner = ora("Rewriting Global Styles").start();

    const stylesConfirm = await prompts({
      type: "confirm",
      name: "confirm",
      message: "Do you want to include the typography utility classes?",
      initial: false,
    });

    let stylesDestination = projectInfo?.srcDir
      ? "./src/styles/globals.css"
      : "./styles/globals.css";

    if (projectInfo?.appDir) {
      stylesDestination = projectInfo?.srcDir
        ? "./src/app/globals.css"
        : "./app/globals.css";
    }
    if (stylesConfirm.confirm) {
      fs.writeFileSync(stylesDestination, STYLES_W_PROSE, "utf8");
    } else {
      fs.writeFileSync(stylesDestination, STYLES, "utf8");
    }
    globalStlyesSpinner.succeed("Global Styles have been rewritten");

    const utilsSpinner = ora("Adding Utils").start();
    const cnSpinner = ora("Adding CN util").start();
    const utilsDestination = projectInfo?.srcDir
      ? "./src/lib/utils.ts"
      : "./lib/utils.ts";
    fs.writeFileSync(utilsDestination, UTILS, "utf8");
    cnSpinner.succeed("CN util has been added");

    const hookSpinner = ora("Adding useHookForm hook").start();
    const hookDestination = projectInfo?.srcDir
      ? "./src/lib/useHookForm.ts"
      : "./lib/useHookForm.ts";
    fs.writeFileSync(hookDestination, HOOK, "utf8");
    hookSpinner.succeed("useHookForm hook has been added");

    utilsSpinner.succeed("Utils have been added");

    // Install dependencies.
    await execa(packageManager, [
      packageManager === "npm" ? "install" : "add",
      ...PROJECT_DEPENDENCIES,
    ]);
  });

// program
//   .command("create-form")
//   .argument("<path>", "Path to the form component")
//   .description(
//     "Create a form component at the specified pat based off of a zod schema called FormSchema"
//   )
//   .action(async () => {
//     const filePath = program.args[0];
//     const code = recast.parse(filePath);
//   });
