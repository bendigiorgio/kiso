import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "@components/keyboard/keyboard";
import React from "react";

const meta: Meta<typeof Kbd> = {
  title: "Components/Keyboard",
  component: Kbd,
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: { children: "Shift + Tab" },
};

export const Multiple: Story = {
  render: (args) => (
    <div className="flex items-center space-x-1">
      <Kbd {...args}>⌘</Kbd> <span>+</span> <Kbd {...args}>shift</Kbd>
      <span>+</span> <Kbd {...args}>M</Kbd>
    </div>
  ),
};
