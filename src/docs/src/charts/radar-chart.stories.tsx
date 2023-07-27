import type { Meta, StoryObj } from "@storybook/react";
import { RadarChart } from "@charts/radar-chart";

const meta: Meta<typeof RadarChart> = {
  title: "Charts/Radar Chart",
  component: RadarChart,
};
export default meta;

type Story = StoryObj<typeof RadarChart>;

export const Default: Story = {
  args: {
    data: [
      {
        subject: "Math",
        David: 120,
        Jane: 110,
        fullMark: 150,
      },
      {
        subject: "Chinese",
        David: 98,
        Jane: 130,
        fullMark: 150,
      },
      {
        subject: "English",
        David: 86,
        Jane: 130,
        fullMark: 150,
      },
      {
        subject: "Geography",
        David: 99,
        Jane: 100,
        fullMark: 150,
      },
      {
        subject: "Physics",
        David: 85,
        Jane: 90,
        fullMark: 150,
      },
      {
        subject: "History",
        David: 65,
        Jane: 85,
        fullMark: 150,
      },
    ],
    colors: ["#B2B09B", "#f59e0b"],
    index: "subject",
    categories: ["David", "Jane"],
  },
};
