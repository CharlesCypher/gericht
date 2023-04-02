import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gericht__gericht">
        <Router>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/login"} element={<Login />} />
            <Route exact path={"/register"} element={<Signup />} />
            <Route exact path={"*"} element={<div>PAGE NOT FOUND :( 🤖</div>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
