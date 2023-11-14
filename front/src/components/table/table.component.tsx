import { ReactNode } from 'react';
import * as Style from './table.styles';

const TableComponent = ({
  header,
  body,
}: {
  header: ReactNode;
  body: ReactNode;
}) => {
  return (
    <Style.TableContainer>
      <table id="table-public-works" className="width-full">
        <thead className="fixHead">
          <tr>{header}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </Style.TableContainer>
  );
};

export default TableComponent;
