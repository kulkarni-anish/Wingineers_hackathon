import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/CardForProduct.scss";
export default function CardForProduct({cards,setCards}) {
  console.log(cards)
  return (
    <Grid container>
      <Card sx={{ maxWidth: 1200 }} className="card">
        <Grid item xs={4}>
          <div className="card-div">
            <CardMedia
              className="card-img"
              component="img"
              alt="product image"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_oVsscb1BUNmPCCdKjML77YCXlQUPvF40w&usqp=CAU"
            />
          </div>
        </Grid>
        <Grid item xs={8} className="space">
          <CardContent className="card-div2">
            <Typography
              className="card-div2-tittle"
              gutterBottom
              variant="h5"
              component="div"
            >
              {cards.name}
            </Typography>
            <div className="card-div2-desc">
              <Typography variant="body2" color="text.secondary">
                {cards.description}
              </Typography>
            </div>
            <Typography className="card-div2-price">Rs{cards.sell_price}</Typography>
            <Typography>{cards.lower_limit} min. order</Typography>
            <Typography>Dispatch in a week</Typography>
            <Typography>{cards.stock_left}</Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
