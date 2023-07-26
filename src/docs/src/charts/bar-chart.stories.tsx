import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "@charts/bar-chart";

const meta: Meta<typeof BarChart> = {
  title: "Charts/Bar Chart",
  component: BarChart,
};
export default meta;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    data: [
      {
        name: "Amphibians",
        "Number of threatened species": 2488,
      },
      {
        name: "Birds",
        "Number of threatened species": 1445,
      },
      {
        name: "Crustaceans",
        "Number of threatened species": 743,
      },
    ],
    index: "name",
    categories: ["Number of threatened species"],
    colors: ["#06D6A0"],
  },
};

export const WithColors: Story = {
  args: {
    data: [
      {
        name: "Topic 1",
        "Group A": 890,
        "Group B": 338,
        "Group C": 538,
        "Group D": 396,
        "Group E": 138,
        "Group F": 436,
      },
      {
        name: "Topic 2",
        "Group A": 289,
        "Group B": 233,
        "Group C": 253,
        "Group D": 333,
        "Group E": 133,
        "Group F": 533,
      },
      {
        name: "Topic 3",
        "Group A": 489,
        "Group B": 433,
        "Group C": 353,
        "Group D": 433,
        "Group E": 233,
        "Group F": 633,
      },
      {
        name: "Topic 4",
        "Group A": 189,
        "Group B": 133,
        "Group C": 153,
        "Group D": 233,
        "Group E": 33,
        "Group F": 333,
      },
    ],
    index: "name",
    categories: [
      "Group A",
      "Group B",
      "Group C",
      "Group D",
      "Group E",
      "Group F",
    ],
    colors: ["#434371", "#79AEA3", "#F0B67F", "#F18960", "#E66182", "#DBD56E"],
  },
};
