import Image from "next/image";
import React from "react";

interface RightDetailsProps {
  features: {
    name: string | React.ReactNode;
    description: string | React.ReactNode;
  }[];
}

const RightDetails = ({ features }: RightDetailsProps) => {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:py-32">
      <div className="relative isolate overflow-hidden bg-background shadow-2xl lg:flex lg:gap-x-20 ">
        <section className="lg:flex-row flex flex-col w-full h-full min-h-[50vh]">
          <div className="flex relative grow max-h-80 lg:max-h-none shrink-0 sm:min-h-[350px] min-h-[300px]">
            <Image
              className="object-cover object-center"
              fill
              src="https://cdn.midjourney.com/9c17f5be-c3e4-4e04-9827-d7fca527d344/0_0.png"
              alt=""
            />
          </div>
          <div className="basis-7/12 flex flex-col px-16 lg:pl-24 py-32 lg:pt-32 pt-12 lg:mx-0 mx-auto max-w-3xl">
            <h4 className="scroll-m-20 text-base font-medium tracking-tight text-foreground/80">
              The Egg Sun
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mt-4">
              Light up your Day
            </h1>
            <p className="leading-7 mt-4 text-muted-foreground">
              Sunny side up or over easy? It doesn&apos;t matter. The Egg Sun is
              the perfect companion for your morning breakfast.
            </p>
            <dl className="grid sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-8 mt-10">
              {features.map((feature, index) => (
                <div className="text-sm" key={`${feature.name}-${index}`}>
                  <dt className="font-medium">{feature.name}</dt>
                  <dd className="text-muted-foreground mt-2">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
};

export { RightDetails };
