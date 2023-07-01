import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@components/progress/progress";

const meta: Meta<typeof Progress> = {
  title: "Component/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};
