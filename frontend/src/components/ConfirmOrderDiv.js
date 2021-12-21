import React from "react";
import "../styles/PlaceOrderDiv.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const ConfirmOrderDiv = () => {
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
            CONFIRM ORDER
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default ConfirmOrderDiv;
