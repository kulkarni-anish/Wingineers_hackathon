import "../styles/HomeNav.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChatIcon from "@material-ui/icons/Chat";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function HomeNav() {
  return (
    <div className="HomeNav">
      <div className="searchDiv">
        <input
          className="HomeNav-search"
          placeholder="What are you looking for?"
        ></input>
      </div>
      <div className="HomeNav-icon-div">
        <ChatIcon className="HomeNav-div-icons" />
        <div className="HomeNav-div-icons">
          <Link to="/myCart">
            <ShoppingCartIcon className="HomeNav-div-icons" />
          </Link>
        </div>
        <AccountCircleIcon className="HomeNav-div-icons" />
      </div>
    </div>
  );
}
