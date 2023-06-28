import { cn } from "@/lib/utils.js";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  active: number;
  children:
    | React.ReactElement<typeof TimelineItem>[]
    | React.ReactElement<typeof TimelineItem>;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, active, ...props }, ref) => {
    const _children = React.Children.toArray(children);
    const mappedChildren = _children.map((child, index) => {
      if (React.isValidElement(child)) {
        if (child.type !== TimelineItem) {
          console.error(
            "Timeline component only accepts TimelineItem as children."
          );
        } else {
          return React.cloneElement(
            child as React.ReactComponentElement<typeof TimelineItem>,
            {
              active: index <= active,
              last: index === _children.length - 1,
            }
          );
        }
      } else {
        console.error("Child is not a valid React element.");
      }
    });
    return (
      <div ref={ref} className={cn("pl-10 space-y-6", className)} {...props}>
        {mappedChildren}
      </div>
    );
  }
);

Timeline.displayName = "Timeline";

interface TimelineItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineIconVariants>,
    VariantProps<typeof timelineBeforeVariants> {
  icon?: React.ReactNode;
}

const timelineIconVariants = cva(
  "rounded-full h-6 w-6 absolute top-0 -left-10 flex items-center justify-center",
  {
    variants: {
      active: {
        true: "bg-primary text-accent",
        false: "bg-muted-foreground/50 text-primary",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

const timelineBeforeVariants = cva(
  "before:border-l before:-left-7 before:box-border before:-translate-x-1/2 before:absolute before:top-6 before:h-full",
  {
    variants: {
      active: {
        true: "before:border-primary",
        false: "before:border-muted-foreground/50",
      },
      last: {
        true: "before:hidden",
        false: "before:block",
      },
    },
  }
);

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon, children, active, last, ...props }, ref) => {
    return (
      <div
        data-state={active ? "active" : "inactive"}
        ref={ref}
        className={cn(
          timelineBeforeVariants({ active, last }),
          "relative",
          className
        )}
        {...props}
      >
        <div className={cn(timelineIconVariants({ active }))}>{icon}</div>
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

const TimelineItemTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

const TimelineItemDescription = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-1 text-muted-foreground/90",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

const TimelineItemDetail = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("text-sm [&:not(:first-child)]:mt-1", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  Timeline,
  TimelineItem,
  TimelineItemTitle,
  TimelineItemDescription,
  TimelineItemDetail,
};
