import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/card/index.js";
import { cn } from "@/lib/utils.js";
import { Check } from "lucide-react";
import React from "react";

export type Plan = {
  name: React.ReactNode;
  price: number;
  interval?: string;
  features: string[];
  icon?: React.ReactNode;
  description?: React.ReactNode;
  featured?: boolean;
  featuredBadge?: string;
  link: string;
};

interface PriceSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  plans: Plan[];
}

const PriceSection = ({ plans, className }: PriceSectionProps) => {
  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-3 sm:mt-16 lg:max-w-6xl max-w-md mx-auto min-h-[24rem] gap-y-2",
          className
        )}
      >
        {plans.map((plan, index) => (
          <Card
            className="lg:[&:first-child]:mt-8 lg:[&:first-child]:border-r-0 lg:[&:first-child]:rounded-r-none lg:[&:last-child]:mt-8 lg:[&:last-child]:border-l-0 lg:[&:last-child]:rounded-l-none lg:[&:not(:first-child):not(:last-child)]:rounded-b-none flex flex-col"
            key={`${plan.name}-${{ index }}`}
          >
            <CardHeader className="font-semibold flex flex-row items-center justify-between text-lg">
              {plan.name}
              {plan.featured && plan.featuredBadge && (
                <Badge>{plan.featuredBadge}</Badge>
              )}
            </CardHeader>
            <CardContent className="">
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
              <h2 className="mt-6 scroll-m-20 pb-2 text-4xl font-semibold text-foreground tracking-tight transition-colors">
                $ {plan.price}{" "}
                {plan.interval && (
                  <span className="text-sm text-foreground/50">
                    / {plan.interval}
                  </span>
                )}
              </h2>
              <ul className="text-sm space-y-3 mt-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={`${plan.name}-${feature}-${index}`}
                    className="flex flex-row items-center space-x-3"
                  >
                    {plan.icon ? plan.icon : <Check className="h-5" />}
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex grow items-end">
              <Button
                variant={`${plan.featured ? "default" : "outline"}`}
                className={`w-full `}
              >
                Buy plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { PriceSection };
