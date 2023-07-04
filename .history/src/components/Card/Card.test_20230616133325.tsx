import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "./Card";

describe("Test for the Card Component", () => {
  test("Card should be visible", () => {
    const { getByText } = render(<Card text="Card Text" disabled={false} />);
    const cardElement = getByText("Card Text");
    expect(cardElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    const { getByText } = render(<Card text="Card Text" disabled={true} />);
    const cardElement = getByText("Card Text");
    expect(cardElement).toHaveStyle("background-color: #cccccc");
  });
});
