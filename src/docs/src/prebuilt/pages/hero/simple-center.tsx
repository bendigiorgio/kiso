import { Button } from "@components/button";
import { Separator } from "@components/separator";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background px-2 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto flex max-w-2xl flex-col space-y-2 py-32 text-center sm:py-48 lg:py-56">
            <a className="group relative mb-4 w-fit self-center hover:cursor-pointer sm:mb-2">
              <div className="absolute -inset-0.5 animate-pulse rounded-md bg-gradient-to-r from-pink-600 to-violet-600 opacity-75 blur-sm transition group-hover:-inset-1 group-hover:opacity-95" />
              <Button
                variant="outline"
                className="relative w-fit whitespace-nowrap bg-background px-2 py-1.5 text-xs hover:bg-background sm:text-sm md:px-3"
              >
                Announcing our new prebuilt components.
                <span className="ml-1 hidden xs:block">
                  <Separator className="mr-1" orientation="vertical" />
                  <span className="font-medium text-violet-600 hover:underline">
                    Read more &rarr;
                  </span>
                </span>
              </Button>
            </a>
            <div className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Supercharge your web applications
            </div>
            <p className="pt-6 text-lg leading-7 text-foreground/80 [&:not(:first-child)]:mt-6">
              Elevate your creations effortlessly with Maison Components. Power
              your projects with our versatile, top-tier components.
            </p>
            <div className="pt-4">
              <Button className="h-fit bg-violet-600 hover:bg-violet-500 shadow-sm text-white">
                Get started
              </Button>
              <Button variant="link">Learn more &rarr;</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
