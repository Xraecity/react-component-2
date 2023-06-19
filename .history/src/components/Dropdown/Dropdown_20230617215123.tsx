import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<DropdownProps>`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: #000;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  backgroundColor,
  disabled,
  ...props
}) => {
  return (
    <StyledDropdown
      defaultValue={defaultValue}
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
