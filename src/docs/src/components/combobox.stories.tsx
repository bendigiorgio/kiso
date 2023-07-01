import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "@components/combobox/combobox";

const meta: Meta<typeof Combobox> = {
  title: "Component/Combobox",
  component: Combobox,
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    data: [
      {
        value: "next",
        label: "Next",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt",
        label: "Nuxt",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
    ],
  },
};
