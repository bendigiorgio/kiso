import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@components/date-picker/date-picker";

const meta: Meta<typeof DatePicker> = {
  title: "Component/DatePicker",
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const Range: Story = {
  args: {
    variant: "range",
  },
};

export const Presets: Story = {
  args: {
    variant: "presets",
  },
};
