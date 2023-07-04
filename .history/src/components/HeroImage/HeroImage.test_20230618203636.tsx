import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";
import "@testing-library/jest-dom";

describe("HeroImage Component", () => {
  test("should be visible", () => {
    render(<HeroImage imageUrl="image2.jpg" altText="Example Image" />);
    const divElement = screen.getByTestId("hero-image-wrapper");
    const imageElement = screen.getByAltText("Example Image");
    expect(divElement).toBeVisible();
    expect(imageElement).toBeVisible();
  });

  test("background color should change when disabled", () => {
    render(
      <HeroImage
        imageUrl="image2.jpg"
        altText="Example Image"
        disabled
        backgroundColor="#cccccc"
      />,
    );
    const imageElement = screen.getByAltText("Example Image");
    expect(imageElement).toHaveStyle("background-color: #cccccc");
  });
});
