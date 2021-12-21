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
  return (
    <div>
      <NavBar />
      <HomeNav />
      <CardForProduct cards={cards} setCards={setCards}/>
      <div className="bottomDiv">
        <Grid container>
          <Grid item xs={7}>
            <ProductDetails cards={cards} setCards={setCards}/>
            <Routes>
              <Route path="/" element={<OrderDetails cards={cards}/>}></Route>
            </Routes>
            <Routes>
              <Route path="/" element={<ManufacturerDetails />}></Route>
            </Routes>
          </Grid>
          <Grid item xs={5}>
            <Routes>
              <Route path="/" element={<PlaceOrderDiv />}></Route>
            </Routes>
            <Routes>
              <Route path="/ccc" element={<ConfirmOrderDiv />}></Route>
            </Routes>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Product;
