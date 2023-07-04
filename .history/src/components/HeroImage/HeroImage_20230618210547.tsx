import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

interface StyledHeroImageProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledHeroImage = styled.img<StyledHeroImageProps>`
  width: 90%;
  height: auto;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const StyledWrapper = styled.div<StyledHeroImageProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  altText,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      data-testid="hero-image-wrapper"
    >
      <StyledHeroImage
        src={imageUrl}
        alt={altText}
        backgroundColor={backgroundColor}
        disabled={disabled}
      />
    </StyledWrapper>
  );
};

export default HeroImage;
