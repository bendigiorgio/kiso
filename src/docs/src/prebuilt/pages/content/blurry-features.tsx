import { Burger } from "@components/burger";
import { Button } from "@components/button";
import { Separator } from "@components/separator";
import React from "react";

const Features = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate flex flex-col overflow-hidden bg-background px-6 pb-24 pt-12 shadow-2xl sm:px-12 lg:flex lg:gap-x-20">
          <div className="absolute left-12 top-32 h-[12vw] w-[12vw] rounded-full bg-rose-300" />
          <nav className="z-20 flex flex-row items-center justify-between px-3 py-4 sm:px-6 lg:px-8">
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
          <div className="flex h-full w-full flex-col items-center rounded-lg bg-muted/50 bg-opacity-10 pt-12 text-center backdrop-blur-xl backdrop-filter">
            <h1 className="scroll-m-20 px-4 text-6xl uppercase tracking-tight lg:text-8xl">
              Let&apos;s Talk
            </h1>
            <div className="mt-2 max-w-sm px-4 text-sm">
              <p className="font-medium text-muted-foreground/70">
                We&apos;re happy to answer any questions you may have.
              </p>

              <p className="font-medium">Schedule a call with us.</p>
            </div>
            <div className="relative py-24 ">
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground opacity-10 blur-md filter" />
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background hover:cursor-pointer" />
              <div className="absolute left-1/2 top-1/2 h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 duration-300 hover:scale-105 hover:cursor-pointer" />
            </div>
            <Separator />
            <div className="mx-auto flex h-full flex-row space-x-4 py-6 text-xs uppercase">
              <a className="hover:cursor-pointer ">HOME</a>
              <a className="text-muted-foreground hover:cursor-pointer hover:text-foreground">
                COMPONENTS
              </a>
              <a className="text-muted-foreground hover:cursor-pointer hover:text-foreground">
                UTILS
              </a>
              <a className="text-muted-foreground hover:cursor-pointer hover:text-foreground">
                PREBUILT
              </a>
            </div>
          </div>
          <div className="flex h-full flex-row justify-between space-x-4 py-6 text-xs uppercase">
            <span className="hover:cursor-pointer hover:text-muted-foreground">
              +81 80 9434 7288
            </span>
            <a className="hover:cursor-pointer hover:text-muted-foreground">
              maisondigiorgio@gmail.com
            </a>
            <span className="hover:cursor-pointer hover:text-muted-foreground">
              © 2021 Maison Di Giorgio
            </span>
            <div className="flex items-center justify-center">
              <Button
                className="my-0 h-fit px-1 py-0 hover:text-muted-foreground"
                variant="link"
              >
                LINKEDIN
              </Button>
              |
              <Button
                className="my-0 h-fit px-1 py-0 hover:text-muted-foreground"
                variant="link"
              >
                GITHUB
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
