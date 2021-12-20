import React, { useEffect } from "react";
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
import "../styles/aboutmf.scss";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(name, calories, value) {
  return { name, calories, value };
}

export default function BasicTable() {
  const [manufacturerData,setManufacturerData]=useState()
  const [data,setData]=useState()
  
  
  useEffect(()=>{
    const tokenString = sessionStorage.getItem('user_id');
    const userId = JSON.parse(tokenString);
    fetch('http://127.0.0.1:8000/accounts/userinfo/'+userId)
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  useEffect(()=>{
    const tokenEmail =sessionStorage.getItem('email');
    const userEmail =JSON.parse(tokenEmail);
    const formData =new FormData()
    formData.append('email',userEmail)
    fetch('http://127.0.0.1:8000/clients/emailchecker/', {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json().then((json) =>setManufacturerData(json)))
      .catch((err) => console.log(err));
  },[])
  let rows=[createData("Contact", "", "loadig"),
  createData("Email", "", "loading"),
  createData("Address", "", "loading"),
  createData("Experience", "", "loading"),]
  if(data){rows = [
    createData("Contact", "", data.phone_number),
    createData("Email", "", data.email),
    createData("Address", "","loading"),
    createData("Experience", "","loading"),
  ]
  if(manufacturerData){
    rows = [
      createData("Contact", "", data.phone_number),
      createData("Email", "", data.email),
      createData("Address", "",manufacturerData.address),
      createData("Experience", "",manufacturerData.experience),
    ]

  }
}
  
    const classes = useStyles();
  return (
    <TableContainer component={Paper} className="table">
      <Table className={classes.table} aria-label="simple table">
        <TableBody className="table-body">
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                align="center"
                component="th"
                scope="row"
                className="table-text1"
              >
                {row.name}
              </TableCell>
              <TableCell
                align="center"
                component="th"
                scope="row"
                className="table-text1"
              >
                {row.calories}
              </TableCell>
              <TableCell align="center" className="table-text2">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
