import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@components/input/input";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    className: "max-w-sm",
  },
};

export const Disabled: Story = {
  args: {
    className: "max-w-sm",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    conatinerClassname: "max-w-sm",
    type: "password",
  },
};

export const Dropzone: Story = {
  args: {
    type: "file",
    dropZone: true,
  },
  render: (args) => (
    <div className="w-96">
      <Input {...args} />
    </div>
  ),
};
