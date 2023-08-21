import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";
import "@testing-library/jest-dom";

describe("Badge component", () => {
  test("renders without crashing", () => {
    render(<Badge>Default Badge</Badge>);
    const badgeElement = screen.getByText("Default Badge");
    expect(badgeElement).toBeInTheDocument();
  });

  test("applies className prop", () => {
    render(<Badge className="custom-badge-class">Badge</Badge>);
    const badgeElement = screen.getByText("Badge");
    expect(badgeElement).toHaveClass("custom-badge-class");
  });

  test("renders default variant", () => {
    render(<Badge>Default Badge</Badge>);
    const badgeElement = screen.getByText("Default Badge");
    expect(badgeElement).toHaveClass("bg-primary");
  });

  test("renders secondary variant", () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);
    const badgeElement = screen.getByText("Secondary Badge");
    expect(badgeElement).toHaveClass("bg-secondary");
  });

  test("renders destructive variant", () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>);
    const badgeElement = screen.getByText("Destructive Badge");
    expect(badgeElement).toHaveClass("bg-destructive");
  });

  test("renders outline variant", () => {
    render(<Badge variant="outline">Outline Badge</Badge>);
    const badgeElement = screen.getByText("Outline Badge");
    expect(badgeElement).toHaveClass("text-foreground");
  });
});
