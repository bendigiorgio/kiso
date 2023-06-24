import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./loader";

const meta: Meta<typeof Loader> = {
  title: "Component/Loader",
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Circle: Story = {
  args: { variant: "circle" },
};

export const Dots: Story = {
  args: { variant: "dots" },
};

export const Bars: Story = {
  args: { variant: "bars" },
};
