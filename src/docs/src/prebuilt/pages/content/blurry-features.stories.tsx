import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "./blurry-features";

const meta: Meta<typeof Features> = {
  title: "Prebuilt/Pages/Content/Blurry Features",
  component: Features,
};

export default meta;

type Story = StoryObj<typeof Features>;

export const Default: Story = {
  args: {},
};
