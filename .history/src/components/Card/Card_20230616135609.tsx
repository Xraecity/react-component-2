import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  border: 2px solid #ccc;
  padding: 10px;
  flex: 1;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`;

const CardText = styled.span`
  color: #fff;
  font-weight: 300;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid ${props.theme.border.cool}`};
`;

const Card: React.FC<CardProps> = ({
  title,
  text,
  backgroundColor,
  disabled,
  ...props
}) => {
  return (
    <ParentContainer>
      <StyledCard>
        <StyledPhoto src="https://s3-us-west-1.amazonaws.com/welcome_apples/posts/1_card/apple.jpg" />
        backgroundColor={backgroundColor}
        disabled={disabled}
        <Title>{title}</Title>
        <CardText>{text} </CardText>
      </StyledCard>
    </ParentContainer>
  );
};

export default Card;
