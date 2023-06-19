import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";
import '@testing-library/jest-dom';

describe("Tests for the Image Component", () => {
  test("Image should be visible", () => {
    render(<Image imageUrl="image2.jpg" altText="Example Image" />);
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
      />
    );
    const imageElement = screen.getByAltText("Example Image");
    const divElement = screen.getByTestId("hero-image-wrapper");
    expect(divElement).toHaveStyle("background-color: #cccccc");
    expect(imageElement).toHaveStyle("background-color: #cccccc");
  });
});
