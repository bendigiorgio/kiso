import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart } from "@charts/area-chart";

const meta: Meta<typeof AreaChart> = {
  title: "Charts/Area Chart",
  component: AreaChart,
};
export default meta;

type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  args: {
    data: [
      {
        date: "Jan 22",
        SemiAnalysis: 2890,
        "The Pragmatic Engineer": 2338,
      },
      {
        date: "Feb 22",
        SemiAnalysis: 2756,
        "The Pragmatic Engineer": 2103,
      },
      {
        date: "Mar 22",
        SemiAnalysis: 3322,
        "The Pragmatic Engineer": 2194,
      },
      {
        date: "Apr 22",
        SemiAnalysis: 3470,
        "The Pragmatic Engineer": 2108,
      },
      {
        date: "May 22",
        SemiAnalysis: 3475,
        "The Pragmatic Engineer": 1812,
      },
      {
        date: "Jun 22",
        SemiAnalysis: 3129,
        "The Pragmatic Engineer": 1726,
      },
    ],
    index: "date",
    categories: ["SemiAnalysis", "The Pragmatic Engineer"],
    colors: ["#06D6A0", "#D64550"],
    yAxisWidth: 80,
    dataFormatter: (number: number) =>
      "$ " + Intl.NumberFormat("us").format(number).toString(),
  },
};
