export interface ChartProps {
  colors?: string[];
  showAnimation?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  showGridLines?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  index: string;
  categories?: string[];
  minValue?: number;
  maxValue?: number;
  yAxisWidth: number;
  allowDecimals?: boolean;
  dataFormatter?: (data: any) => any;
}

export type LineType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "linear"
  | "linearClosed"
  | "natural"
  | "monotoneX"
  | "monotoneY"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter";
