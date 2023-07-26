import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "@charts/line-chart";

const meta: Meta<typeof LineChart> = {
  title: "Charts/Line Chart",
  component: LineChart,
};
export default meta;

type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    data: [
      {
        year: 1970,
        "Export Growth Rate": 2.04,
        "Import Growth Rate": 1.53,
      },
      {
        year: 1971,
        "Export Growth Rate": 1.96,
        "Import Growth Rate": 1.58,
      },
      {
        year: 1972,
        "Export Growth Rate": 1.96,
        "Import Growth Rate": 1.61,
      },
      {
        year: 1973,
        "Export Growth Rate": 1.93,
        "Import Growth Rate": 1.61,
      },
      {
        year: 1974,
        "Export Growth Rate": 1.88,
        "Import Growth Rate": 1.67,
      },
    ],
    dataFormatter: (number: number) =>
      `${Intl.NumberFormat("us").format(number).toString()}%`,
    index: "year",
    categories: ["Export Growth Rate", "Import Growth Rate"],
    colors: ["#06D6A0", "#D64550"],
  },
};

export const Basis: Story = {
  args: {
    data: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
      },
    ],
    index: "name",
    categories: ["uv", "pv"],
    colors: ["#06D6A0", "#D64550"],
    curveType: "basis",
    showDot: true,
  },
};
