import type { Meta, StoryObj } from "@storybook/react";
import { RightDetails } from "./right-details";

const meta: Meta<typeof RightDetails> = {
  title: "Prebuilt/Pages/Content/Right Details",
  component: RightDetails,
};

export default meta;

type Story = StoryObj<typeof RightDetails>;

export const Default: Story = {
  args: {
    features: [
      {
        name: "Bright",
        description:
          "It is very bright and you can see it from far away. You can rely on it to light up your day.",
      },
      {
        name: "Light",
        description:
          "It is very light and you can carry it around with you. You can rely on it to light up your day.",
      },
      {
        name: "Colorful",
        description:
          "It is very colorful and is nice to look at. You can put it in many different situations and it will still look good.",
      },
      {
        name: "Locally Sourced",
        description:
          "It is locally sourced and is good for the environment. You can rely on it to light up your day.",
      },
    ],
  },
};
