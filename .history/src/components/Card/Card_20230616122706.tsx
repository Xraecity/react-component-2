import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  border: 2px solid #ccc;
  padding: 10px;
  height: 50px;
  width: 100px;
  whitespace: "pre-line";
  margin: 30px 30px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Card: React.FC<CardProps> = ({
  text,
  backgroundColor,
  disabled,
  ...props
}) => {
  return (
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledCard>
  );
};

export default Card;
