import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils.js";

const indicatorVariants = cva(
  "fixed bottom-1 left-1 z-50 flex items-center justify-center rounded-full bg-muted p-3 font-mono text-foreground",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export interface TailwindIndicatorProps
  extends VariantProps<typeof indicatorVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  additionalSizes?: string[];
  size: "xs" | "sm" | "md" | "lg";
}

const TailwindIndicator = ({
  additionalSizes,
  size,
  className,
}: TailwindIndicatorProps) => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className={cn(indicatorVariants({ size, className }))}>
      <div className="hidden xs:block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
      {additionalSizes?.map((size, index) => (
        <div key={`${size}-${index}`} className={`hidden ${size}:block`}>
          {size}
        </div>
      ))}
    </div>
  );
};

export { TailwindIndicator };
