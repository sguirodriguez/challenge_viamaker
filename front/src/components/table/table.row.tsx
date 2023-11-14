import { ReactNode } from 'react';
import { TRTable } from './table.styles';

const TableRow = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <TRTable
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
      className={className}
    >
      {children}
    </TRTable>
  );
};

export default TableRow;
