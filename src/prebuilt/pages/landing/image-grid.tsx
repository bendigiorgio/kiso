import { Burger } from "@/components/burger";
import { Button } from "@/components/button";
import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background shadow-2xl lg:flex lg:gap-x-20">
          <div className="flex flex-col w-full pb-8">
            <nav className="py-4 flex flex-row justify-between items-center px-3 sm:px-6 lg:px-8">
              <div className="text-xs flex items-center justify-center">
                <Button className="py-0 my-0 h-fit px-1" variant="link">
                  EN
                </Button>
                |
                <Button className="py-0 my-0 h-fit px-1" variant="link">
                  JP
                </Button>
              </div>
              <div className="font-medium">Maison Di Giorgio</div>
              <div className="flex items-center justify-center">
                <Burger className="h-3 w-5" />
              </div>
            </nav>
            <div className="grid grid-cols-12 gap-3 md:gap-6 h-64 w-full">
              <div className="col-span-8 relative rounded-lg overflow-hidden rounded-l-none">
                <div
                  className="absolute top-0 translate-x-1/3 right-0 w-60 h-24 md:h-28 border-background border-b-[12px] bg-cover md:border-b-[24px] rotate-45 transform -translate-y-4 z-10"
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
              <div className="col-span-2 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover"
                  fill
                  src="https://cdn.midjourney.com/cc7dd889-0b1a-4f4b-a10d-31ddc9e491c5/0_0_384_N.webp"
                  alt=""
                />
              </div>
              <div className="col-span-2 relative rounded-lg overflow-hidden rounded-r-none">
                <Image
                  className="object-cover"
                  fill
                  src="https://cdn.midjourney.com/9b1e7e73-888e-44d4-82a7-3b60c4896ded/0_2_384_N.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-row mt-8 items-end px-3 sm:px-6 lg:px-8 w-full">
              <h1 className="scroll-m-20 text-3xl xs:text-4xl font-extrabold lg:text-6xl break-words flex-shrink-0">
                Atelier d&apos;Artiste
              </h1>
              <h4 className="scroll-m-20 text-xs font-semibold tracking-tight ml-4 leading-none flex flex-shrink-0 uppercase">
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
