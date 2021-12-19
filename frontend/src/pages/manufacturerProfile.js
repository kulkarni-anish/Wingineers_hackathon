import React from "react"
import About from "../components/aboutManufacturer"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BasicTable from "../components/aboutManufacturer";
import NavBar from "../components/navBar";
import "../styles/manufacturerProfile.scss";
import profile_img from "../assets/profile_img..jpeg"
function Profile(){
    return(
        <div className="manufacturerProfile">
            <NavBar />
            <Grid item xs={12} className="manufacturerProfile-profile">
                My Profile
            </Grid>
            <Grid container >
                <Grid item xs={12} sm={5}>
                    <img src={profile_img} className="manufacturerProfile-image"></img>
                    <Typography className="manufacturerProfile-text">Review:</Typography>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Typography className="manufacturerProfile-text-1">CompanyName</Typography>
                    <Typography className="manufacturerProfile-text ">Buisness Type</Typography>
                    <Typography className="manufacturerProfile-text ">Address</Typography>
                    <BasicTable />
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile