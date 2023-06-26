import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "./testimonial";
import React from "react";
import { Button } from "../../components/button/index.js";

const meta: Meta<typeof Testimonial> = {
  title: "Prebuilt/Testimonial",
  component: Testimonial,
};

export default meta;

type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
  args: {
    person: {
      image:
        "https://cdn.midjourney.com/89787b27-a11e-44cf-b7f1-ef55b4d28006/0_3.png",
      name: "bendigiorgio",
    },
    quote:
      "To all my fellow developers who wish to increase their productivity while maintaining high-quality code, I wholeheartedly recommend Maison Components. This library has not just been a tool in our development process; it has become an essential part of our development ecosystem.",
  },
};

export const NoImage: Story = {
  args: {
    person: {
      name: "bendigiorgio",
    },
    quote:
      "Each component is designed meticulously with functionality and style that smoothly blend with any project aesthetic. They’re easy to customize, incredibly responsive, and take very little time to implement.",
  },
};

export const WithLinks: Story = {
  args: {
    person: {
      name: (
        <Button variant="link" className="text-secondary-foreground px-0 mx-0">
          bendigiorgio
        </Button>
      ),
      image:
        "https://cdn.midjourney.com/ecf66e28-c3b6-4e0b-8b74-661731bbc609/0_1.png",
    },
    quote: (
      <p>
        As a full-stack developer constantly on the lookout for efficient and
        robust solutions, I cannot express enough how time saving Maison
        Components have for my{" "}
        <Button variant="link" className="text-secondary-foreground px-0 mx-0">
          SaaS
        </Button>{" "}
        applicaton.
      </p>
    ),
  },
};
