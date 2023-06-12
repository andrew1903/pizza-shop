import React from "react";

import { Link } from "react-router-dom";

import logoSvg from "../assets/svg/site-logo.svg";
import shoppingCart from "../assets/svg/shopping-cart.svg";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>the tastiest pizza in the universe</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₴</span>
            <div className="button__delimiter"></div>
            <img src={shoppingCart} alt="Shopping cart" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
