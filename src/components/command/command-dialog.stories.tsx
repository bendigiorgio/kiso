import type { Meta, StoryObj } from "@storybook/react";
import {
  CommandEmpty,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
} from "./command";
import React from "react";

const meta: Meta<typeof CommandDialog> = {
  title: "Component/Command/Dialog",
  component: CommandDialog,
};

type Story = StoryObj<typeof CommandDialog>;

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <div>
      <CommandDialog {...args}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  ),
};

export default meta;
