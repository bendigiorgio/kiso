import { ThemeIcon } from "@components/theme-icon";
import { Beaker, Flame, Server, StickyNote } from "lucide-react";
import React from "react";

const Features = [
  {
    title: "Free and Open Source",
    description:
      "Maison Components is free and open source. It's licensed under the MIT license.",
    icon: <Flame />,
  },
  {
    title: "Constant Updates",
    description:
      "We're always updating Maison Components with new components and features.",
    icon: <Beaker />,
  },
  {
    title: "Easy to Use",
    description:
      "It's built with React and Tailwind CSS, so you can easily customize it to your liking.",
    icon: <StickyNote />,
  },
  {
    title: "Made for Developers",
    description:
      "Maison Components is made for developers. Extend with all the functionality you require.",
    icon: <Server />,
  },
];

const RightGrid = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-background px-6 pt-16 shadow-2xl sm:px-8 md:pt-24 lg:flex lg:gap-x-20 lg:px-8 lg:pt-0">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className=" flex  max-w-xs flex-col lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight transition-colors sm:text-3xl ">
                Elevate Your Design with Maison Components Today
              </h2>
              <p className="mt-6 leading-8 text-foreground/80">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
            </div>
            <div className="grid gap-8 place-self-center pb-12 md:grid-cols-2 lg:pb-0">
              {Features.map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="flex max-w-xs flex-col"
                >
                  <ThemeIcon>{feature.icon}</ThemeIcon>
                  <h4 className="mt-2 scroll-m-20 text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-foreground/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RightGrid };
