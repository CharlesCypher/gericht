import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const toggleNavBar = () => {};

  return (
    <div className="header__wrapper">
      <div className="padding__global">
        <header className="header__header">
          <h3 className="header__logo">Gerícht</h3>
          <nav className="header__nav header__nav__left" role={"navigation"}>
            <ul className="header__navLinks">
              <li className="header__link">
                <a href="#">Home</a>
              </li>
              <li className="header__link">
                <a href="#">Pages</a>
              </li>
              <li className="header__link">
                <a href="#">Contact Us</a>
              </li>
              <li className="header__link">
                <a href="#">Blog</a>
              </li>
              <li className="header__link">
                <a href="#">Landing</a>
              </li>
            </ul>
          </nav>
          <nav className="header__nav header__nav__right">
            <ul className="header__navLinks">
              <li className="header__link">
                <Link to="/LoginSection">Log In / Registration</Link>
                {/* <a href="#">Log In / Registration</a> */}
              </li>
              <li className="header__link">
                <a href="#">Book Table</a>
              </li>
            </ul>
          </nav>
          <button className="hamburger" role={"navigation"} onClick={toggleNavBar}>
            <div className="bar bar__one"></div>
            <div className="bar bar__one"></div>
            <div className="bar bar__one"></div>
          </button>
        </header>
      </div>
    </div>
  );
}

export default Header;
