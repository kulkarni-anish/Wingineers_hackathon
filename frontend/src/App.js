import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Company from "./components/companyform";
import Profile from "./pages/manufacturerProfile";
import Manufacturer from "./components/manufactureform";
import Product from "./components/Product";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/product" element={<Product />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/Profile/*" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
