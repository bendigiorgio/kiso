import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@components/switch/switch";

const meta: Meta<typeof Switch> = {
  title: "Component/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
