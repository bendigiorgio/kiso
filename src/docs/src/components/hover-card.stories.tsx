import type { Meta, StoryObj } from "@storybook/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@components/hover-card/hover-card";
import React from "react";

const meta: Meta<typeof HoverCard> = {
  title: "Component/HoverCard",
  component: HoverCard,
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>Someting cool.</HoverCardContent>
    </HoverCard>
  ),
};
