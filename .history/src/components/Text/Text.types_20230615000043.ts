import { MouseEventHandler } from "react";

export interface TextProps {
  text: string;
  backgroundColor: string;
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}