import React from "react";
import styled from "styled-components";
import { ImageProps } from "./Img.types";

const StyledImage = styled.div<ImageProps>`
  border: 2px solid #ccc;
  padding: 10px;
  display: inline-block;
  border-radius: 3px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  backgroundColor,
  disabled,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        backgroundColor,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    />
  );
};

export default Image;
