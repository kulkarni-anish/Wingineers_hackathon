import React from "react";
import "../styles/product.scss";
const Product = ({cards,setCards}) => {
  console.log(cards)
  return <div>{cards.name}</div>;
};

export default Product;
