import type { Meta, StoryObj } from "@storybook/react";
import { ImagesRight } from "./images-right";

const meta: Meta<typeof ImagesRight> = {
  title: "Prebuilt/Pages/Hero/Images Right",
  component: ImagesRight,
};

export default meta;

type Story = StoryObj<typeof ImagesRight>;

export const Default: Story = {
  args: {},
};
