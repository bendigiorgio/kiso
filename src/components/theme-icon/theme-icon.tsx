import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils.js";

const themeIconVariants = cva(
  "rounded-md p-2 flex items-center justify-center",
  {
    variants: {
      variant: {
        outline: "border border-input",
        filled: "bg-primary text-secondary",
      },
      size: { sm: "h-7 w-7", md: "h-10 w-10", lg: "h-14 w-14" },
      rounded: { true: "rounded-full", false: "rounded-md" },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      rounded: false,
    },
  }
);

interface ThemeIconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof themeIconVariants> {}

const ThemeIcon = ({
  className,
  variant,
  size,
  children,
  ...props
}: ThemeIconProps) => {
  return (
    <div
      className={cn(themeIconVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

export { ThemeIcon, themeIconVariants };
