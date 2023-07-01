import { Card, CardContent, CardHeader } from "@components/card";
import { cn } from "@lib/utils";
import React from "react";

interface FeatureCardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: React.ReactNode;
  color?: string;
  gradient?: string[];
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, className, color, gradient, ...props }, ref) => {
    const backgroundStyle = gradient
      ? { backgroundImage: `linear-gradient(to right, ${gradient.join(", ")})` }
      : { backgroundColor: color };
    return (
      <Card ref={ref} {...props} className={cn("w-full max-w-xs", className)}>
        <CardHeader className="space-y-3 pb-1">
          {icon && (
            <div style={{ color: color }} className="mb-2 ml-1 h-10 w-10">
              {icon}
            </div>
          )}
          <h4 className="text-lg font-medium">{title}</h4>
          <div
            style={backgroundStyle}
            className={`h-0.5 w-11 rounded-full bg-accent-foreground`}
          />
        </CardHeader>
        <CardContent className="mt-2 text-sm text-muted-foreground">
          {description}
        </CardContent>
      </Card>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
