import type { Meta, StoryObj } from "@storybook/react";
import { Burger } from "@components/burger/burger";

const meta: Meta<typeof Burger> = {
  title: "Component/Burger",
  component: Burger,
};

export default meta;

type Story = StoryObj<typeof Burger>;

export const Default: Story = {
  args: {},
};
