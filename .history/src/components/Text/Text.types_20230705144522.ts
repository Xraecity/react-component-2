import { MouseEventHandler } from 'react';

export interface TextProps {
  text?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}
