"use client";
import React from "react";

import { cn } from "@lib/utils";
import {
  Area,
  AreaProps,
  CartesianGrid,
  Legend,
  AreaChart as RAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AxisDomain } from "recharts/types/util/types";
import { ChartTooltip } from "../common/chart-tooltip";
import { ChartLegend } from "../common/chart-legend";
import { getColor } from "../common/get-color";
import { ChartProps, LineType } from "../common/baseprops";
import { constructColors } from "../common/construct-colors";
import { getYAxisDomain } from "../common/get-y-axis-domain";

export interface AreaChartProps extends AreaProps, ChartProps {
  showGradient?: boolean;
  connectNulls?: boolean;
  curveType: LineType;
  stack?: boolean;
  showDot?: boolean;
}

const AreaChart = React.forwardRef<
  HTMLDivElement,
  React.PropsWithoutRef<AreaChartProps>
>(
  (
    {
      data = [],
      categories = [],
      index,
      stack = false,
      colors = [],
      showXAxis = true,
      showYAxis = true,
      xAxis,
      yAxis,
      yAxisWidth = 56,
      showAnimation = true,
      animationDuration = 900,
      showTooltip = true,
      showLegend = true,
      showGridLines = true,
      showGradient = true,
      dataFormatter = (data) => data.toString(),
      showDot = false,
      curveType = "linear",
      minValue,
      maxValue,
      connectNulls = false,
      allowDecimals = true,
      className,
    },
    ref
  ) => {
    const yAxisDomain = getYAxisDomain(false, minValue, maxValue);
    const categoryMap = constructColors(colors, categories);
    return (
      <div ref={ref} className={cn("w-full h-80", className)}>
        <ResponsiveContainer className="w-full h-full">
          {data && (
            <RAreaChart data={data}>
              {showGridLines && (
                <CartesianGrid
                  className="stroke-1 stroke-muted-foreground/40"
                  strokeDasharray="3 3"
                  horizontal
                  vertical={false}
                />
              )}
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
              <YAxis
                className="fill-muted-foreground/60 text-xs"
                width={yAxisWidth}
                hide={!showYAxis}
                axisLine={false}
                tickLine={false}
                type="number"
                domain={yAxisDomain as AxisDomain}
                tick={{ transform: "translate(-3,0)" }}
                tickFormatter={dataFormatter}
                allowDecimals={allowDecimals}
                {...yAxis}
              />
              {showTooltip && (
                <Tooltip
                  // ongoing issue: https://github.com/recharts/recharts/issues/2920
                  wrapperStyle={{ outline: "none" }}
                  isAnimationActive={false}
                  cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
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
              {categories.map((category) => {
                return (
                  <defs key={category}>
                    {showGradient ? (
                      <linearGradient
                        style={{ color: getColor(categoryMap, category) }}
                        id={categoryMap.get(category)}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="currentColor"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor="currentColor"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    ) : (
                      <linearGradient
                        style={{ color: getColor(categoryMap, category) }}
                        id={categoryMap.get(category)}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop stopColor="currentColor" stopOpacity={0.3} />
                      </linearGradient>
                    )}
                  </defs>
                );
              })}
              {categories.map((category) => (
                <Area
                  stroke={getColor(categoryMap, category)}
                  dot={showDot}
                  key={category}
                  name={category}
                  type={curveType}
                  dataKey={category}
                  fill={`url(#${categoryMap.get(category)})`}
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  isAnimationActive={showAnimation}
                  animationDuration={animationDuration}
                  stackId={stack ? "a" : undefined}
                  connectNulls={connectNulls}
                />
              ))}
            </RAreaChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
);

AreaChart.displayName = "AreaChart";

export { AreaChart };
