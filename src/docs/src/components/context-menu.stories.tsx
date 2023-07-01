import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@components/context-menu/context-menu";
import React from "react";

const meta: Meta<typeof ContextMenu> = {
  title: "Component/ContextMenu",
  component: ContextMenu,
  argTypes: {
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      defaultValue: "ltr",
      description: "Direction of the context menu",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    modal: false,
  },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>Right click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
