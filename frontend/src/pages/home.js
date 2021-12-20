import React from "react";
import Card from "../components/productCard";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import HomeImg from "../components/HomeImg";
const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeNav />
      <HomeImg />
      <Card />
    </div>
  );
};

export default Home;
