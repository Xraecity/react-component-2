import React from "react";
import styled from "styled-components";
import { ImageProps } from "./Img.types";

const StyledImage = styled.div<ImageProps>`
  border: 2px solid #ccc;
  padding: 10px;
  display: inline-block;
  border-radius: 3px;
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Image: React.FC<ImageProps> = ({ src, alt, backgroundColor, disabled, ...props }) => {
  return (
    <StyledImage backgroundColor={backgroundColor} disabled={disabled} {...props}>
      <img src={src} alt={alt} />
    </StyledImage>
  );
};

export default Image;
