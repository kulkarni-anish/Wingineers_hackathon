import React from "react";
import Grid from "@mui/material/Grid";
import otp from "../styles/otp.scss";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/login.scss";
const Otp = () => {
  return (
    <div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="loginDiv-headings ">verify OTP</Typography>
        </Grid>

        <Grid item xs={2}>
          <Button className="arrowButton">
            <Link to="/otp/withEmail">
              <KeyboardArrowDownIcon />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography className="loginDiv-text  ">Email-id</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button className="arrowButton">
            <Link to="/otp/withPhone">
              <KeyboardArrowDownIcon />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography className="loginDiv-text ">phone no.</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Otp;
