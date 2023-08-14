import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "@components/input/input";
import { Card, CardHeader, CardTitle } from "@components/card";
import { Button } from "@components/button";
import { SpotlightBorder } from "@components/spotlight/border-spotlight";

const meta: Meta<typeof SpotlightBorder> = {
  title: "Components/Spotlight/Border",
  component: SpotlightBorder,
};

export default meta;

type Story = StoryObj<typeof SpotlightBorder>;

export const Default: Story = {
  args: {
    className: "w-48 rounded-md",
  },
  render: (args) => (
    <SpotlightBorder {...args}>
      <Input
        className="focus:border-[rgb(228,115,32)]"
        placeholder="Spotlight Border"
      />
    </SpotlightBorder>
  ),
};

export const MultipleChildren: Story = {
  args: {
    className: "w-48 rounded-md gap-4 grid grid-cols-1",
  },
  render: (args) => (
    <SpotlightBorder {...args}>
      <Input
        className="focus:border-[rgb(228,115,32)]"
        placeholder="Spotlight Border"
      />
      <Button
        variant="outline"
        className="focus:border-[rgb(228,115,32)] w-full"
      >
        Spotlight Button
      </Button>
    </SpotlightBorder>
  ),
};

export const DifferentComponents: Story = {
  args: {
    className: "grid-cols-3 space-x-4 rounded-md",
  },
  render: (args) => (
    <SpotlightBorder {...args}>
      <Card>
        <CardHeader>
          <CardTitle>Step 1</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Step 2</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Step 3</CardTitle>
        </CardHeader>
      </Card>
    </SpotlightBorder>
  ),
};
