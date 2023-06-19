export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  defaultValue?: string;
  backgroundColor?: string;
  disabled?: boolean;
}
