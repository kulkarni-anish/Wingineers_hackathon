import React from "react";
import "../styles/product.scss";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import CardForProduct from "../components/CardForProduct";
const Product = () => {
  return (
    <div>
      <NavBar />
      <HomeNav />
      <CardForProduct />
    </div>
  );
};

export default Product;
