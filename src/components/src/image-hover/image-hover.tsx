"use client";
import { cn } from "@lib/utils";
import React from "react";

interface SpotlightProviderProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  popup: React.ReactNode;
}

const SpotlightProvider = React.forwardRef<
  HTMLDivElement,
  SpotlightProviderProps
>(({ className, popup, ...props }, ref) => {
  const providerRef = React.useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupPosition, setPopupPosition] = React.useState({
    x: 0,
    y: 0,
  });
  React.useImperativeHandle(ref, () => providerRef.current as HTMLDivElement); //? TS throws an error because it can't evaluate that they are equivalent \\ Can alse be solved with providerRef.current!
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (providerRef.current?.getBoundingClientRect()) {
      setPopupPosition({
        x: providerRef.current?.getBoundingClientRect().left - e.clientX,
        y: providerRef.current?.getBoundingClientRect().top - e.clientY,
      });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      className={cn("relative", className)}
      ref={providerRef}
      {...props}
    >
      {showPopup && (
        <div
          style={{
            top: popupPosition.y,
            left: popupPosition.x,
          }}
          className="absolute z-50"
        >
          {popup}
        </div>
      )}
    </div>
  );
});

SpotlightProvider.displayName = "SpotlightProvider";
