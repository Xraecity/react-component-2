import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  test("should be visible", () => {
    render(
      <HeroImage
        imageUrl="https://example.com/image.jpg"
        altText="Example Image"
      />,
    );
    const imageElement = screen.getByAltText("Example Image");
    expect(imageElement).toBeInTheDocument();
  });

  test("background color should change when disabled", () => {
    render(
      <HeroImage
        imageUrl="https://example.com/image.jpg"
        altText="Example Image"
        disabled
        backgroundColor="#cccccc"
      />,
    );
    const imageElement = screen.getByAltText("Example Image");
    expect(imageElement).toHaveStyle("background-color: #cccccc");
  });
});
