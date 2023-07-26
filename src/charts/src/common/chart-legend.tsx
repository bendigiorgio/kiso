import React from "react";
import { Payload } from "recharts/types/component/DefaultLegendContent";

export interface ChartLegendProps {
  payload: Payload[] | undefined;
}

export const ChartLegend = ({ payload }: ChartLegendProps) => {
  const legendRef = React.useRef<HTMLDivElement>(null);
  return (
    <div
      ref={legendRef}
      style={{ justifyContent: "end" }}
      className="flex items-center justify-end w-full "
    >
      {payload && (
        <ol className="flex flex-wrap overflow-hidden truncate">
          {payload.map((category, id) => (
            <li
              style={{ marginRight: "1rem" }}
              className="text-muted-foreground/60 flex items-center flex-row space-x-1"
              key={`${category}-${id}`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: category.color }}
              />
              <span className="text-muted-foreground">{category.value}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
