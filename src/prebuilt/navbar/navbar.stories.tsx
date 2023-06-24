import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Prebuilt/Navbar",
  component: Navbar,
};
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    pages: [
      { title: "Home", href: "#" },
      { title: "About", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
};

export default meta;
