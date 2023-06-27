import { cn } from "@/lib/utils.js";
import React, { useEffect } from "react";

interface BurgerProps extends React.HTMLAttributes<HTMLButtonElement> {
  open?: boolean; //use if you want to control state externally
}

const Burger = React.forwardRef<HTMLButtonElement, BurgerProps>(
  ({ open, className, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const sizeRef = React.useRef<HTMLDivElement>(null);
    const checkState = open !== undefined ? open : internalOpen;
    const [translate, setTranslate] = React.useState<string | null>(null);

    const calculateTranslate = () => {
      if (sizeRef.current) {
        const size = sizeRef.current.getBoundingClientRect();
        const translate = `${Math.trunc(size.height / 3)}px`;
        return translate;
      }
      return null;
    };

    useEffect(() => {
      setTranslate(calculateTranslate());
    }, []);

    return (
      <button
        onClick={() => {
          setInternalOpen(!internalOpen);
        }}
        className={cn("relative w-6 h-6 hover:cursor-pointer", className)}
        ref={ref}
        {...props}
      >
        <span
          style={
            !checkState
              ? translate
                ? { transform: `translateY(-${translate})` }
                : {}
              : {}
          }
          aria-hidden="true"
          className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
            checkState ? "rotate-45" : `-translate-y-[6px]`
          }`}
        />
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
            checkState ? "opacity-0" : ""
          }`}
        />
        <span
          style={
            !checkState
              ? translate
                ? { transform: `translateY(${translate})` }
                : {}
              : {}
          }
          aria-hidden="true"
          className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
            checkState ? "-rotate-45" : `translate-y-[6px]`
          }`}
        />
        <div ref={sizeRef} className="w-full h-full absolute" />
      </button>
    );
  }
);

Burger.displayName = "Burger";

export { Burger };
