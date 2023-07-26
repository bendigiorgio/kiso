"use client";

import React from "react";
import {
  Bar,
  type BarProps,
  CartesianGrid,
  Legend,
  BarChart as ReChartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AxisDomain } from "recharts/types/util/types";
import { ChartTooltip } from "../common/chart-tooltip";
import { ChartLegend } from "../common/chart-legend";
import { getColor } from "../common/get-color";
import { ChartProps } from "../common/baseprops";
import { constructColors } from "../common/construct-colors";
import { getYAxisDomain } from "../common/get-y-axis-domain";
import { cn } from "@lib/utils";

export interface BarChartProps extends BarProps, ChartProps {
  data: any[];
  layout?: "vertical" | "horizontal";
  stack?: boolean;
  relative?: boolean;
  barWidth?: number;
}

const BarChart = React.forwardRef<
  HTMLDivElement,
  React.PropsWithoutRef<BarChartProps>
>(
  (
    {
      data,
      colors = [],
      xAxis,
      yAxis,
      index,
      showXAxis = true,
      showYAxis = true,
      yAxisWidth = 56,
      animationDuration = 900,
      showAnimation = true,
      minValue,
      maxValue,
      showTooltip = true,
      showLegend = true,
      showGridLines = true,
      allowDecimals = true,
      categories = [],
      dataFormatter = (data) => data.toString(),
      className,
      layout = "horizontal",
      stack = false,
      relative = false,
      barWidth,
    },
    ref
  ) => {
    const yAxisDomain = getYAxisDomain(false, minValue, maxValue);
    const categoryMap = constructColors(colors, categories);
    console.log(categoryMap);
    console.log(getColor(categoryMap, "Number of threatened species"));
    return (
      <div ref={ref} className={cn("w-full h-80", className)}>
        <ResponsiveContainer className="w-full h-full">
          {data ? (
            <ReChartsBarChart
              data={data}
              stackOffset={relative ? "expand" : "none"}
              layout={layout === "vertical" ? "vertical" : "horizontal"}
            >
              {showGridLines && (
                <CartesianGrid
                  className="stroke-1 stroke-muted-foreground/40"
                  strokeDasharray="3 3"
                  horizontal
                  vertical={false}
                />
              )}
              {layout !== "vertical" ? (
                <XAxis
                  className=" text-xs"
                  hide={!showXAxis}
                  dataKey={index}
                  interval="preserveStartEnd"
                  tick={{ transform: "translate(0,6)" }}
                  tickLine={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                  minTickGap={5}
                  {...xAxis}
                />
              ) : (
                <XAxis
                  className=" text-xs"
                  type="number"
                  hide={!showXAxis}
                  dataKey={index}
                  interval="preserveStartEnd"
                  tickFormatter={dataFormatter}
                  tick={{ transform: "translate(-3, 0)" }}
                  tickLine={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                  minTickGap={5}
                  allowDecimals={allowDecimals}
                  {...xAxis}
                />
              )}
              {layout !== "vertical" ? (
                <YAxis
                  className="fill-muted-foreground/60 text-xs"
                  width={yAxisWidth}
                  hide={!showYAxis}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  domain={yAxisDomain as AxisDomain}
                  tick={{ transform: "translate(-3,0)" }}
                  tickFormatter={
                    relative
                      ? (value: number) => `${(value * 100).toString()} %`
                      : dataFormatter
                  }
                  allowDecimals={allowDecimals}
                  {...yAxis}
                />
              ) : (
                <YAxis
                  className="fill-muted-foreground/60 text-xs"
                  width={yAxisWidth}
                  hide={!showYAxis}
                  dataKey={index}
                  interval="preserveStartEnd"
                  axisLine={false}
                  tickLine={false}
                  type="category"
                  tick={{ transform: "translate(0,6)" }}
                  {...yAxis}
                />
              )}
              {showTooltip && (
                <Tooltip
                  // ongoing issue: https://github.com/recharts/recharts/issues/2920
                  wrapperStyle={{ outline: "none" }}
                  isAnimationActive={false}
                  cursor={{ fill: "#d1d5db", opacity: "0.15" }}
                  content={({ payload, label }) => (
                    <ChartTooltip payload={payload} label={label} />
                  )}
                  position={{ y: 0 }}
                />
              )}
              {showLegend && (
                <Legend
                  className=""
                  verticalAlign="top"
                  height={60}
                  content={({ payload }) => (
                    <ChartLegend payload={payload}></ChartLegend>
                  )}
                />
              )}
              {categories.map((category) => (
                <Bar
                  barSize={barWidth}
                  fill={getColor(categoryMap, category)}
                  key={category}
                  name={category}
                  type="linear"
                  stackId={stack || relative ? "a" : undefined}
                  dataKey={category}
                  isAnimationActive={showAnimation}
                  animationDuration={animationDuration}
                />
              ))}
            </ReChartsBarChart>
          ) : (
            <></>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
);

BarChart.displayName = "BarChart";

export { BarChart };
