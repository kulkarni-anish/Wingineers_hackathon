import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../styles/productCard.scss";
export default function ImgMediaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 275 }} className="card">
        <Link to="product">
          <div className="card-div">
            <CardMedia
              className="card-img"
              component="img"
              alt="product image"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_oVsscb1BUNmPCCdKjML77YCXlQUPvF40w&usqp=CAU"
            />
          </div>
          <CardContent className="card-div2">
            <Typography
              className="card-div2-tittle"
              gutterBottom
              variant="h5"
              component="div"
            >
              apple
            </Typography>
            <div className="card-div2-desc">
              <Typography variant="body2" color="text.secondary">
                two lines about the product description to check overflow of the
                description and whatever
              </Typography>
            </div>
            <Typography className="card-div2-price">$999</Typography>
            <Typography>50 pcs. min. order</Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
