import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// Content for the top and bottom navigation bar
export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  // handleAuthentication to log out user at the top nav bar
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <nav className="header__topNav">

        {/* Link used in place of a tag to prevent refresh when navigating between pages */}
        <Link to="/">
          <img
            className="header__topNav__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__topNav__search">
          <input className="header__topNav__searchInput" type="text" />
          <SearchIcon className="header__topNav__searchIcon" />
        </div>

        <div className="header__topNav">
          <Link to={!user && '/login'} className="header__topNav__link">
            <div onClick={handleAuthenticaton} className="header__topNav__option">
              <span className="header__topNav__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
              <span className="header__topNav__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>

          <Link to='/orders' className="header__topNav__link">
            <div className="header__topNav__option">
              <span className="header__topNav__optionLineOne">Returns</span>
              <span className="header__topNav__optionLineTwo">& Orders</span>
            </div>
          </Link>
        

          <div className="header__topNav__link">
            <span className="header__topNav__optionLineOne">Your</span>
            <br/>
            <span className="header__topNav__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout" className="header__topNav__link">
            <div className="header__topNav__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__topNav__optionLineTwo header__topNav__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>

      <nav className="header__bottomNav">
        <div className="header__bottomNav__left">
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>Gift Cards</span>
          <span>Registry</span>
          <span>Sell</span> 
        </div>

        <div className="header__bottomNav__right">
          <span>Amazon's response to Covid</span>
        </div>
      </nav>
    </div>
  );
}

