import React from "react";
import homeImg from "../assets/homeImg.jpeg";
import "../styles/homeImg.scss";
const HomeImg = () => {
  return (
    <div className="homeImgDiv">
      <img src={homeImg} className="homeImgDiv-img"></img>
      <div class="centered">Pace up with your business with us!</div>
    </div>
  );
};

export default HomeImg;
