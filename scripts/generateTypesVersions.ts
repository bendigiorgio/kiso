import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const packages = ["components", "charts"];

packages.forEach((packageName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dirPath = path.join(__dirname, `../src/${packageName}/src`);
  const packageJsonPath = path.join(
    __dirname,
    `../src/${packageName}/package.json`
  );
  fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Error reading the directory", err);
      return;
    }

    const folders = entries
      .filter((entry) => entry.isDirectory())
      .map((dir) => dir.name);

    const typeVersions = folders.map((folder) => {
      return {
        [folder]: [`dist/${folder}/`],
      };
    });

    const mappedVersions = typeVersions.reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});

    fs.readFile(packageJsonPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the package.json", err);
        return;
      }

      const packageJson = JSON.parse(data);

      packageJson.typesVersions = {
        "*": {
          ...mappedVersions,
        },
      };

      fs.writeFile(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.error("Error writing to package.json", err);
          } else {
            console.log(
              `${packageName}: Successfully updated package.json with new typeVersions.`
            );
          }
        }
      );
    });
  });
});
