import "./App.css";
import Login from "./pages/login";
import Profile from "./pages/manufacturerProfile";
import Company from "./components/companyform";
import OtpWithEmail from "./components/otpWithEmail";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import CompanyPage from "./pages/companyPage";
import ManufacturerPage from "./pages/manufacturerPage";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='' element={<CompanyPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
