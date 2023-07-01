import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@components/card/card";

const meta: Meta<typeof Card> = {
  title: "Component/Card",
  component: Card,
};

type Story = StoryObj<typeof Card>;

// This story demonstrates the basic usage of the Card component.
export const BasicCard: Story = {
  args: {
    className: "max-w-sm",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description for the card.</CardDescription>
      </CardHeader>
      <CardContent>Content of the card goes here.</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
};

export default meta;
