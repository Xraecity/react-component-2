import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<DropdownProps>`
  /* Add your styling here */
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
