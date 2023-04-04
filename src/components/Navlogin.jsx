import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navlogin(props) {
  const navigate = useNavigate();
  return (
    <header>
      <Link to={"/"}>
        <h3 className="logo">Gericht</h3>
      </Link>
      <button
        className="header__btn"
        onClick={() => {
          navigate(props.login ? "/login" : "/register");
        }}
      >
        {props.login ? "Login" : "Register"}
      </button>
    </header>
  );
}

export default Navlogin;
