import type { Meta, StoryObj } from "@storybook/react";
import {
  Stat,
  StatArrow,
  StatDescription,
  StatLabel,
  StatNumber,
} from "@components/stat/stat";
import React from "react";
const meta: Meta<typeof Stat> = {
  title: "Components/Stat",
  component: Stat,
};

export default meta;

type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Stat {...args}>
      <StatLabel>Collected Fees</StatLabel>
      <StatNumber>$0.00</StatNumber>
      <StatDescription>0.00%</StatDescription>
    </Stat>
  ),
};

export const Decrease: Story = {
  args: {},
  render: (args) => (
    <Stat {...args}>
      <StatLabel>Collected Fees</StatLabel>
      <StatNumber>$27.00</StatNumber>
      <StatDescription>
        <StatArrow change="negative" /> 20.00%
      </StatDescription>
    </Stat>
  ),
};

export const Increase: Story = {
  args: {},
  render: (args) => (
    <Stat {...args}>
      <StatLabel>Monthly Users</StatLabel>
      <StatNumber>234,780</StatNumber>
      <StatDescription>
        <StatArrow change="positive" /> 20.00%
      </StatDescription>
    </Stat>
  ),
};
