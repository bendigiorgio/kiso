import React from "react";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

type DonutToolTipProps = {
  payload:
    | Payload<string | number | (string | number)[], string | number>[]
    | undefined;
  active: boolean | undefined;
  dataFormatter: (data: any) => string;
};

const DonutToolTip = ({
  payload,
  active,
  dataFormatter,
}: DonutToolTipProps) => {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  console.log(payload);
  return (
    <div
      ref={tooltipRef}
      className="flex flex-row bg-card text-card-foreground shadow-sm rounded-md border border-border py-2 px-4"
    >
      {payload && active && (
        <div className="flex flex-row space-x-1 items-center text-sm text-muted-foreground ">
          <div
            className="w-3 h-3 rounded-full relative"
            style={{ background: "white" }}
          >
            <div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ background: payload[0].payload.payload.color }}
            />
          </div>
          <span className="whitespace-nowrap" style={{ paddingLeft: 2 }}>
            {payload[0].name}
          </span>
          <span className="text-muted-foreground pl-3">
            {dataFormatter(payload[0].value)}
          </span>
        </div>
      )}
    </div>
  );
};

export default DonutToolTip;
