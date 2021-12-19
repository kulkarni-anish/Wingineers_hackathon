import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../styles/timeline.scss";
const Timeline = () => {
  return (
    <div className="timelineDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="timelineDiv-header">Pending orders</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="timelineDiv-header">
            Completed orders
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timeline;
