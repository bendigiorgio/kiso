import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@components/label/label";

const meta: Meta<typeof Label> = {
  title: "Component/Label",
  component: Label,
  argTypes: {
    htmlFor: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};
