import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./feature-card";
import { Bomb } from "lucide-react";
import React from "react";
const meta: Meta<typeof FeatureCard> = {
  title: "Prebuilt/FeatureCard",
  component: FeatureCard,
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    icon: <Bomb className="w-full h-full" />,
  },
};

export const WithColor: Story = {
  args: {
    className: "",
    color: "#238BE6",
    title: "Title",
    description: "Description",
    icon: <Bomb className="w-full h-full" />,
  },
};
