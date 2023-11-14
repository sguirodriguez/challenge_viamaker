import styled from 'styled-components';
import { TableBodyProps, TableHeadProps } from './table.types';


export const TableContainer = styled.div`
  width: 100%;
  display: flex;

  table {
    border-collapse: collapse;
  }

  thead tr {
    top: 0;
    position: sticky !important;
    background-color: white;
  }

  tbody {
    border-top: 1px solid ${({theme})=>theme.colors.table};
  }

  .fixHead {
    max-height: 350px;
    overflow: auto;
    padding-bottom: 20px;
    border-top: 1px solid ${({theme})=>theme.colors.table};

    th:first-of-type {
      padding-left: 10px;
    }
  }

  .width-full {
    width: 100%;
  }
`;

export const TRTable = styled.tr`
  th:first-of-type {
    padding-left: 10px;
    border-radius: 12px 0 0 12px;
  }

  th:last-of-type {
    border-radius: 0 12px 12px 0;
  }

  &:hover {
    background-color: ${({theme})=>theme.colors.gray};
  }
`;

export const TableHeadContainer = styled.th<TableHeadProps>`
  width: ${({ width }) => width}px;
  text-align: ${({ align }) => align};
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;

  @media (max-width: ${({ hiddenWidth }) => hiddenWidth}px) {
    display: none;
  }
`;

export const TableBodyContainer = styled.th<TableBodyProps>`
  text-align: ${({ align }) => align};
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  padding-right: ${({ paddingRight }) => paddingRight}px;
  font-weight: 400 !important;

  @media (max-width: ${({ hiddenWidth }) => hiddenWidth}px) {
    display: none;
  }
`;
