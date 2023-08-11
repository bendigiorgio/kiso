import type { Meta, StoryObj } from "@storybook/react";
import { SpotlightProvider } from "@components/spotlight/spotlight";
import React from "react";
import { Card, CardHeader, CardTitle } from "@components/card";

const meta: Meta<typeof SpotlightProvider> = {
  title: "Components/Spotlight",
  component: SpotlightProvider,
};

export default meta;

type Story = StoryObj<typeof SpotlightProvider>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <SpotlightProvider className="grid grid-cols-3 gap-4" {...args}>
      <Card className="bg-card/80 w-[280px] h-48 duration-500 relative flex flex-col justify-between before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-highlight-o-300 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <CardHeader>
          <CardTitle>Step 1</CardTitle>
        </CardHeader>
      </Card>
      <Card className="bg-card/80 w-[280px] h-48 duration-500 relative flex flex-col justify-between before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-highlight-o-300 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <CardHeader>
          <CardTitle>Step 2</CardTitle>
        </CardHeader>
      </Card>
      <Card className="bg-card/80 w-[280px] h-48 duration-500 relative flex flex-col justify-between before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-highlight-o-300 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <CardHeader>
          <CardTitle>Step 3</CardTitle>
        </CardHeader>
      </Card>
    </SpotlightProvider>
  ),
};
