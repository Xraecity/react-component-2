import { ReactNode, LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  text?: string;
}