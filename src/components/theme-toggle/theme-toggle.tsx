"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "../button/button.js";
import { Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group/toggle-group.js";

type ThemeToggleProps = {
  variant?: "default" | "switch";
};

const ThemeToggle = ({ variant }: ThemeToggleProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {variant === "default" && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
      {variant === "switch" && (
        <ToggleGroup
          className="max-w-[165px]"
          type="single"
          variant="filled"
          size="sm"
        >
          <ToggleGroupItem
            className="flex flex-row items-center space-x-4"
            value="light"
            onClick={() => setTheme("light")}
          >
            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <span>Light</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            className="flex flex-row items-center space-x-4"
            value="dark"
            onClick={() => setTheme("dark")}
          >
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span>Dark</span>
          </ToggleGroupItem>
        </ToggleGroup>
      )}
    </>
  );
};
export { ThemeToggle };
