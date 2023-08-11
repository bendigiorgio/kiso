import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/button/button";
import React from "react";
import { DogIcon } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
    children: <DogIcon />,
  },
};

export default meta;
