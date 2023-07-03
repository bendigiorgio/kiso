"use client";
import { cn } from "@lib/utils";
import React from "react";
import { Circle } from "./loader-variants/circle";
import { Dots } from "./loader-variants/dots";
import { Bars } from "./loader-variants/bars";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "circle" | "dots" | "bars";
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant = "circle", ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(className, "h-10 w-10 fill-current stroke-current")}
    >
      {variant === "circle" && <Circle className="stroke-current" />}
      {variant === "dots" && <Dots className="fill-current" />}
      {variant === "bars" && <Bars className="fill-current" />}
    </div>
  )
);

Loader.displayName = "Loader";

export { Loader };
