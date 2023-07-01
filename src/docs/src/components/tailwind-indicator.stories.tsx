import type { Meta, StoryObj } from "@storybook/react";
import { TailwindIndicator } from "@components/tailwind-indicator/tailwind-indicator";

const meta: Meta<typeof TailwindIndicator> = {
  title: "Component/TailwindIndicator",
  component: TailwindIndicator,
};

export default meta;

type Story = StoryObj<typeof TailwindIndicator>;

export const Default: Story = {
  args: {},
};
