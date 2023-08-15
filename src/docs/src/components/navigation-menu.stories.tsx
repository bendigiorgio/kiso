import type { Meta, StoryObj } from "@storybook/react";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/navigation-menu/navigation-menu";
import React from "react";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Avatar",
    href: "/kiso/?path=/docs/component-avatar--docs",
    description:
      "A graphical representation of a user or the user's character or persona.",
  },
  {
    title: "Hover Card",
    href: "/kiso/?path=/docs/component-hovercard--docs",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Input",
    href: "/kiso/?path=/docs/component-input--docs",
    description:
      "A field that allows users to input text, numbers, and other data.",
  },
  {
    title: "Scroll Area",
    href: "/kiso/?path=/docs/component-scrollarea--docs",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/kiso/?path=/docs/component-tabs--docs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/kiso/?path=/docs/component-tooltip--docs",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const Default: Story = {
  args: {},
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
