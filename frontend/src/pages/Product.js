import React from "react";
import "../styles/product.scss";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import Typography from "@mui/material/Typography";
import CardForProduct from "../components/CardForProduct";
import ManufacturerDetails from "../components/ManufacturerDetails";
import OrderDetails from "../components/OrderDetails";
import ProductDetails from "../components/ProductDetails";
import PlaceOrderDiv from "../components/PlaceOrderDiv";
import ConfirmOrderDiv from "../components/ConfirmOrderDiv";

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
        <Grid container>
          <Grid item xs={7}>
            <ProductDetails />
            <Routes>
              <Route path="/confirm" element={<OrderDetails />}></Route>
            </Routes>
            <Routes>
              <Route path="/place" element={<ManufacturerDetails />}></Route>
            </Routes>
          </Grid>
          <Grid item xs={5}>
            <Routes>
              <Route path="/place" element={<PlaceOrderDiv />}></Route>
            </Routes>
            <Routes>
              <Route path="/confirm" element={<ConfirmOrderDiv />}></Route>
            </Routes>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Product;
