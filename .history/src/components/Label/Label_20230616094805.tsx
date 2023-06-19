import React from "react";
import styled from "styled-components";
import { LabelProps } from "./label.types";

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  color: ${(props) => (props.disabled ? "#999999" : "inherit")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Label: React.FC<LabelProps> = ({ children, disabled, ...rest }) => {
  return (
    <StyledLabel disabled={disabled} {...rest}>
      {children}
    </StyledLabel>
  );
};

export default Label;
