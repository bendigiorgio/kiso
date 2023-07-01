import { Button } from "@components/button";
import Image from "next/image";
import React from "react";

const PanelCta = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[54rem] w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#svg-purple-gradient)"
              fillOpacity="0.6"
            />
            <defs>
              <radialGradient id="svg-purple-gradient">
                <stop stopColor="#A54C97" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight transition-colors first:mt-0 sm:text-4xl">
              Elevate Your Design with Maison Components Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a>
                <Button>Get started</Button>
              </a>
              <a>
                <Button variant="link">Learn more &rarr;</Button>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-foreground/5 ring-1 ring-foreground/10"
              src="https://cdn.midjourney.com/9b1e7e73-888e-44d4-82a7-3b60c4896ded/0_2.png"
              alt="...."
              width={912}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { PanelCta };
