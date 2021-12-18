import React from "react";
import NavBar from "../components/navBar";
import LoginWith from "../components/loginWith";
import login_img from "../assets/login_img.jpeg";
import Grid from "@mui/material/Grid";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Register from "../components/register";
import "../styles/login.scss";
const Login = () => {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item sm={12} md={6} lg={6}>
          <Router>
            <Routes>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="/" element={<LoginWith />}></Route>
            </Routes>
          </Router>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <div className="img_div">
            <img src={login_img} className="img" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
