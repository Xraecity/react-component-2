import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "./Button";

describe("Tests for Button component", () => {
  test("Button should be visible", () => {
    const { getByText } = render(<Button text="Test Button" />);
    const buttonElement = getByText("Test Button");
    expect(buttonElement).toBeVisible();
  });

  test("Button should change background color when disabled", () => {
    const { getByText } = render(<Button text="Test Button" disabled />);
    const buttonElement = getByText("Test Button");
    expect(buttonElement).toHaveStyle("background-color: #cccccc");
  });
});
