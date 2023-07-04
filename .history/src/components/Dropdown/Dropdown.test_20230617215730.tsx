import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dropdown from "./Dropdown";

describe("Tests for Dropdown component", () => {
  test("Dropdown should be visible", () => {
    const { getByTestId } = render(<Dropdown />);
    const dropdownElement = getByTestId("Dropdown-id");
    expect(dropdownElement).toBeVisible();
  });

  test("Dropdown should change background color when disabled", () => {
    const { getByTestId } = render(<Dropdown disabled />);
    const dropdownElement = getByTestId("Dropdown-id");
    expect(dropdownElement).toHaveStyle("background-color: #cccccc");
  });
});
