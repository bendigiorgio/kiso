import * as React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import {
  AspectRatio,
  Button,
  Card,
  Input,
  Label,
  ScrollArea,
  Separator,
  Tabs,
  TabsList,
  Loader,
} from "../index";

describe("Common render tests", () => {
  it("renders AspectRatio without crashing", () => {
    render(<AspectRatio />);
  });

  it("renders Button without crashing", () => {
    render(<Button />);
  });

  it("renders Card without crashing", () => {
    render(<Card />);
  });

  it("renders Input without crashing", () => {
    render(<Input />);
  });

  it("renders Label without crashing", () => {
    render(<Label />);
  });

  it("renders ScrollArea without crashing", () => {
    render(<ScrollArea />);
  });

  it("renders Separator without crashing", () => {
    render(<Separator />);
  });

  it("renders Tabs without crashing", () => {
    render(<Tabs />);
  });

  it("renders TabsList without crashing", () => {
    render(
      <Tabs>
        <TabsList />
      </Tabs>
    );
  });

  it("renders Loader without crashing", () => {
    render(<Loader />);
  });
});
