import "../styles/HomeNav.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChatIcon from "@material-ui/icons/Chat";
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
        <ShoppingCartIcon className="HomeNav-div-icons" />
        <AccountCircleIcon className="HomeNav-div-icons" />
      </div>
    </div>
  );
}
