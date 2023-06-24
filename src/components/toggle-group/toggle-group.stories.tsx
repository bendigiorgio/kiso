import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import React from "react";

const meta: Meta<typeof ToggleGroup> = {
  title: "Component/ToggleGroup",
  component: ToggleGroup,
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {
    defaultValue: "option_1",
    size: "sm",
    type: "single",
    variant: "filled",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem className="data-[state=on]:bg-toggle" value="option_1">
        Option 1
      </ToggleGroupItem>
      <ToggleGroupItem value="option_2">Option 2</ToggleGroupItem>
    </ToggleGroup>
  ),
};
