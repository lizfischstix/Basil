// IncomeTable.js
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const IncomeTable = ({ data, onUpdate, onDelete }) => {

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((income) => (
            <TableRow
              key={income._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
              >{`${income.createdAt}`}</TableCell>
              <TableCell align="right">{`${income.description}`}</TableCell>
              <TableCell align="right">${`${income.amount}`}</TableCell>
              <TableCell align="right">
                <EditIcon sx={{ marginRight: '5px' }} color="primary"  onClick={(event) => onUpdate(event, income._id)}>Edit</EditIcon>
                <DeleteIcon sx={{ marginLeft: '5px' }}  onClick={(event) => onDelete(event, income._id)}>Delete</DeleteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeTable;
