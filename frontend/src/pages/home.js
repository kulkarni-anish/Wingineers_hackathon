import React from "react";
import Cards from "../components/productCard";
import Card from "../components/productCard";
import HomeNav from "../components/HomeNav";
import NavBar from "../components/navBar";
import HomeImg from "../components/HomeImg";
const Home = ({cards,setCards}) => {
  return (
    <div>
      <NavBar />
      <HomeNav />
      <HomeImg />
      <Cards cards={cards} setCards={setCards}  />
    </div>
  );
};

export default Home;
