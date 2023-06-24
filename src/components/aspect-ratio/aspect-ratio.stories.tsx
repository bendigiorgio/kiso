import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";
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
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-full flex justify-center items-center rounded-md" />
      </AspectRatio>
    </div>
  ),
};

export default meta;
