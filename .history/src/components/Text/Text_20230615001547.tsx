import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.button<TextProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
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
  background-color: ${(props) => (props.disabled ? "#cccccc" : "ffffff")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Text: React.FC<TextProps> = ({
  size,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledText onClick={onClick} disabled={disabled} size={size} {...props}>
      {text}
    </StyledText>
  );
};

export default Text;
