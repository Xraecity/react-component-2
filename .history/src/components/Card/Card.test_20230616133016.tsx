import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "./Card";

describe("Test for the Card Component", () => {
  test("Card should be visible", () => {
    const { getByText } = render(<Card text="Test Text" disabled={false} />);
    const cardElement = getByText("Test Text");
    expect(cardElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    const { getByText } = render(<Card text="Test Text" disabled={true} />);
    const cardElement = getByText("Test Text");
    expect(cardElement).toHaveStyle("background-color: #cccccc");
  });
});
