"use client";
import React from "react";
import { Legend, PieProps } from "recharts";
import { cn } from "@lib/utils";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegend } from "../common/chart-legend";
import { ChartProps } from "../common/baseprops";
import DonutToolTip from "./donut-tooltip";

export interface DonutChartProps extends PieProps, ChartProps {
  variant: "donut" | "pie";
  showLabel?: boolean;
  category?: string;
  labelVariant?: "sum" | "category";
}

export const getLabel = (data: any[], category: string, variant: string) => {
  if (variant === "category") {
    return category;
  } else if (variant === "sum") {
    if (typeof data[0][category] === "number") {
      return data
        .reduce((acc: number, curr) => acc + curr[category], 0)
        .toString() as string;
    }
  }
  return "";
};

const parseData = (data: any[], colors: string[]) => {
  return data.map((item, index) => {
    return {
      ...item,
      color: colors[index] ?? colors[0],
      fill: colors[index] ?? colors[0],
    };
  });
};

const DonutChart = React.forwardRef<
  HTMLDivElement,
  React.PropsWithoutRef<DonutChartProps>
>(
  (
    {
      data = [],
      category = "value",
      index = "name",
      colors = [],
      variant = "donut",
      dataFormatter = (data) => data.toString(),
      showLabel = false,
      labelVariant = "sum",
      animationDuration = 900,
      showAnimation = true,
      showTooltip = true,
      showLegend = false,
      className,
      children,
    },
    ref
  ) => {
    const labelText = dataFormatter(getLabel(data, category, labelVariant));

    return (
      <div ref={ref} className={cn("w-full h-44", className)}>
        <ResponsiveContainer
          width={"100%"}
          aspect={1}
          className="w-full h-full relative"
        >
          <PieChart>
            {showLabel && variant === "donut" ? (
              <text
                x="50%"
                y="50%"
                fill="hsl(var(--foreground))"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-center text-foreground fill-foreground"
              >
                {labelText}
              </text>
            ) : (
              <></>
            )}
            {showLegend && (
              <Legend
                className=""
                verticalAlign="top"
                height={20}
                content={({ payload }) => (
                  <ChartLegend
                    className="text-xs"
                    payload={payload}
                  ></ChartLegend>
                )}
              />
            )}
            <Pie
              className="stroke-foreground bg-foreground"
              data={parseData(data, colors)}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={
                variant === "donut" ? (showLabel ? "65%" : "75%") : "0%"
              }
              outerRadius={showLabel ? "80%" : "100%"}
              stroke=""
              strokeLinejoin="round"
              dataKey={category}
              nameKey={index}
              isAnimationActive={showAnimation}
              animationDuration={animationDuration}
            />
            {showTooltip && (
              <Tooltip
                wrapperStyle={{ outline: "none" }}
                content={({ active, payload }) => (
                  <DonutToolTip
                    active={active}
                    payload={payload}
                    dataFormatter={dataFormatter}
                  />
                )}
              />
            )}
            {children}
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
);

DonutChart.displayName = "DonutChart";

export { DonutChart };
