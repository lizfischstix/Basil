// ExpenseTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';

const StyledButton = styled('button')({
  padding: '8px',
  fontSize: '15px',
  margin: '0 10px', // Add margin between buttons
});

const ExpenseTable = ({ data, onUpdate, onDelete }) => {

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((expense) => (
            <TableRow key={expense._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{expense.createdAt}</TableCell>
              <TableCell align="right">{`${expense.description}`}</TableCell>
              <TableCell align="right">${`${expense.amount}`}</TableCell>
              <TableCell align="right">{`${expense.category}`}</TableCell>
              <TableCell align="right">
                <StyledButton className="bg-info" onClick={() => onUpdate(expense._id)}>Edit</StyledButton>
                <StyledButton className="bg-danger" onClick={() => onDelete(expense._id)}>Delete</StyledButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;
