export interface TableProps {
  header?: string;
  rows?: TableRowProps[];
  footer?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface TableRowProps {
  cells: string[];
}
