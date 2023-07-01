import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@components/calendar/calendar";

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["default", "single", "range", "multiple"],
    },
    ISOWeek: {
      control: "boolean",
    },
    defaultMonth: {
      control: "date",
    },
    disabled: {
      control: "boolean",
    },
    fromDate: {
      control: "date",
    },
    toDate: {
      control: "date",
    },
    fromMonth: {
      control: "date",
    },
    toMonth: {
      control: "date",
    },
    fromYear: {
      control: "number",
    },
    toYear: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: "single",
    className: "rounded-md border",
  },
};
