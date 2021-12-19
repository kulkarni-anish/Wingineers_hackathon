import React from "react";
import login_img from "../assets/login_img.jpeg";
import Grid from "@mui/material/Grid";
const SideImg = () => {
  return (
    <div>
      <div className="img_div">
        <img src={login_img} className="img" />
      </div>
    </div>
  );
};

export default SideImg;
