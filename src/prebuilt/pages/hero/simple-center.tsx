import { Button } from "@/components/button/index.js";
import { Separator } from "@/components/separator/index.js";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background px-2 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto flex flex-col max-w-2xl text-center space-y-2 py-32 sm:py-48 lg:py-56">
            <a className="hover:cursor-pointer relative w-fit self-center group sm:mb-2 mb-4">
              <div className="absolute animate-pulse group-hover:opacity-95 group-hover:-inset-1 transition -inset-0.5 rounded-md bg-gradient-to-r from-pink-600 to-violet-600 blur-sm opacity-75" />
              <Button
                variant="outline"
                className="w-fit py-1.5 relative bg-background hover:bg-background md:px-3 px-2 sm:text-sm whitespace-nowrap text-xs"
              >
                Announcing our new prebuilt components.
                <span className="ml-1 xs:block hidden">
                  <Separator className="mr-1" orientation="vertical" />
                  <span className="text-violet-600 font-medium hover:underline">
                    Read more &rarr;
                  </span>
                </span>
              </Button>
            </a>
            <div className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Supercharge your web applications
            </div>
            <p className="leading-7 pt-6 [&:not(:first-child)]:mt-6 text-foreground/80 text-lg">
              Elevate your creations effortlessly with Maison Components. Power
              your projects with our versatile, top-tier components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
