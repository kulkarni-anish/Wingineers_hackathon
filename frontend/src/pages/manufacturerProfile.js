import React from "react";
import About from "../components/aboutManufacturer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BasicTable from "../components/aboutManufacturer";
import Timeline from "../components/Timeline";
import ProductForm from "../components/ProductForm";
import NavBar from "../components/navBar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../styles/manufacturerProfile.scss";
import profile_img from "../assets/profile_img..jpeg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarRateIcon from "@material-ui/icons/StarRate";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ContactMailIcon from "@material-ui/icons/ContactMail";
function Profile() {
  return (
    <div className="manufacturerProfile">
      <NavBar />
      <Grid item xs={12} className="manufacturerProfile-profile">
        <AccountCircleIcon className="manufacturerProfile-icon" />
        My Profile
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={5}>
          <img src={profile_img} className="manufacturerProfile-image"></img>
          <Typography className="manufacturerProfile-text">Review:</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography className="manufacturerProfile-text1">
            ManuName
          </Typography>
          <Typography className="manufacturerProfile-text2">
            Buisness Type
          </Typography>
          <Typography className="manufacturerProfile-text3">Address</Typography>
          <Typography className="manufacturerProfile-text4">
            Rating
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </Typography>
          <Grid container className="nav">
            <Grid item xs={4}>
              <Typography className="manufacturerProfile-link ">
                <ClearAllIcon className="manufacturerProfile-link-icon" />
                <Link to="timeline"> Timeline</Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className="manufacturerProfile-link">
                <ContactMailIcon className="manufacturerProfile-link-icon" />
                <Link to="about"> about</Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className="manufacturerProfile-link">
                <LocalOfferIcon className="manufacturerProfile-link-icon" />
                <Link to="product"> product</Link>
              </Typography>
            </Grid>
          </Grid>

          <Routes>
            <Route path="timeline" element={<Timeline />} />
            <Route path="about" element={<BasicTable />} />
            <Route path="product" element={<ProductForm />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
