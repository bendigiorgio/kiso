"use client";
import * as React from "react";
import { cn } from "@/lib/utils.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.CollapsibleTrigger>
));

CollapsibleTrigger.displayName =
  CollapsiblePrimitive.CollapsibleTrigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(
      "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-down",
      className
    )}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.CollapsibleContent>
));

CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
