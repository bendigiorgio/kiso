import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@components/aspect-ratio/aspect-ratio";
import React from "react";

const meta: Meta<typeof AspectRatio> = {
  title: "Component/AspectRatio",
  component: AspectRatio,
};
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
      </AspectRatio>
    </div>
  ),
};

export default meta;
