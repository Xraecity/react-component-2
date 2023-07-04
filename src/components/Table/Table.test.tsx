import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";
import "@testing-library/jest-dom";

describe("Tests for Table Component", () => {
  test("Button should be visible", () => {
    render(<Table />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeVisible();
  });

  test("Button should change background color when disabled", () => {
    render(<Table disabled />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveStyle("background-color: #cccccc");
  });
});
