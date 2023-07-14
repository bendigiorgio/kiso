import type { Meta, StoryObj } from "@storybook/react";
import { BottomGrid } from "./bottom-grid";
import { Fingerprint, Heart, Key, Lock } from "lucide-react";
import React from "react";
const meta: Meta<typeof BottomGrid> = {
  title: "Prebuilt/Pages/Content/Bottom Grid",
  component: BottomGrid,
};

export default meta;

type Story = StoryObj<typeof BottomGrid>;

export const Default: Story = {
  args: {
    features: [
      {
        name: "Feature 1.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <Heart className="w-4 h-4 fill-muted-foreground" />,
      },
      {
        name: "Feature 2.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <Lock className="w-4 h-4 fill-muted-foreground" />,
      },
      {
        name: "Feature 3.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <Fingerprint className="w-4 h-4" />,
      },
      {
        name: "Feature 4.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: <Key className="w-4 h-4 " />,
      },
    ],
  },
};
