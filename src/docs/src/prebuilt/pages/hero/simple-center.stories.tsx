import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./simple-center";

const meta: Meta<typeof Hero> = {
  title: "Prebuilt/Pages/Hero/Simple Centered",
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
};
