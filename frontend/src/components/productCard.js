import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../styles/productCard2.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Product from "../pages/Product";
import { ProdContext } from "../context/useprod";
export default function ImgMediaCard({ cards, setCards }) {
  const [prod, setProd] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/clients/productdetails/")
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, []);

  return (
    <div>
      <>
<<<<<<< HEAD
      
=======
>>>>>>> 56e1e90beb2eeda7546748b5e6131d112e317ae7
        {prod ? (
          prod.map((item) => (
            <div className="productcard2">
              {console.log(cards)}
              <Card
                sx={{ maxWidth: 275 }}
                id={item.id}
                onClick={() => {
                  setCards(item);
                }}
                className="card2"
              >
                <Link to={item.name}>
                  <div className="card2-div">
                    <CardMedia
                      className="card2-img"
                      component="img"
                      alt="product image"
                      height="200"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_oVsscb1BUNmPCCdKjML77YCXlQUPvF40w&usqp=CAU"
                    />
                  </div>
                  <CardContent className="card2-div2">
                    <Typography
                      className="card2-div2-tittle"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {item.name}
                    </Typography>
                    <div className="card2-div2-desc">
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </div>
                    <Typography className="card2-div2-price">
                      Rs{item.sell_price}
                    </Typography>
                    <Typography>{item.lower_limit} pcs. min. order</Typography>
                    <Typography>{item.upper_limit} pcs. max. order</Typography>
                  </CardContent>
                </Link>
              </Card>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    </div>
  );
}
