import React from 'react';
import styled from 'styled-components';
import { type TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 50%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled
      ? '#cccccc'
      : props.backgroundColor};
  cursor: ${(props) =>
    props.disabled !== undefined && props.disabled ? 'not-allowed' : 'default'};
  opacity: ${(props) =>
    props.disabled !== undefined && props.disabled ? 0.5 : 1};
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled
      ? '#cccccc'
      : props.backgroundColor};
  pointer-events: ${(props) =>
    props.disabled !== undefined && props.disabled ? 'none' : 'auto'};
`;

const TableHeader: React.FC<{ header?: string }> = ({ header }) => (
  <thead>
    <tr>
      <th>{header}</th>
    </tr>
  </thead>
);

const TableRow: React.FC<{ cells: string[] }> = ({ cells }) => (
  <tr>
    {cells.map((cell, index) => (
      <td key={index}>{cell}</td>
    ))}
  </tr>
);

const TableFooter: React.FC<{ footer?: string }> = ({ footer }) => (
  <tfoot>
    <tr>
      <td>{footer}</td>
    </tr>
  </tfoot>
);

const Table: React.FC<TableProps> = ({
  header,
  rows,
  footer,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledTable backgroundColor={backgroundColor} disabled={disabled}>
      {header !== undefined && <TableHeader header={header} />}

      <tbody>
        {rows?.map((row, index) => (
          <TableRow key={index} cells={row.cells} />
        ))}
      </tbody>
      {footer !== undefined && <TableFooter footer={footer} />}
    </StyledTable>
  );
};

export default Table;
