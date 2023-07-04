import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.div<RadioButtonProps>`
  /* Add your styling here */
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  text,
  backgroundColor,
  disabled,
  ...props
}) => {
  return (
    <StyledRadioButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {/* Add your RadioButton implementation */}
    </StyledRadioButton>
  );
};

export default RadioButton;
