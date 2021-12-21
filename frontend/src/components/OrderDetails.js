import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/product.scss";
const OrderDetails = () => {
  return (
    <div className="productDetails">
      <Grid container className="productDetails-container">
        <Grid item xs={12}>
          <Typography className="productDetails-headings bold">
            YOUR ORDER:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">PRODUCT</Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">
            QUANTITY
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">COLOR</Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">CONTACT</Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">
            DELIVERY ADDRESS
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
