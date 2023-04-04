import React, { useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import Navlogin from "../components/Navlogin";
// import Header from "../components/Header";

function Signup() {
  // const [isLogged, setIsLogged] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // setIsLogged(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, []);

  return (
    <div>
      <Navlogin login={"isLogged"} />
      <form>
        <h1 className="form__title">Register</h1>
        <input
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Email Address"
          onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
        />
        <input
          type="password"
          name="password"
          value={formValues.password}
          placeholder="Password"
          onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
        />
        <button onClick={handleSignIn}>Register</button>
      </form>
    </div>
  );
}

export default Signup;
