import Image from "next/image";
import React from "react";
interface RightDetailsProps {
  features: {
    name: string | React.ReactNode;
    description: string | React.ReactNode;
    image: string;
  }[];
}

const ImageDescriptionGrid = ({ features }: RightDetailsProps) => {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:py-32 ">
      <div className="relative isolate overflow-hidden bg-background shadow-2xl lg:flex lg:gap-x-20">
        <section className="flex flex-col px-8 py-24">
          <div className="max-w-xl">
            <h4 className="scroll-m-20 text-base font-medium tracking-tight text-foreground/80">
              Moods
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mt-4">
              Your favvorite times
            </h1>
            <p className="leading-7 mt-4 text-muted-foreground">
              Depending on the time of the day, you can choose from a variety of
              moods to suit your needs. You can fit into any situation, seize
              the day.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 sm:mt-16 gap-y-16 gap-x-6 mt-11 lg:gap-x-8">
            {features.map((feature, index) => (
              <div
                key={`${feature.name}-${index}`}
                className="text-sm flex flex-col min-h-[500px] sm:min-h-[300px]"
              >
                <div className="relative grow mb-6 min-h-[200px]">
                  <Image
                    fill
                    className="rounded-lg object-cover object-center"
                    src={feature.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col md:basis-5/12">
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export { ImageDescriptionGrid };
