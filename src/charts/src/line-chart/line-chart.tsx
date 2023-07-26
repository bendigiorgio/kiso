"use client";
import React from "react";
import { LineProps } from "recharts";
import { cn } from "@lib/utils";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RLineChart,
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

export interface LineChartProps extends LineProps, ChartProps {
  showDot?: boolean;
  curveType: LineType;
}

const LineChart = React.forwardRef<
  HTMLDivElement,
  React.PropsWithoutRef<LineChartProps>
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
      connectNulls = false,
      allowDecimals = true,
      categories = [],
      curveType = "linear",
      dataFormatter = (data) => data.toString(),
      showDot = false,
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
            <RLineChart data={data}>
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
              {categories.map((category) => (
                <Line
                  className=""
                  activeDot={{
                    className: cn("stroke-background", ""),
                  }}
                  dot={showDot}
                  key={category}
                  name={category}
                  type={curveType}
                  dataKey={category}
                  stroke={getColor(categoryMap, category)}
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  isAnimationActive={showAnimation}
                  animationDuration={animationDuration}
                  connectNulls={connectNulls}
                />
              ))}
            </RLineChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
);

LineChart.displayName = "LineChart";

export { LineChart };
