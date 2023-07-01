import { Burger } from "@components/burger";
import { Button } from "@components/button";
import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background shadow-2xl lg:flex lg:gap-x-20">
          <div className="flex w-full flex-col pb-8">
            <nav className="flex flex-row items-center justify-between px-3 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center text-xs">
                <Button className="my-0 h-fit px-1 py-0" variant="link">
                  EN
                </Button>
                |
                <Button className="my-0 h-fit px-1 py-0" variant="link">
                  JP
                </Button>
              </div>
              <div className="font-medium">Maison Di Giorgio</div>
              <div className="flex items-center justify-center">
                <Burger className="h-3 w-5" />
              </div>
            </nav>
            <div className="grid h-64 w-full grid-cols-12 gap-3 md:gap-6">
              <div className="relative col-span-8 overflow-hidden rounded-lg rounded-l-none">
                <div
                  className="absolute right-0 top-0 z-10 h-24 w-60 -translate-y-4 translate-x-1/3 rotate-45 transform border-b-[12px] border-background bg-cover md:h-28 md:border-b-[24px]"
                  style={{
                    backgroundPosition: "top right",
                    backgroundImage:
                      "url(https://cdn.midjourney.com/cc7dd889-0b1a-4f4b-a10d-31ddc9e491c5/0_2_384_N.webp)",
                  }}
                />
                <Image
                  className="object-cover"
                  fill
                  src="https://cdn.midjourney.com/cc7dd889-0b1a-4f4b-a10d-31ddc9e491c5/0_2_384_N.webp"
                  alt=""
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-lg">
                <Image
                  className="object-cover"
                  fill
                  src="https://cdn.midjourney.com/cc7dd889-0b1a-4f4b-a10d-31ddc9e491c5/0_0_384_N.webp"
                  alt=""
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-lg rounded-r-none">
                <Image
                  className="object-cover"
                  fill
                  src="https://cdn.midjourney.com/9b1e7e73-888e-44d4-82a7-3b60c4896ded/0_2_384_N.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-8 flex w-full flex-row items-end px-3 sm:px-6 lg:px-8">
              <h1 className="flex-shrink-0 scroll-m-20 break-words text-3xl font-extrabold xs:text-4xl lg:text-6xl">
                Atelier d&apos;Artiste
              </h1>
              <h4 className="ml-4 flex flex-shrink-0 scroll-m-20 text-xs font-semibold uppercase leading-none tracking-tight">
                Benjamin <br />
                Di Giorgio
              </h4>
              <div className="ml-auto text-muted-foreground">
                <ArrowDownCircle className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ImageGrid };
