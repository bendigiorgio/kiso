import { Burger } from "@components/burger";
import { Button } from "@components/button";
import { TailwindIndicator } from "@components/tailwind-indicator/tailwind-indicator";
import Image from "next/image";
import React from "react";

const ImagesRight = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-full">
        <div className="relative flex flex-col isolate overflow-hidden bg-background shadow-2xl lg:flex lg:gap-x-20">
          <svg
            className="stroke-muted-foreground w-full h-[64rem] -z-10 top-1/2 -translate-y-1/2 absolute inset-0 opacity-[0.15]"
            aria-hidden="true"
            style={{
              maskImage:
                "radial-gradient(32rem 32rem at center,white,transparent)",
              WebkitMaskImage:
                "radial-gradient(32rem 32rem at center,white,transparent)",
            }}
          >
            <defs>
              <pattern
                id="gridPattern"
                width="200"
                height="200"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg className="fill-accent">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              y="-1"
              fill="url(#gridPattern)"
            />
          </svg>
          <nav className="z-20 grid items-center grid-cols-3 px-3 py-4 sm:px-6 lg:px-8 w-full self-start">
            <div className="flex justify-self-start items-center text-xs">
              <Button className="my-0 h-fit px-1 py-0" variant="link">
                EN
              </Button>
              |
              <Button className="my-0 h-fit px-1 py-0" variant="link">
                JP
              </Button>
            </div>
            <div className="font-medium justify-self-center text-center">
              Maison Di Giorgio
            </div>
            <div className="flex items-center justify-self-end justify-center">
              <Burger className="h-3 w-5" />
            </div>
          </nav>
          <div className="overflow-hidden h-full flex md:flex-row flex-col md:gap-12 gap-4 py-12 lg:py-0">
            <div className="mx-auto max-w-lg text-left lg:mx-0 shrink-0 md:pt-64 lg:pl-8 md:pl-6 pl-3">
              <h2 className="scroll-m-20 font-bold tracking-tight transition-colors first:mt-0 text-5xl max-w-md">
                Elevate Your Design, Kiso
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-6 flex items-center gap-x-6 justify-start">
                <a>
                  <Button className="h-fit py-1.5 px-2.5 text-sm">
                    Get started
                  </Button>
                </a>
                <a>
                  <Button className="text-sm" variant="link">
                    Learn more &rarr;
                  </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 h-full flex-none shrink-0 w-[600px] min-[900px]:ml-0 -ml-48 xs:ml-auto xs:mr-auto md:mr-0 md:-ml-36 min-[900px]:mt-0 md:mt-24">
              <div className="h-full order-[0] min-[900px]:order-last lg:order-[0] w-44">
                <div className="relative aspect-[2/3] mt-80">
                  <Image
                    className="object-cover rounded-xl shadow-lg"
                    src="https://cdn.midjourney.com/89787b27-a11e-44cf-b7f1-ef55b4d28006/0_3.png"
                    alt=""
                    fill
                  />
                </div>
              </div>
              <div className="h-full space-y-6 mt-32 w-44 xs:order-1 order-last">
                <div className="relative aspect-[2/3]">
                  <Image
                    className="object-cover rounded-xl shadow-lg"
                    src="https://cdn.midjourney.com/89787b27-a11e-44cf-b7f1-ef55b4d28006/0_2.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="relative aspect-[2/3]">
                  <Image
                    className="object-cover rounded-xl shadow-lg"
                    src="https://cdn.midjourney.com/89787b27-a11e-44cf-b7f1-ef55b4d28006/0_0.png"
                    alt=""
                    fill
                  />
                </div>
              </div>
              <div className="h-full space-y-6 mb-32 w-44 xs:order-2">
                <div className="relative aspect-[2/3]">
                  <Image
                    className="object-cover rounded-xl shadow-lg"
                    src="https://cdn.midjourney.com/210595e2-3504-4820-99b7-b430893f4013/0_3.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="relative aspect-[2/3]">
                  <Image
                    className="object-cover rounded-xl shadow-lg"
                    src="https://cdn.midjourney.com/d04e1165-c3a9-4983-8513-e25e2fdba946/0_0_384_N.webp"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TailwindIndicator />
    </section>
  );
};

export { ImagesRight };
