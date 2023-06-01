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
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Signup />} />
            <Route path={"*"} element={<div>PAGE NOT FOUND :( 🤖</div>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
