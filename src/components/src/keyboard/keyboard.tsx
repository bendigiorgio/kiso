import React from "react";
import { cn } from "@lib/utils";
const Kbd = React.forwardRef<
  React.ElementRef<"kbd">,
  React.ComponentPropsWithoutRef<"kbd">
>(({ children, className, ...props }, ref) => {
  return (
    <kbd
      ref={ref}
      className={cn(
        "items-center bg-background text-gray-100 inline-flex text-xs justify-center break-words leading-5 px-1.5 align-text-top rounded border border-border py-0.5 border-b-2",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
});

Kbd.displayName = "Kbd";

export { Kbd };
