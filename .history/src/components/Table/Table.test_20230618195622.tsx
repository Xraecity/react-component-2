import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Tests for Table Component", () => {
  test("renders correctly", () => {
    render(<Table />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    render(<Table disabled />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveStyle("background-color: #cccccc");
  });
});
