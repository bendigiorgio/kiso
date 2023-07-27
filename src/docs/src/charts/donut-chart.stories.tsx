import type { Meta, StoryObj } from "@storybook/react";
import { DonutChart } from "@charts/donut-chart";
import React from "react";
const meta: Meta<typeof DonutChart> = {
  title: "Charts/Donut Chart",
  component: DonutChart,
};
export default meta;

type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: {
    data: [
      {
        name: "New York",
        value: 9800,
      },
      {
        name: "London",
        value: 4567,
      },
      {
        name: "Hong Kong",
        value: 3908,
      },
      {
        name: "San Francisco",
        value: 2400,
      },
      {
        name: "Singapore",
        value: 1908,
      },
      {
        name: "Zurich",
        value: 1398,
      },
    ],
    labelVariant: "sum",
    showLabel: true,
    index: "name",
    category: "value",

    colors: ["#06D6A0", "#D64550", "#FFD166", "#118AB2", "#073B4C", "#EF476F"],
    dataFormatter: (data) =>
      `$ ${Intl.NumberFormat("us").format(data).toString()}`,
  },
  render: (props) => {
    return (
      <div style={{ width: "20rem", height: "25rem" }} className="w-40 'h-40">
        <DonutChart {...props} />
      </div>
    );
  },
};
