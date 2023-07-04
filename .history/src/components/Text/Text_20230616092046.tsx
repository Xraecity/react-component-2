import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledSpan = styled.span<TextProps>`
  border: 0;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Text: React.FC<TextProps> = ({
  size,
  disabled,
  text,
  backgroundColor,
  onClick,
  ...props
}) => {
  return (
    <StyledSpan
      type="text"
      onClick={onClick}
      disabled={disabled}
      size={size}
      backgroundColor={backgroundColor}
      {...props}
    >
      {text}
    </StyledSpan>
  );
};

export default Text;
