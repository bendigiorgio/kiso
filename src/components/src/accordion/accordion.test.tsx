import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

describe("Accordion component", () => {
  test("renders without crashing", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="test">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const triggerElement = screen.getByText("Trigger");
    expect(triggerElement).toBeInTheDocument();
  });

  test("applies className prop", () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="test" className="custom-item-class">
          <AccordionTrigger className="custom-trigger-class">
            Trigger
          </AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const itemElement = screen
      .getByText("Trigger")
      .closest(".custom-item-class");
    const triggerElement = screen.getByText("Trigger");
    fireEvent.click(screen.getByText("Trigger"));
    const contentElement = screen.getByText("Content");
    expect(itemElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(triggerElement).toHaveClass("custom-trigger-class");
  });
});
