import type { Meta, StoryObj } from "@storybook/react";
import { PriceSection } from "./price-section";

const meta: Meta<typeof PriceSection> = {
  title: "Prebuilt/PriceSection",
  component: PriceSection,
};

export default meta;

type Story = StoryObj<typeof PriceSection>;

export const Default: Story = {
  args: {
    plans: [
      {
        name: "Basic",
        price: 10,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        interval: "month",
        link: "#",
      },
      {
        name: "Pro",
        price: 20,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        interval: "month",
        featured: true,
        featuredBadge: "Most popular",
        link: "#",
      },
      {
        name: "Enterprise",
        price: 30,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        interval: "month",
        link: "#",
      },
    ],
  },
};
