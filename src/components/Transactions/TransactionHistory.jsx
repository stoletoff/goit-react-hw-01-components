import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHeadWrapper,
  TableRow,
  TableColumnName,
  TableBody,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <TableHeadWrapper>
      <TableRow>
        <TableColumnName>Type</TableColumnName>
        <TableColumnName>Amount</TableColumnName>
        <TableColumnName>Currency</TableColumnName>
      </TableRow>
    </TableHeadWrapper>
    {items.map(({ id, type, amount, currency }) => (
      <TableBody key={id}>
        <TableRow>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRow>
      </TableBody>
    ))}
  </TransactionTable>
);
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };