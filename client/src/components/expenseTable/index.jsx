// ExpenseTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import currencyFormater from '../../utils/currencyFormater';
import { pink } from "@mui/material/colors";

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
            <TableRow
              key={expense._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {expense.createdAt}
              </TableCell>
              <TableCell align="right">{`${expense.description}`}</TableCell>
              <TableCell align="right">
                {currencyFormater(expense.amount)}
              </TableCell>
              <TableCell align="right">{`${expense.category}`}</TableCell>
              <TableCell align="right">
                <EditIcon
                  sx={{ marginRight: "5px" }}
                  onClick={(event) => onUpdate(event, expense._id)}
                >
                  Edit
                </EditIcon>
                <DeleteIcon
                  sx={{ marginLeft: "5px", color: pink[500] }}
                  onClick={(event) => onDelete(event, expense._id)}
                >
                  Delete
                </DeleteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;
