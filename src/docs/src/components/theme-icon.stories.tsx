import type { Meta, StoryObj } from "@storybook/react";
import { ThemeIcon } from "@components/theme-icon/theme-icon";
import { CloudHail } from "lucide-react";
import React from "react";
const meta: Meta<typeof ThemeIcon> = {
  title: "Component/ThemeIcon",
  component: ThemeIcon,
};

export default meta;

type Story = StoryObj<typeof ThemeIcon>;

export const Default: Story = {
  args: {
    children: <CloudHail />,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: <CloudHail />,
  },
};

export const Colored: Story = {
  args: {
    variant: "filled",
    className: "bg-indigo-600 text-foreground",
    children: <CloudHail />,
  },
};
