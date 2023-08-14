import { cn } from "@lib/utils";
import React, { useState, useRef } from "react";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement[] | React.ReactElement;
  spotlightColor?: string; //? Note if your tailwindcss is not set to JIT mode you will need to manually set the focus:border-[color] class in your component's styles
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SpotlightChildProps extends React.HTMLAttributes<HTMLElement> {}

export const SpotlightBorder = React.forwardRef<
  HTMLDivElement,
  React.PropsWithoutRef<SpotlightProps>
>(({ children, className, spotlightColor = "rgb(228, 115, 32)", ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{
    [key: number]: { x: number; y: number };
  }>({});
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;

    const newPosition = { ...position };

    React.Children.forEach(children, (child, index) => {
      const childElement = containerRef.current!.children[index] as HTMLElement;
      const rect = childElement.getBoundingClientRect();
      newPosition[index] = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    });

    setPosition(newPosition);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative ", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<SpotlightChildProps>(child)) {
          return (
            <div
              key={index}
              className="relative inline-block rounded-[inherit]"
            >
              {React.cloneElement(child, {
                className: cn(
                  `focus:border-[${spotlightColor}]`,
                  child.props.className
                ),
              })}
              <div
                style={{
                  border: ` 1px solid ${spotlightColor}`,
                  opacity,
                  WebkitMaskImage: `radial-gradient(30% 30px at ${
                    position[index]?.x || 0
                  }px ${position[index]?.y || 0}px, black 45%, transparent)`,
                }}
                aria-hidden="true"
                className="border-[rgb(228 115 32)] w-full h-full rounded-[inherit] pointer-events-none absolute left-0 top-0 z-10 cursor-default border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
              />
            </div>
          );
        }
        return child;
      })}
    </div>
  );
});

SpotlightBorder.displayName = "SpotlightBorder";
