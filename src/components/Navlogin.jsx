import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navlogin({ isLogged }) {
  const navigate = useNavigate();
  return (
    <header>
      <Link to={"/"}>
        <h3 className="logo">Gericht</h3>
      </Link>
      {isLogged && <button onClick={() => navigate("/login")}>Signup</button>}
      {/* {!isLogged && (<button onClick={() => navigate("/register")}></button>)} */}
    </header>
  );
}

export default Navlogin;
