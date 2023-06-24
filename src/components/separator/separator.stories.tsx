import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";
import React from "react";

const meta: Meta<typeof Separator> = {
  title: "Component/Separator",
  component: Separator,
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <p>Content above the separator</p>
      <Separator {...args} className="my-4" />
      <p>Content below the separator</p>
    </div>
  ),
};
