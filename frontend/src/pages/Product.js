import React from "react";
import "../styles/product.scss";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import Typography from "@mui/material/Typography";
import CardForProduct from "../components/CardForProduct";
import ManufacturerDetails from "../components/ManufacturerDetails";
import OrderDetails from "../components/OrderDetails";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
const Product = ({ cards, setCards }) => {
  console.log(cards);
  return (
    <div>
      <NavBar />
      <HomeNav />
      <CardForProduct />
      <div className="bottomDiv">
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
              <Typography className="productDetails-black">
                Experience
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className="productDetails-brown">25 years</Typography>
            </Grid>
          </Grid>
        </div>
        <Routes>
          <Route path="/" element={<OrderDetails />}></Route>
          <Route path="/ssss" element={<ManufacturerDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Product;
