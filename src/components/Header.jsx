import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const toggleNavBar = () => {};

  const handleSignOut = async () => {
    await signOut(firebaseAuth);
    navigate("/login");
  };

  return (
    <div className="header__wrapper">
      <div className="padding__global">
        <header className="header__header">
          <Link to={"/"}>
            <h3 className="header__logo">Gerícht</h3>
          </Link>
          <nav className="header__nav header__nav__left" role={"navigation"}>
            <ul className="header__navLinks">
              <li className="header__link">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="header__link">
                <Link to={"/"}>Pages</Link>
              </li>
              <li className="header__link">
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li className="header__link">
                <Link to={"/"}>Blog</Link>
              </li>
              <li className="header__link">
                <Link to={"/"}>Landing</Link>
              </li>
            </ul>
          </nav>

          <nav className="header__nav header__nav__right">
            <ul className="header__navLinks">
              {/* <li className="header__link">
                <Link to={"/login"}>Log In</Link>
              </li> */}
              <li className="header__link">
                <Link to={"/login"} onClick={handleSignOut}>
                  Log Out
                </Link>
              </li>
              {/* <li className="header__link">table(s)</li> */}
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
