import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Navlogin from "../components/Navlogin";
import "./Login.css";

function Login() {
  // const [isLogged, setIsLogged] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
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
      <Navlogin />
      <form>
        <h1 className="form__title">Login</h1>
        <input
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Email Address"
          required
          onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
        />
        <input
          type="password"
          name="password"
          value={formValues.password}
          placeholder="Password"
          required
          maxLength={20}
          minLength={6}
          onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
