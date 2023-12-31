import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/dialog/dialog";
import { Button } from "@components/button/button";
import React from "react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button className="!bg-destructive" variant="destructive">
          Remove
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remove Account</DialogTitle>
          <DialogDescription>
            This is a permanent action that cannot be undone. Are you sure you
            want to remove your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full flex-row items-center justify-evenly">
            <Button>No</Button>
            <Button variant="destructive">Remove Account</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
