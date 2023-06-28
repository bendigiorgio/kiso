import type { Meta, StoryObj } from "@storybook/react";
import { RightGrid } from "./simple-r-grid";

const meta: Meta<typeof RightGrid> = {
  title: "Prebuilt/Pages/Content/RightGrid",
  component: RightGrid,
};

export default meta;

type Story = StoryObj<typeof RightGrid>;

export const Default: Story = {
  args: {},
};
