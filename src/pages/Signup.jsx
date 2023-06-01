import React, { useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import Navlogin from "../components/Navlogin";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Signup() {
  const schema = yup.object().shape({
    email: yup.string().email().required("Please input your email"),
    password: yup.string().required("Please input your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const handleSignIn = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
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
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h1 className="form__title">Register</h1>
        <input type="email" name="email" placeholder="Email Address" {...register("email")} />
        <span>{errors.email?.message}</span>
        <input type="password" name="password" placeholder="Password" {...register("password")} />
        <span>{errors.password?.message}</span>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
