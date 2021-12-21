import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import "../styles/product.scss";
const ManufacturerDetails = ({cards,useCards}) => {
  return (
    <div className="productDetails">
      <Grid container className="productDetails-container">
        <Grid item xs={12}>
          <Typography className="productDetails-headings">
            Manufacturer Details
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black">Name</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className="productDetails-brown">
            Manufacturer Name
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black">Contact</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className="productDetails-brown">9012345678</Typography>
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

export default ManufacturerDetails;
