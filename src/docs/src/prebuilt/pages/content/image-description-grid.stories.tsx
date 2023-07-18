import type { Meta, StoryObj } from "@storybook/react";
import { ImageDescriptionGrid } from "./image-description-grid";

const meta: Meta<typeof ImageDescriptionGrid> = {
  title: "Prebuilt/Pages/Content/Image Description Grid",
  component: ImageDescriptionGrid,
};

export default meta;

type Story = StoryObj<typeof ImageDescriptionGrid>;

export const Default: Story = {
  args: {
    features: [
      {
        name: "Evening",
        description:
          "The best time of the day to relax and unwind. You can put it in many different situations and it will still look good.",
        image:
          "https://cdn.midjourney.com/39eb5f74-5f25-4267-a577-812329514054/0_0.png",
      },
      {
        name: "Night",
        description:
          "When most people are asleep. Have some peace and quiet. You look to the moon and the stars for guidance.",
        image:
          "https://cdn.midjourney.com/72644f05-d9ae-421d-9e2b-4209e45c3bca/0_0.png",
      },
      {
        name: "Winter",
        description:
          "The cold of Winter is a reminder that you are alive. It is a time to reflect on the past and plan for the future.",
        image:
          "https://cdn.midjourney.com/cc276cfe-dd93-4451-a160-f63881d20006/0_0.png",
      },
      {
        name: "Autumn",
        description:
          "The leaves are falling and the air is crisp. It is a great time to go for a walk and enjoy the changing colors of the leaves.",
        image:
          "https://cdn.midjourney.com/04596c45-7db2-4b95-9ec5-3a951c676ea7/0_0.png",
      },
    ],
  },
};
