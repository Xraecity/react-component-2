export interface TableProps {
  header?: string;
  rows?: TableRowProps[];
  footer?: string;
}

export interface TableRowProps {
  cells: string[];
}
