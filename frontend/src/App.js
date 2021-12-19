import "./App.css";
import Login from "./pages/login";
import Company from "./components/companyform";
import Profile from "./pages/manufacturerProfile";
<<<<<<< HEAD
import Company from "./components/companyform";
import OtpWithEmail from "./components/otpWithEmail";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import CompanyPage from "./pages/companyPage";
import ManufacturerPage from "./pages/manufacturerPage";


=======
import Manufacturer from "./components/manufactureform";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
>>>>>>> 340226dcdda5992bb17cc55ed1e0b747e2fbe699
function App() {
  return (
    <div>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='' element={<CompanyPage />}></Route>
=======
          <Route path="/login/*" element={<Login />} />
          <Route path="/Profile/*" element={<Profile />} />
>>>>>>> 340226dcdda5992bb17cc55ed1e0b747e2fbe699
        </Routes>
      </Router>
    </div>
  );
}

export default App;
