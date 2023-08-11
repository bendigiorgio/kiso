import type { Meta, StoryObj } from "@storybook/react";
import {
  Timeline,
  TimelineItem,
  TimelineItemDescription,
  TimelineItemDetail,
  TimelineItemTitle,
} from "@components/timeline/timeline";
import { GitBranchPlus } from "lucide-react";
import React from "react";

/**
 * Timeline must be used in conjunction with TimelineItem.
 *
 * TimelineItem can have any valid React children.
 *
 * However you can use the following prestyled components to speed up development:
 * - TimelineItemTitle
 * - TimelineItemDescription
 * - TimelineItemDetail
 *
 * ## Useful attributes:
 * The active state of the TimelineItem is saved in the data-state attribute. This means you can conditionally style your TimelineItem based on the active state.
 * See the **DynamicContent** example for more information.
 *
 * # TimelineItem
 * In TimelineItem you can pass any ReactNode to icon prop which will be rendered on the left side of the TimelineItem.
 *
 *
 * # Examples:
 */
const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    active: 0,
    className: "max-w-sm",
  },
  render: (args) => (
    <Timeline {...args}>
      <TimelineItem icon={<GitBranchPlus className="h-4 w-4" />}>
        <TimelineItemTitle>New branch</TimelineItemTitle>
        <TimelineItemDescription>
          You&apos;ve created new branch fix-notifications from master
        </TimelineItemDescription>
        <TimelineItemDetail>2 hours ago</TimelineItemDetail>
      </TimelineItem>
      <TimelineItem>Test2</TimelineItem>
      <TimelineItem>Test3</TimelineItem>
    </Timeline>
  ),
};

export const DynamicContent: Story = {
  args: {
    active: 0,
    className: "max-w-sm",
  },
  render: (args) => (
    <Timeline {...args}>
      <TimelineItem
        className="group"
        icon={<GitBranchPlus className="h-4 w-4" />}
      >
        <TimelineItemTitle>New branch</TimelineItemTitle>
        <TimelineItemDescription className="group-data-[state=inactive]:hidden">
          You&apos;ve created new branch fix-notifications from master
        </TimelineItemDescription>
        <TimelineItemDetail className="group-data-[state=inactive]:hidden">
          2 hours ago
        </TimelineItemDetail>
      </TimelineItem>
      <TimelineItem className="group">
        <TimelineItemTitle>Pull request</TimelineItemTitle>
        <TimelineItemDescription className="group-data-[state=inactive]:hidden">
          You&apos;ve submitted a pull request Fix incorrect notification
          message (#187)
        </TimelineItemDescription>
        <TimelineItemDetail className="group-data-[state=inactive]:hidden">
          30 minutes ago
        </TimelineItemDetail>
      </TimelineItem>
      <TimelineItem>Code review</TimelineItem>
    </Timeline>
  ),
};

export const StylingDots: Story = {
  args: {
    active: 0,
    className: "max-w-sm",
  },
  render: (args) => (
    <Timeline {...args}>
      <TimelineItem
        className="group"
        icon={
          <div className="h-3 w-3 rounded-full bg-background group-data-[state=active]:bg-indigo-600" />
        }
      >
        <TimelineItemTitle>New branch</TimelineItemTitle>
        <TimelineItemDescription className="">
          You&apos;ve created new branch fix-notifications from master
        </TimelineItemDescription>
        <TimelineItemDetail className="">2 hours ago</TimelineItemDetail>
      </TimelineItem>
      <TimelineItem
        className="group"
        icon={
          <div className="h-3 w-3 rounded-full bg-background group-data-[state=active]:bg-indigo-600" />
        }
      >
        <TimelineItemTitle>Pull request</TimelineItemTitle>
        <TimelineItemDescription className="">
          You&apos;ve submitted a pull request Fix incorrect notification
          message (#187)
        </TimelineItemDescription>
        <TimelineItemDetail className="">30 minutes ago</TimelineItemDetail>
      </TimelineItem>
      <TimelineItem
        className="group"
        icon={
          <div className="h-3 w-3 rounded-full bg-background group-data-[state=active]:bg-indigo-600" />
        }
      >
        Code review
      </TimelineItem>
    </Timeline>
  ),
};
