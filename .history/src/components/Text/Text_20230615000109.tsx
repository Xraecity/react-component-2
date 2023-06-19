import React from "react";
import { TextProps } from "./Text.types";

const TextComponent: React.FC<TextProps> = ({
  text,
  backgroundColor,
  disabled,
}) => {
  return (
    <div
      style={{
        backgroundColor: disabled ? "#cccccc" : backgroundColor,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        padding: "10px",
      }}
    >
      {text}
    </div>
  );
};

export default TextComponent;
