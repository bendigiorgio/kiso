import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  StackedAvatarGroup,
} from "./avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Component/Avatar",
  component: Avatar,
};
type Story = StoryObj<typeof Avatar>;

// This story demonstrates the basic usage of the Avatar component.
export const Primary: Story = {
  args: {
    className: "",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/100?img=3" />
    </Avatar>
  ),
};

// This story demonstrates how multiple Avatars can be stacked together.
export const Stacked: Story = {
  args: {},
  render: (args) => (
    <StackedAvatarGroup>
      <Avatar {...args}>
        <AvatarFallback>AB</AvatarFallback>
        <AvatarImage src="https://i.pravatar.cc/100?img=1" />
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>CD</AvatarFallback>
        <AvatarImage src="https://i.pravatar.cc/100?img=2" />
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>EF</AvatarFallback>
        <AvatarImage src="https://i.pravatar.cc/100?img=3" />
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>GH</AvatarFallback>
        <AvatarImage src="https://i.pravatar.cc/100?img=4" />
      </Avatar>
    </StackedAvatarGroup>
  ),
};

// This story demonstrates how the AvatarFallback is displayed when the AvatarImage cannot be loaded.
export const Fallback: Story = {
  args: {},
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
      <AvatarImage src="invalid-image-url" />
    </Avatar>
  ),
};

export default meta;
