import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Company from "./components/companyform";
import Profile from "./pages/manufacturerProfile";
import Manufacturer from "./components/manufactureform";
import Product from "./pages/Product";
import MyCart from "./pages/MyCart";
import Register from "./pages/register";
import CompanyPage from "./pages/companyPage";
import ManufacturerPage from "./pages/manufacturerPage";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import useToken from "./context/useToken";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import LoginWith from "./components/loginWith";

function App() {
  const [cards, setCards] = useState(1);
  useEffect(() => {
    console.log(cards);
  }, [cards]);
  const PrivateWrapper = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken ? <Outlet /> : <Navigate to="/login" />;
  };

  const TypeWrapper = () => {
    const typestring = sessionStorage.getItem("type");
    const userType = JSON.parse(typestring);
    //console.log(userType === "company");
    return userType === "company" ? (
      <Outlet />
    ) : (
      <Navigate to="/manufacturer" />
    );
  };

  const ManufacturerWrapper = () => {
    const typestring = sessionStorage.getItem("type");
    const userType = JSON.parse(typestring);
    console.log(userType === "manufacturer");
    return userType === "manufacturer" ? (
      <Outlet />
    ) : (
      <Navigate to="/company" />
    );
  };
  const [product, setProduct] = useState();
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/home/:id"
            element={<Product cards={cards} setCards={setCards} />}
          />
          <Route
            exact
            path="/home"
            element={<Home cards={cards} setCards={setCards} />}
          />
          <Route path="/myCart" element={<MyCart />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route exact path="/" element={<PrivateWrapper />}>
            <Route exact path="/" element={<TypeWrapper />}></Route>
          </Route>

          <Route exact path="/" element={<PrivateWrapper />}>
            <Route exact path="/" element={<ManufacturerWrapper />}>
              <Route path="/manufacturer/*" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
