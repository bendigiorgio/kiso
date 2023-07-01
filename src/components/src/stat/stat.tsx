import { cn } from "@lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const Stat = React.forwardRef<
  HTMLDListElement,
  React.HTMLAttributes<HTMLDListElement>
>(({ children, className, ...props }, ref) => {
  return (
    <dl ref={ref} className={cn("space-y-1", className)} {...props}>
      {children}
    </dl>
  );
});

Stat.displayName = "Stat";

const StatLabel = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <dt
      ref={ref}
      className={cn("text-sm font-medium text-muted-foreground", className)}
      {...props}
    />
  );
});

StatLabel.displayName = "StatLabel";

const StatNumber = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <dd
      ref={ref}
      className={cn("align-baseline text-2xl font-semibold", className)}
      {...props}
    />
  );
});
StatNumber.displayName = "StatNumber";

const StatDescription = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <dd
      ref={ref}
      className={cn(
        "flex flex-row text-sm text-muted-foreground opacity-80",
        className
      )}
      {...props}
    />
  );
});
StatDescription.displayName = "StatDescription";

interface StatArrowProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof statArrowVariants> {}

const statArrowVariants = cva("h-4 w-4 transition-transform transform mr-1", {
  variants: {
    change: {
      positive: "text-green-500",
      negative: "text-red-500 rotate-180",
    },
  },
  defaultVariants: {
    change: "positive",
  },
});

const StatArrow = React.forwardRef<SVGSVGElement, StatArrowProps>(
  ({ className, change, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
        className={cn(statArrowVariants({ change, className }))}
        {...props}
      >
        <path
          fill="currentColor"
          d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
        ></path>
      </svg>
    );
  }
);
StatArrow.displayName = "StatArrow";

export { Stat, StatLabel, StatNumber, StatDescription, StatArrow };
