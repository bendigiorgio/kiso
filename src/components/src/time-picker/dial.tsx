import React, { ChangeEventHandler, useEffect } from "react";
import { cn } from "@lib/utils";

interface DialProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "hour" | "minute" | "second";
  initialValue: `${number}:${number}` | `${number}:${number}:${number}`;
  onChange: ChangeEventHandler<HTMLInputElement>;
  radius?: number;
  minuteInterval?: number;
}

const Dial = React.forwardRef<HTMLInputElement, DialProps>(
  (
    {
      className,
      type,
      initialValue = "12:00",
      onChange,
      radius = 7,
      minuteInterval = 5,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] =
      React.useState<DialProps["initialValue"]>(initialValue);
    const [mouseDown, setMouseDown] = React.useState(false);

    const parseVal = (value: string) => {
      const [hours, minutes, seconds] = value.split(":");
      //change to 12 hour format
      return {
        hours: String(Number(hours) % 12),
        minutes,
        seconds,
      };
    };
    const [time, setTime] = React.useState<{
      hours: string;
      minutes: string;
      seconds: string;
    }>(parseVal(currentValue));

    const handleViewChange = (newValue: number) => {
      if (!mouseDown) {
        return;
      }
      if (type === "hour") {
        setTime((prev) => ({ ...prev, hours: String(newValue) }));
      }
      if (type === "minute") {
        setTime((prev) => ({ ...prev, minutes: String(newValue) }));
      }
      if (type === "second") {
        setTime((prev) => ({ ...prev, seconds: String(newValue) }));
      }
    };

    const handleChange = (newValue: number) => {
      //convert to xx:xx:xx format
      let convertedValue: DialProps["initialValue"];
      if (type === "hour") {
        convertedValue = `${newValue === 0 ? 12 : newValue}:${time.minutes}:${
          time.seconds ?? "00"
        }` as DialProps["initialValue"];
      }
      if (type === "minute") {
        convertedValue = `${time.hours}:${newValue}:${
          time.seconds ?? "00"
        }` as DialProps["initialValue"];
      }
      if (type === "second") {
        convertedValue =
          `${time.hours}:${time.minutes}:${newValue}` as DialProps["initialValue"];
      }

      // @ts-expect-error
      setCurrentValue(convertedValue);
      onChange({
        target: {
          // @ts-expect-error
          value: convertedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    };

    useEffect(() => {
      setTime(parseVal(currentValue));
    }, [currentValue]);

    useEffect(() => {
      window.addEventListener("mousedown", () => {
        setMouseDown(true);
      });
      window.addEventListener("mouseup", () => {
        setMouseDown(false);
      });
      return () => {
        window.removeEventListener("mousedown", () => {
          setMouseDown(true);
        });
        window.removeEventListener("mouseup", () => {
          setMouseDown(false);
        });
      };
    }, [type]);

    const handleText = (index: number) => {
      if (type !== "hour") {
        return index;
      }
      if (index === 0) {
        return "12";
      }
      return index;
    };
    const match = (index: number) => {
      if (type === "hour") {
        if (index === 0) {
          return time.hours === "12" || time.hours === "0";
        }
        return index === Number(time.hours);
      }
      if (type === "minute") {
        return index === Number(time.minutes);
      }
      if (type === "second") {
        return index === Number(time.seconds);
      }
    };

    const interval = type === "hour" ? 12 : 60;

    const handleRotate = () => {
      if (type === "hour") {
        return calculateAngle(Number(time.hours), interval);
      }
      if (type === "minute") {
        return calculateAngle(Number(time.minutes), interval);
      }
      if (type === "second") {
        return calculateAngle(Number(time.seconds), interval);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-full relative select-none ", className)}
        style={{ width: `${radius * 2}rem`, height: `${radius * 2}rem` }}
        {...props}
      >
        {Array.from({ length: type === "hour" ? 12 : 60 }).map((_, index) => {
          const { x, y } = positionNumber(index, interval, radius);
          return (
            <div
              className={`absolute w-4 h-4 text-center rounded-full
              ${type !== "hour" ? index % minuteInterval === 0 && "z-30" : ""}
              ${match(index) && "text-secondary"}`}
              key={index}
              style={{
                left: `calc(50% + ${x}rem)`,
                top: `calc(50% + ${y}rem)`,
                transform: `translate(-50%, -50%)`,
              }}
              onMouseUp={() => handleChange(index)}
              onMouseEnter={() => {
                handleViewChange(index);
              }}
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                {type !== "hour"
                  ? index % minuteInterval === 0 && handleText(index)
                  : handleText(index)}
              </span>
              <div
                className={`w-6 h-6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none ${
                  match(index) && "bg-foreground "
                }`}
              />
              <div
                className={`w-1 h-1 bg-accent rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none ${
                  type !== "hour"
                    ? index % minuteInterval === 0
                      ? "hidden"
                      : !match(index) && "hidden"
                    : "hidden"
                }`}
              />
            </div>
          );
        })}
        <div className="w-2 h-2 bg-foreground rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" />
        <div
          className={`w-0.5 bg-foreground absolute left-1/2 -translate-x-1/2 -z-50 origin-bottom-left pointer-events-none`}
          style={{ height: `${radius}rem`, rotate: `${handleRotate()}deg` }}
        />
      </div>
    );
  }
);

Dial.displayName = "Dial";
export { Dial };

const positionNumber = (index: number, interval: number, radius: number) => {
  const angle = calculateAngle(index, interval);
  const elementSize = radius * 2; // Set element size as 2 times the radius
  const x =
    Math.sin(angle * (Math.PI / 180)) * radius - elementSize / 2 + radius;
  const y =
    Math.cos(angle * (Math.PI / 180)) * -radius - elementSize / 2 + radius;
  return { x, y };
};

const calculateAngle = (index: number, interval: number) => {
  return (index * 360) / interval;
};
