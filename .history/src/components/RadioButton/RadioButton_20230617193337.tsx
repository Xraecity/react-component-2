import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.button<RadioButtonProps>`
  border: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  gap:8px;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${(props) => ( props.disabled ? "#cccccc" : props.backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Input = styled.input`
  margin: 0;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  children,
  text,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledRadioButton disabled={disabled} backgroundColor={backgroundColor}>
        <Input type="radio" disabled={disabled} {...props} />
      {children}
      {text}
    </StyledRadioButton>
  );
};

export default RadioButton;