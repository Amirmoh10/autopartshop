import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="logoBox" to="/">
        <div className="logoImage"></div>
      </Link>
      <div className="navigation">
        <Link className="homeNav" to="/">
          Home
        </Link>
        <Link className="aboutUsNav" to="/">
          About Us
        </Link>
        <Link className="shopNav" to="/shop">
          Store
        </Link>
        <Link className="contactNav" to="/shop">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
