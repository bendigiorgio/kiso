"use client";

import { Popover, PopoverContent, PopoverTrigger } from "kiso-core/popover";
import { Button } from "kiso-core/button";
import { Checkbox } from "kiso-core/checkbox";
import { Clipboard } from "lucide-react";
import { useState } from "react";
import { useToast } from "kiso-core/toast";

const Install = () => {
  const [checked, setChecked] = useState<
    ("core" | "utils" | "charts" | "form")[]
  >(["core"]);

  const [openMenu, setOpenMenu] = useState(false);

  const installCommand = ` ${checked.map((item) => "kiso-" + item).join(" ")}`;
  const copyToClipboard = (packageManager: "npm" | "pnpm" | "yarn") => {
    const command = `${packageManager} ${
      packageManager === "npm" ? "install" : "add"
    }${installCommand}`;
    navigator.clipboard.writeText(command);
  };
  const { toast } = useToast();
  return (
    <li
      id="installation"
      className="grid xl:grid-cols-2 grid-cols-1 gap-4 w-full mt-4 pl-6 sm:pl-16 md:pl-28 pb-12 relative scroll-m-24"
    >
      <div className="flex flex-col pt-24 space-y-5 sm:min-w-[540px]">
        <h3 className="text-5xl font-semibold">Easy installation.</h3>
        <p className="text-muted-foreground">Quickly setup ...</p>
        <p>Install the parts that your project requires:</p>
        <div className="space-y-4 max-w-full">
          <div className="flex items-center space-x-2">
            <Checkbox
              defaultChecked={true}
              checked={checked.includes("core")}
              onClick={() => {
                setChecked((prev) =>
                  prev.includes("core")
                    ? prev.filter((item) => item !== "core")
                    : [...prev, "core"]
                );
              }}
              id="core"
            />
            <label
              htmlFor="core"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-row justify-between"
            >
              <span className="w-[80px]">kiso-core</span>
              <span className="ml-4 text-muted-foreground">
                Core components
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={checked.includes("charts")}
              onClick={() => {
                setChecked((prev) =>
                  prev.includes("charts")
                    ? prev.filter((item) => item !== "charts")
                    : [...prev, "charts"]
                );
              }}
              id="charts"
            />
            <label
              htmlFor="charts"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-row justify-between "
            >
              <span className="w-[80px]">kiso-charts</span>
              <span className="ml-4 text-muted-foreground">
                Charts components
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={checked.includes("utils")}
              onClick={() => {
                setChecked((prev) =>
                  prev.includes("utils")
                    ? prev.filter((item) => item !== "utils")
                    : [...prev, "utils"]
                );
              }}
              id="utils"
            />
            <label
              htmlFor="utils"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-row justify-between "
            >
              <span className="w-[80px]">kiso-utils</span>
              <span className="ml-4 text-muted-foreground">
                Utility functions and hooks
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={checked.includes("form")}
              onClick={() => {
                setChecked((prev) =>
                  prev.includes("form")
                    ? prev.filter((item) => item !== "form")
                    : [...prev, "form"]
                );
              }}
              id="form"
            />
            <label
              htmlFor="form"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-row justify-between whitespace-pre-line"
            >
              <span className="w-[80px] whitespace-nowrap">kiso-form</span>
              <span className="ml-4 text-muted-foreground">
                Utilities for connecting with React-Hook-Form
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="xl:pt-48 pt-8 flex flex-col justify-center items-center">
        <div className="space-x-2 flex items-center">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold h-8 flex items-center">
            pnpm add{installCommand}
          </code>
          <Popover open={openMenu} onOpenChange={setOpenMenu}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Clipboard className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-start w-20 p-1">
              <Button
                onClick={() => {
                  copyToClipboard("npm");
                  setOpenMenu(false);
                  toast({ description: "Copied to clipboard" });
                }}
                variant="link"
                size="sm"
              >
                npm
              </Button>
              <Button
                onClick={() => {
                  copyToClipboard("pnpm");
                  setOpenMenu(false);
                  toast({ description: "Copied to clipboard" });
                }}
                variant="link"
                size="sm"
              >
                pnpm
              </Button>
              <Button
                onClick={() => {
                  copyToClipboard("yarn");
                  setOpenMenu(false);
                  toast({ description: "Copied to clipboard" });
                }}
                variant="link"
                size="sm"
              >
                yarn
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="absolute left-0 h-full overflow-hidden grid-cols-2 auto-cols-min grid">
        <div className="relative w-2 h-full">
          <div className="rounded-full bg-foreground h-2 w-2 mt-1" />
          <div className="h-full border-l border-foreground left-1/2 -translate-x-1/2 absolute top-8" />
        </div>

        <span className="font-light tracking-wide text-xs">STEP 01</span>
      </div>
    </li>
  );
};

export default Install;
