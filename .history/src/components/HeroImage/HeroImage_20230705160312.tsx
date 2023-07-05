import React from 'react';
import styled from 'styled-components';
import { type HeroImageProps } from './HeroImage.types';

interface StyledHeroImageProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledHeroImage = styled.img<StyledHeroImageProps>`
  width: 90%;
  height: auto;
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled ? '#cccccc' : props.backgroundColor};
  cursor: ${(props) => (props.disabled !== undefined && props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled !== undefined && props.disabled? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled !== undefined && props.disabled ? 'none' : 'auto')};
`;

const StyledWrapper = styled.div<StyledHeroImageProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor};
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

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  altText,
  backgroundColor,
  disabled,
  headerText,
}) => {
  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      data-testid="hero-image-wrapper"
    >
      {headerText && <HeaderText>{headerText}</HeaderText>}
      <StyledHeroImage
        src={imageUrl}
        alt={altText}
        backgroundColor={backgroundColor}
        disabled={disabled}
      />
    </StyledWrapper>
  );
};

export default HeroImage;
