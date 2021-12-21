import React from "react";
import Cards from "../components/productCard";
import Card from "../components/productCard";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import Grid from "@mui/material/Grid";
import HomeImg from "../components/HomeImg";
const Home = ({cards,setCards}) => {
  return (
    <div>
      <NavBar />
      <HomeNav />
      <HomeImg />
      <Grid container spacing={2}>
        <Grid item xs={3}>
      <Cards cards={cards} setCards={setCards}  />
      </Grid>
      </Grid>
    </div>
  );
};

export default Home;
