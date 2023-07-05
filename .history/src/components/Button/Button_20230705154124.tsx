import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: ${(props) => (props.disabled ? '#ffffff' : '#ffffff')};
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  &:hover {
    background-color: ${(props) => (props.disabled ? null : '#55bd90')};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === 'small'
        ? '5px 23px 6px'
        : props.size === 'medium'
        ? '7px 28px 9px'
        : '12px 28px 14px'};
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  disabled,
  label,
  backgroundColor,
  ...props
}) => {
  const buttonBackground = disabled ? '#cccccc' : backgroundColor;

  return (
    <StyledButton
      type="button"
      disabled={disabled}
      backgroundColor={buttonBackground}
      size={size}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
