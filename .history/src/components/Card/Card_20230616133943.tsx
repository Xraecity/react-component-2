import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  border: 2px solid #ccc;
  padding: 10px;
  whiteSpace: "pre-line";
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const CardText = styled.span`
  display: block;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



const Card: React.FC<CardProps> = ({ title,text, backgroundColor, disabled, ...props }) => {
  return(
  <ParentContainer>
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}>
      <CardText>{title}{text} </CardText>
    </StyledCard>
  </ParentContainer>);
};

export default Card;