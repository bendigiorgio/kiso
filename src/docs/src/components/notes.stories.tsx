import type { Meta, StoryObj } from "@storybook/react";
import { Note } from "@components/note/note";
import React from "react";
import { Button } from "@components/button";
import { BadgeAlert } from "lucide-react";

const meta: Meta<typeof Note> = {
  title: "Components/Note",
  component: Note,
  argTypes: {
    filled: {
      control: {
        type: "boolean",
        default: false,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Note>;

export const Default: Story = {
  args: {},
  render: (args) => <Note {...args}>This is a note.</Note>,
};

export const Action: Story = {
  args: {
    variant: "error",
    filled: true,
    icon: <BadgeAlert className="h-5 w-5" />,
    action: <Button size="sm">Click Me</Button>,
  },
  render: (args) => <Note {...args}>This is a note for an error.</Note>,
};
