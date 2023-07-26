import React from "react";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

export interface ChartTooltipProps {
  payload:
    | Payload<string | number | (string | number)[], string | number>[]
    | undefined;
  label: string;
}

export const ChartTooltip = ({ payload, label }: ChartTooltipProps) => {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  return (
    <div
      ref={tooltipRef}
      className="flex flex-col bg-card text-card-foreground shadow-sm rounded-md border border-border"
    >
      <div className="py-2 px-4">{label}</div>
      <hr
        style={{
          borderColor: "var(--muted-foreground)",
          opacity: 0.2,
          paddingTop: 1,
          paddingBottom: 1,
        }}
        className="w-full h-1"
      />
      <div className="px-4 py-2">
        {payload?.map((item, index) => (
          <div
            className="flex flex-row space-x-1 items-center text-sm text-muted-foreground "
            key={`${item.value}-${index}`}
          >
            <div
              className="w-3 h-3 rounded-full relative"
              style={{ background: "white" }}
            >
              <div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{ background: item.color }}
              />
            </div>
            <span style={{ paddingLeft: 2 }}>{item.name}</span>
            <span className="text-muted-foreground pl-3">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
