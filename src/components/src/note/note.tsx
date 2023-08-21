import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@lib/utils";
import { Info } from "lucide-react";

interface NoteProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noteVariants> {
  icon?: React.ReactNode;
  hideIcon?: boolean;
  action?: React.ReactNode;
}

const noteVariants = cva(
  "flex flex-row justify-between px-4 py-2 border rounded-md items-center space-x-2 max-w-4xl",
  {
    variants: {
      variant: {
        default: "border-border bg-muted",
        secondary: "text-muted-foreground bg-secondary border-border",
        error: "text-error-foreground bg-error border-error",
        warning: "text-warning-foreground bg-warning border-warning",
        success: "text-success-foreground bg-success border-success",
      },
      filled: {
        true: "",
        false: "bg-card",
      },
    },
    defaultVariants: {
      variant: "default",
      filled: false,
    },
  }
);

const Note = React.forwardRef<HTMLDivElement, NoteProps>(
  (
    { className, variant, filled, icon, action, children, hideIcon, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(noteVariants({ variant, filled, className }))}
        {...props}
      >
        <div className="flex flex-row space-x-2 items-center">
          {!hideIcon && (icon ?? <Info className="w-5 h-5" />)}{" "}
          <div>{children}</div>
        </div>
        {action}
      </div>
    );
  }
);

Note.displayName = "Note";

export { Note, noteVariants };
