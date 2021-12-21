import React from "react";
import "../styles/PlaceOrderDiv.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { formik,useFormik } from "formik";
import * as Yup from "yup";

const PlaceOrderDiv = () => {
  return (
    <div className="container1">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="container1-bold">
            Estimated delivery:
          </Typography>
          <Typography className="container1-text">3-4 business days</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className="container1-bold">
          Ensure product quality
        </Typography>
        <Typography className="container1-text">Perfect condition</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="container1-bold">Track your order</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="container1-bold">Covid guidelines:</Typography>
        <Typography className="container1-text">
          Safe & Sanitized goods!
        </Typography>
      </Grid>
      <div className="buttonOuterDiv">
        <Grid item xs={12}>
          <Button variant="outlined" className="divButton">
            <ShoppingCartIcon /> ADD TO CART
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" className="divButton">
            <Link to="conform">PLACE ORDER </Link>
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default PlaceOrderDiv;
