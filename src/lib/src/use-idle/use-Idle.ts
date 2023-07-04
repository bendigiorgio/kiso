import { useState, useEffect, useRef } from "react";

type OptionsProps = {
  events: (keyof DocumentEventMap)[];
  initialState: boolean;
};

const DEFAULT_OPTIONS: OptionsProps = {
  events: ["keypress", "mousemove", "touchmove", "click", "scroll"],
  initialState: true,
};

export const useIdle = (
  timeout: number,
  { events, initialState }: OptionsProps = DEFAULT_OPTIONS
) => {
  const [idle, setIdle] = useState<boolean>(initialState);
  const timer = useRef<number>();

  useEffect(() => {
    const handleEvents = () => {
      setIdle(false);

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        setIdle(true);
      }, timeout);
    };

    events.forEach((event) => document.addEventListener(event, handleEvents));

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleEvents)
      );
    };
  }, [timeout, events]);

  return idle;
};
