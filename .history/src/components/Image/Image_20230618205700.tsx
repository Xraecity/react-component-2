import React from "react";
import styled from "styled-components";
import { ImageProps } from "./Image.types";

interface StyledImageProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const StyledWrapper = styled.div<StyledImageProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image: React.FC<ImageProps> = ({
  imageUrl,
  altText,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      data-testid="image-wrapper"
    >
      <StyledImage
        src={imageUrl}
        alt={altText}
        backgroundColor={backgroundColor}
        disabled={disabled}
      />
    </StyledWrapper>
  );
};

export default Image;
