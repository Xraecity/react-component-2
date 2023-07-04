import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Text from "./Text";

describe("TextComponent", () => {
  test("renders the text correctly", () => {
    const { getByText } = render(
      <Text text="Test Text" backgroundColor="#ffffff" disabled={false} />,
    );
    const textElement = getByText("Test Text");
    expect(textElement).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    const { getByText } = render(
      <Text text="Test Text" backgroundColor="#ffffff" disabled={true} />,
    );
    const textElement = getByText("Test Text");
    expect(textElement).toHaveStyle("background-color: #cccccc");
  });
});
