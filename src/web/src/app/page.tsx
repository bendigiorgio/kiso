"use client";
import Install from "@/components/Install";
import HomeGraphic from "components/HomeGraphic";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen">
        <div className="flex flex-col justify-center items-center pt-[21rem]">
          <div className="max-w-2xl mx-auto flex flex-col text-center">
            <div className="text-5xl">基礎</div>
            <h1 className="text-9xl">kiso</h1>
            <p className="text-muted-foreground text-lg sm:text-xl font-medium">
              A modern, customizable, and highly flexible component library for
              React applications built with reusability and the end user in
              mind.
            </p>
          </div>
          <HomeGraphic className="absolute left-0 top-[527px] -z-10 w-screen min-w-[1440px]" />
        </div>
      </section>
      <section className="pb-60">
        <ol className="relative">
          <Install />
        </ol>
      </section>
    </main>
  );
}
