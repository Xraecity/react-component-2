import { MouseEventHandler } from "react";

export interface TextProps {
  text: string;
  backgroundColor: string;
  disabled: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}