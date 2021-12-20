import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/CartCard.scss";
export default function CartCard() {
  return (
    <Grid container>
      <Card sx={{ maxWidth: 800 }} className="card">
        <Grid item xs={5}>
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
        <Grid item xs={7}>
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
            <Typography className="card-div2-price">
              Final amount: $999
            </Typography>
            <Typography className="card-div2-price">Quantity:</Typography>
            <Typography className="card-div2-price">color:</Typography>
            <Typography className="card-div2-price">Alter Details:</Typography>
          </CardContent>
          <Grid item>
            <CardActions>
              <Button>Place order</Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
