import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@components/badge";

const meta: Meta<typeof Badge> = {
  title: "Component/Badge",
  component: Badge,
};
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Badge",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Badge",
  },
};

export const Null: Story = {
  args: {
    variant: null,
    children: "Badge",
  },
};

export default meta;
