import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.button<RadioButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  background-color: ${(props) => ( props.disabled ? "#cccccc" : props.backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  text,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledRadioButton
      disabled={disabled}
      backgroundColor={backgroundColor}>


      {...props}
      {text}
    </StyledRadioButton>
  );
};

export default StyledRadioButton;