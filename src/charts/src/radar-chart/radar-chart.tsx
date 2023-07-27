"use client";
import React from "react";
import { cn } from "@lib/utils";

import {
  Legend,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart as RRadarChart,
  ResponsiveContainer,
  RadarProps,
} from "recharts";
import { ChartProps } from "../common/baseprops";
import { constructColors } from "../common/construct-colors";

export interface RadarChartProps extends RadarProps, ChartProps {
  data: any[];
  customMaxValue?: number;
}

const RadarChart = React.forwardRef<
  HTMLDivElement,
  React.PropsWithoutRef<RadarChartProps>
>(
  (
    {
      data,
      colors = ["#d1d5db"],
      index,
      categories = [],
      className,
      customMaxValue,
      showLegend = true,
      children,
    },
    ref
  ) => {
    const maxValue = customMaxValue ?? Math.max(...data.map((d) => d[index]));
    const categoryMap = constructColors(colors, categories);
    return (
      <div ref={ref} className={cn("w-full h-80", className)}>
        <ResponsiveContainer className="w-full h-full">
          {data && (
            <RRadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey={index} />
              <PolarRadiusAxis domain={[0, maxValue]} />
              {categories.map((category, i) => (
                <Radar
                  name={category}
                  dataKey={category}
                  fill={categoryMap.get(category)}
                  fillOpacity={0.6}
                  key={`${category}-${i}`}
                />
              ))}
              {showLegend && <Legend />}
              {children}
            </RRadarChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
);

RadarChart.displayName = "RadarChart";

export { RadarChart };
