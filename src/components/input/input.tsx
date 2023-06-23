"use client";

import * as React from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { AspectRatio } from "../aspect-ratio/aspect-ratio.js";
import { Label } from "../label/label.js";
import { cn } from "../../lib/utils.js";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  conatinerClassname?: string;
  dropZone?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ conatinerClassname, className, type, dropZone, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <>
        {type === "file" && dropZone ? (
          <AspectRatio
            ratio={16 / 9}
            className={`${conatinerClassname} relative w-full bg-muted/20`}
          >
            <input
              id="file-upload"
              type={inputType}
              className={cn(
                "flex h-full w-full rounded-md border border-dashed border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              ref={ref}
              {...props}
            />
            <Label
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              htmlFor="file-upload"
            >
              Drop files here...
            </Label>
          </AspectRatio>
        ) : type === "password" ? (
          <div className={`relative w-full ${conatinerClassname}`}>
            <input
              type={inputType}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              ref={ref}
              {...props}
            />
            {type === "password" && (
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeIcon className="h-4 w-4 text-gray-500" />
                ) : (
                  <EyeOffIcon className="h-4 w-4 text-gray-500" />
                )}
              </button>
            )}
          </div>
        ) : (
          <input
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
