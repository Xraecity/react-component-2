import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";

describe("Tests for the Label Component", () => {
  test("renders the label correctly and is visible", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    const labelElement = getByText("Test Label");
    expect(labelElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    const { getByText } = render(<Label disabled>Disabled Label</Label>);
    const labelElement = getByText("Disabled Label");
    expect(labelElement).toHaveStyle("color: #cccccc");
  });
});
