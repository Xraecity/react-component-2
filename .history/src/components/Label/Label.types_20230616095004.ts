import { ReactNode, LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
  backgroundColor?: string;
}
