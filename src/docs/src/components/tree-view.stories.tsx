import type { Meta, StoryObj } from "@storybook/react";
import { Tree, TreeItem } from "@components/tree-view/tree-view";
import React from "react";

const meta: Meta<typeof Tree> = {
  title: "Components/Tree View",
  component: Tree,
};

export default meta;

type Story = StoryObj<typeof Tree>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Tree {...args}>
      <TreeItem label="Test">
        <TreeItem label="Test2"></TreeItem>
        <TreeItem label="Test3"></TreeItem>
        <TreeItem label="Test4">
          <TreeItem variant="file" label="Test5"></TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem variant="file" label="Test6"></TreeItem>
    </Tree>
  ),
};

export const SingleSelect: Story = {
  args: {
    type: "single",
  },
  render: (args) => (
    <Tree {...args}>
      <TreeItem label="Test">
        <TreeItem label="Test2">
          <TreeItem label="Test3"></TreeItem>
          <TreeItem label="Test4"></TreeItem>
        </TreeItem>
        <TreeItem label="Test3"></TreeItem>
        <TreeItem label="Test4">
          <TreeItem variant="file" label="Test5"></TreeItem>
        </TreeItem>
        <TreeItem variant="file" label="Test6"></TreeItem>
      </TreeItem>
    </Tree>
  ),
};
