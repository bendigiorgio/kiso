import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Tree, TreeItem } from "./tree-view"; // replace this with your component's file path
import "@testing-library/jest-dom";

describe("<Tree />", () => {
  it("renders without crashing", () => {
    render(<Tree />);
  });

  it("renders nested TreeItems", () => {
    const { getByText } = render(
      <Tree>
        <TreeItem label="Item 1" variant="folder">
          <TreeItem label="Nested Item 1" variant="file" />
        </TreeItem>
      </Tree>
    );
    expect(getByText("Item 1")).toBeInTheDocument();
  });

  it("allows selecting TreeItems", () => {
    const { getByText } = render(
      <Tree>
        <TreeItem label="Item 1" variant="folder" />
      </Tree>
    );
    fireEvent.click(getByText("Item 1"));
    expect(getByText("Item 1").closest("li")).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("allows expanding and collapsing TreeItems", () => {
    const { getByText } = render(
      <Tree>
        <TreeItem label="Item 1" variant="folder">
          <TreeItem label="Nested Item 1" variant="file" />
        </TreeItem>
      </Tree>
    );
    fireEvent.click(getByText("Item 1"));
    expect(getByText("Item 1").closest("li")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    fireEvent.click(getByText("Item 1"));
    expect(getByText("Item 1").closest("li")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});
