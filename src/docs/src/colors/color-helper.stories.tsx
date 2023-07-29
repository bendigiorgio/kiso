import type { Meta, StoryObj } from "@storybook/react";
import { ColorHelper } from "./color-helper";

const meta: Meta<typeof ColorHelper> = {
  title: "Colors/Color Helper",
  component: ColorHelper,
};

export default meta;

type Story = StoryObj<typeof ColorHelper>;

export const Default: Story = {
  args: {},
};
