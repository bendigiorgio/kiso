import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "@components/theme-toggle/theme-toggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "Component/ThemeToggle",
  component: ThemeToggle,
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const Switch: Story = {
  args: {
    variant: "switch",
  },
};
