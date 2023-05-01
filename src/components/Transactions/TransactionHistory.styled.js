import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
  width: 450px;
  border-radius: 10px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  overflow: hidden;
  text-align: center;
  font-weight: 500;
  
`;
export const TableHeadWrapper = styled.thead`
  width: 100%;
  background-color: #00bcd5ff;
`;
export const TableRow = styled.tr`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;
export const TableColumnName = styled.th`
  width: 100%;
  border: 1px solid rgb(227, 227, 227);
  padding: 10px;
  color: white;
`;
export const TableBody = styled.tbody`
  width: 100%;
  &:nth-child(odd) {
    background-color: #ecf1f3ff;
  }
`;
export const TableData = styled.td`
  padding: 10px;
  width: 100%;
  border: 1px solid rgb(227, 227, 227);
  color: grey;
`;
