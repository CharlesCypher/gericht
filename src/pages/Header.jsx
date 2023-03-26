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
                <Link to="/home">Home</Link>
              </li>
              <li className="header__link">
                <Link to="/pages">Pages</Link>
              </li>
              <li className="header__link">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="header__link">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="header__link">
                <Link to="/landing">Landing</Link>
              </li>
            </ul>
          </nav>
          <nav className="header__nav header__nav__right">
            <ul className="header__navLinks">
              <li className="header__link">
                <Link to="/login">Log In / Registration</Link>
              </li>
              <li className="header__link">
                <Link to="/booktable">Book Table</Link>
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
