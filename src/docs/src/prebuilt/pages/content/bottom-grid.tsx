import React from "react";

interface BottomGridProps {
  features: {
    name: string | React.ReactNode;
    description: string | React.ReactNode;
    icon: React.ReactNode;
  }[];
}

const BottomGrid = ({ features }: BottomGridProps) => {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-background shadow-2xl lg:flex lg:gap-x-20">
        <section className="flex flex-col px-8 py-24">
          <div className="flex flex-col max-w-lg">
            <h4 className="scroll-m-20 text-base font-semibold tracking-tight text-muted-foreground">
              Get your design on
            </h4>
            <h2 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight transition-colors sm:text-3xl max-w-md mt-1.5">
              Elevate Your Design with Kiso Today
            </h2>
            <p className="mt-3 leading-8 text-foreground/80">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
          </div>
          <dl className="grid grid-cols-1 max-w-2xl mx-auto mt-16 sm:grid-cols-2 gap-8 gap-x-16 lg:max-w-none lg:mx-0 text-sm">
            {features.map((feature, index) => (
              <div
                key={`${feature.name}-${index}`}
                className="relative pl-9 text-foreground/80"
              >
                <dt className="font-semibold text-foreground inline">
                  <div className="absolute left-2 top-0.5 w-4 h-4 text-muted-foreground">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="inline"> {feature.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
};

export { BottomGrid };
