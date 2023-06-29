import type { Meta, StoryObj } from "@storybook/react";
import { ImageGrid } from "./image-grid";

const meta: Meta<typeof ImageGrid> = {
  title: "Prebuilt/Pages/Landing/ImageGrid",
  component: ImageGrid,
};

export default meta;

type Story = StoryObj<typeof ImageGrid>;

export const Default: Story = {
  args: {},
};
