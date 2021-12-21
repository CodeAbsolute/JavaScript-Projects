import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* Amazon logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      {/* search bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* navbar items */}
      <div className="header__nav">
        <div className="header__option">
          {/* Option for user to sign in if already not */}
          <span className="header__optionLine1">Hello Guest</span>
          <span className="header__optionLine2">Sign In</span>
        </div>
        <div className="header__option">
          {/* To check the orders page */}
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          {/* To check out amazon prime  */}
          <span className="header__optionLine1">Your </span>
          <span className="header__optionLine2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasketIcon" />
            <span className="header__optionBasketCount header__optionLine2">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
