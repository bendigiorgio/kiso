"use client";
import { cn } from "@lib/utils";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";

import * as React from "react";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground hover:bg-muted hover:text-muted-foreground",
        filled:
          "data-[state=on]:bg-toggle data-[state=on]:text-accent-foreground hover:bg-accent hover:text-muted-foreground",
        inverse:
          "bg-accent data-[state=on]:bg-secondary data-[state=on]:text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const toggleContainerVariants = cva(
  "inline-flex space-x-px rounded py-6 justify-center items-center",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-secondary",
        inverse: "bg-toggle",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ToggleGroupContextValue = {
  variant?: VariantProps<typeof toggleVariants>["variant"];
  size?: VariantProps<typeof toggleVariants>["size"];
  type?: "single" | "multiple";
};
const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, type = "single", ...props }, ref) => (
  <ToggleGroupContext.Provider value={{ variant, size }}>
    {/* @ts-expect-error */}
    <ToggleGroupPrimitive.Root
      type={type}
      ref={ref}
      className={cn(toggleContainerVariants({ variant, size, className }))}
      {...props}
    />
  </ToggleGroupContext.Provider>
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const variant = context.variant;
  const size = context.size;
  return (
    <ToggleGroupPrimitive.Item
      {...props}
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
    />
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
