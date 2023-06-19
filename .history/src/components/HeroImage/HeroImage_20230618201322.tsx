import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";



const StyledHeroImage = styled.img<HeroImageProps>`
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  background-color: ${(props) => props.backgroundColor};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  altText,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledHeroImage
      src={imageUrl}
      alt={altText}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );
};

export default HeroImage;
