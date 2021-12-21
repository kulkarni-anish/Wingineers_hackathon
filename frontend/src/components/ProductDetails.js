import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "../styles/product.scss";
const ProductDetails = () => {
  return (
    <div className="productDetails">
      <Grid container className="productDetails-container">
        <Grid item xs={12}>
          <Typography className="productDetails-headings">
            Product Details
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black">Colors</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className="productDetails-brown">
            Blue,Brown,Black
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black">Quantity</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className="productDetails-brown">500</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black">Address</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className="productDetails-brown">
            DJ Sanghvi,Vile parle,Mumbai-400090
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black">Experience</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className="productDetails-brown">25 years</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
