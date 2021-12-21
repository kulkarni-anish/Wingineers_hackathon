import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../styles/timeline.scss";
import { Button } from "@mui/material";
import { useState } from "react";
const Timeline = () => {
  const [data,setData]=useState()
  const handleSubmit=()=>{
    const tokenString = sessionStorage.getItem('email');
    const userEmail = JSON.parse(tokenString);
    console.log(userEmail)
    const formData= new FormData()
    formData.append('email',userEmail)
    fetch('http://127.0.0.1:8000/clients/orderdata/',{
      method: "POST",
      body: formData,
    })
    .then((res) => res.json().then((json) => setData(json)))
    .catch((err) => console.log(err))
  }
  return (
    <div className="timelineDiv">
      <Grid container>
        <Grid item xs={12}>
          {data?
          <Typography className="timelineDiv-header">Pending orders {data[1]} {data[data[1]]} </Typography>
           :<p></p>}
        </Grid>
        <Grid item xs={12}>
          <Typography className="timelineDiv-header">
            <Button onClick={handleSubmit}>ViewOrders</Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timeline;
