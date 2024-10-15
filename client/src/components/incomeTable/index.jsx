// IncomeTable.js
import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import currencyFormater from "../../utils/currencyFormater";
import { pink } from "@mui/material/colors";

const IncomeTable = ({ data, onUpdate, onDelete }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: ['green', '#902b68'],
      color: 'white',
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((income) => (
            <StyledTableRow 
              key={income._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
              >{`${income.createdAt}`}</TableCell>
              <TableCell align="right">{`${income.description}`}</TableCell>
              <TableCell align="right">
                {currencyFormater(income.amount)}
              </TableCell>
              <TableCell align="right">
                <EditIcon
                  sx={{ marginRight: "5px" }}
                  onClick={(event) => onUpdate(event, income._id)}
                >
                  Edit
                </EditIcon>
                <DeleteIcon
                  sx={{ marginLeft: "5px", color: pink[500] }}
                  onClick={(event) => onDelete(event, income._id)}
                >
                  Delete
                </DeleteIcon>
              </TableCell>
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeTable;
