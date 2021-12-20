import React from "react";
import Cards from "../components/productCard";
const Home = ({cards,setCards}) => {
  return (
    <div>
      <Cards cards={cards} setCards={setCards}  />
    </div>
  );
};

export default Home;
