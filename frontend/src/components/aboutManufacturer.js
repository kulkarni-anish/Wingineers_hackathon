import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { orange } from "@material-ui/core/colors";
import "../styles/aboutmf.scss"

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  }
});

function createData(name, calories, value) {
  return { name, calories, value };
}



export default function BasicTable() {
    const [number,setNumber]=useState(9324251849)
    const [email,setEmail]=useState("patwtanish10@gmail.com")
    const [address,setAddress]=useState("Andheri(W)")
    const [years,setYears]=useState(25)
    const rows = [
        createData("Contact", 159, number),
        createData("Email", 237, email),
        createData("Address", 262, address),
        createData("Experience", 305, years)
      ];
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="table">
      <Table className={classes.table} aria-label="simple table">
        <TableBody className="table-body">
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row" className="table-text">
                {row.name}
              </TableCell>
              <TableCell align="center" className="table-text">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
