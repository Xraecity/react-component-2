import React from 'react';
import styled from 'styled-components';
import { type RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.button<RadioButtonProps>`
  border: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled ? '#cccccc' : props.backgroundColor};
  opacity: ${(props) => (props.disabled !== undefined && props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled !== undefined && props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled !== undefined && props.disabled ? 'none' : 'auto')};
`;

const Input = styled.input`
  margin: 0;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  text,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledRadioButton disabled={disabled} backgroundColor={backgroundColor}>
      <Input type="radio" disabled={disabled} {...props} />
      {text}
    </StyledRadioButton>
  );
};

export default RadioButton;
