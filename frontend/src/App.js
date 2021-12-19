import "./App.css";
import Login from "./pages/login";
import Company from "./components/companyform";
import Profile from "./pages/manufacturerProfile";
import Manufacturer from "./components/manufactureform";
import CompanyPage from "./pages/companyPage";
import ManufacturerPage from "./pages/manufacturerPage";
import { BrowserRouter as Router, Link, Routes, Route,Outlet,Navigate } from "react-router-dom";
import useToken from "./context/useToken";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import LoginWith from "./components/loginWith";



function App() {
  const PrivateWrapper = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken ? <Outlet /> : <Navigate to="/login" />;
  };

  const TypeWrapper=()=>{
    const typestring=sessionStorage.getItem('type')
    const userType = JSON.parse(typestring);
    console.log(userType==="company")
    return userType==="company"? <Outlet />:<Navigate to='/manufacturer' />
  };

  const ManufacturerWrapper=()=>{
    const typestring=sessionStorage.getItem('type')
    const userType = JSON.parse(typestring);
    console.log(userType==="manufacturer")
    return userType==="manufacturer"? <Outlet />:<Navigate to='/company' />
  };

  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/Profile/*" element={<Profile />} />
          
          <Route exact path='/' element={<PrivateWrapper/>}>
            <Route exact path='/' element={<TypeWrapper/>}>
                <Route exact path='/company' element={<CompanyPage/>}/>
              </Route>
          </Route>

          <Route exact path='/' element={<PrivateWrapper/>}>
            <Route exact path='/' element={<  ManufacturerWrapper/>}>
              <Route path="/manufacturer" element={<ManufacturerPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
