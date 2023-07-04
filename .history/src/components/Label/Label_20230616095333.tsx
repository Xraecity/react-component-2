import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  color: ${(props) => (props ? "#ffffff" : "#ffffff")};
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
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
