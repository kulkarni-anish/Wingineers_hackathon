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
import ClearAllIcon from '@material-ui/icons/ClearAll';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ContactMailIcon from '@material-ui/icons/ContactMail';


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
        createData("Contact","" , number),
        createData("Email","" , email),
        createData("Address", "", address),
        createData("Experience","", years)
      ];
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="table">
      
      <Table className={classes.table} aria-label="simple table">
      <TableHead >
          <TableRow >
            <TableCell align="center" className="table-head" className="table-timeline"><ClearAllIcon/>Timeline</TableCell>
            <TableCell align="center" className="table-head" className="table-about"><ContactMailIcon/>About</TableCell>
            <TableCell align="center" className="table-head" className="table-product"><LocalOfferIcon/>Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row" className="table-text" className="table-text1">
                {row.name}
              </TableCell>
              <TableCell align="center" component="th" scope="row" className="table-text" className="table-text1">
                {row.calories}
              </TableCell>
              <TableCell align="center" className="table-text" className="table-text2">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
