import React from 'react';
import styled from 'styled-components';
import { type ImageProps } from './Image.types';

interface StyledImageProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledImage = styled.img<StyledImageProps>`
  width: 90%;
  height: auto;
  cursor: ${(props) =>
    props.disabled !== undefined && props.disabled ? 'not-allowed' : 'default'};
  opacity: ${(props) =>
    props.disabled !== undefined && props.disabled ? 0.5 : 1};
  pointer-events: ${(props) =>
    props.disabled !== undefined && props.disabled ? 'none' : 'auto'};
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled
      ? '#cccccc'
      : props.backgroundColor};
`;

const StyledWrapper = styled.div<StyledImageProps>`
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled
      ? '#cccccc'
      : props.backgroundColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.h2`
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
`;

const Image: React.FC<ImageProps> = ({
  imageUrl,
  altText,
  backgroundColor,
  disabled,
  headerText,
}) => {
  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      data-testid="image-wrapper"
    >
      {headerText !== undefined && headerText !== '' && (
        <HeaderText>{headerText}</HeaderText>
      )}
      <StyledImage
        src={imageUrl}
        alt={altText}
        backgroundColor={backgroundColor}
        disabled={disabled}
      />
    </StyledWrapper>
  );
};

export default Image;
