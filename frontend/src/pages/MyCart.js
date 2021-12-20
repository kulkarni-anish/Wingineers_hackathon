import React from "react";
import CartCard from "../components/CartCard";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../styles/MyCart.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const MyCart = () => {
  return (
    <div className="outermostDiv">
      <NavBar />
      <HomeNav />
      <div className="outerDiv">
        <div className="Cart-div">
          <Grid container>
            <Grid item={6} className="Cart-div-icon">
              <ShoppingCartIcon className="Cart-div-header" />
            </Grid>
            <Grid item={6}>
              <Typography className="Cart-div-header">My Cart</Typography>
            </Grid>
          </Grid>
        </div>
        <Grid container className="card-container">
          <Grid item xs={12}>
            <CartCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MyCart;
