import type { Meta, StoryObj } from "@storybook/react";
import { PanelCta } from "./panel";

const meta: Meta<typeof PanelCta> = {
  title: "Prebuilt/Pages/CTA/PanelCta",
  component: PanelCta,
};

export default meta;

type Story = StoryObj<typeof PanelCta>;

export const Default: Story = {
  args: {},
};
