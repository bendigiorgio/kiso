import { Avatar, AvatarImage } from "@/components/avatar/index.js";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/card/index.js";
import { cn } from "@/lib/utils.js";
import React from "react";

type TestimonalProps = React.ComponentProps<typeof Card> & {
  quote: string | React.ReactNode;
  person: {
    name: string | React.ReactNode;
    image?: string;
  };
};

const Testimonial = ({
  quote,
  person,
  className,
  ...props
}: TestimonalProps) => {
  return (
    <Card className={cn("max-w-xs", className)} {...props}>
      <CardHeader className="flex flex-col w-full items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33 25"
          aria-label="Quote"
          role="img"
          className="text-foreground h-10"
        >
          <path
            fill="currentColor"
            d="M0.500189 24.8163H12.1005V17.1574C12.0676 11.7727 13.5835 7.72584 15.9563 3.81275L9.10158 0C4.75145 3.64552 0.467233 10.8362 0.500189 17.1908V24.8163ZM17.0439 24.8163H28.6442V17.1574C28.6112 11.7727 30.1272 7.72584 32.5 3.81275L25.6453 0C21.2951 3.64552 17.0109 10.8362 17.0439 17.1908V24.8163Z"
          ></path>
        </svg>
      </CardHeader>
      <CardContent className="text-muted-foreground leading-relaxed">
        {quote}
      </CardContent>
      <CardFooter className="flex flex-row space-x-4">
        {person.image && (
          <Avatar>
            <AvatarImage
              alt={
                typeof person.name === "string"
                  ? person.name
                  : "profile picture"
              }
              src={person.image}
            />
          </Avatar>
        )}
        <div className="text-accent-foreground">{person.name}</div>
      </CardFooter>
    </Card>
  );
};

export { Testimonial };
