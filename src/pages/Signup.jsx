import React, { useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./form.module.css";

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
    <>
      <div className={styles.login}>
        <div className={styles.login__left}>
          <div className={styles.img__container}>
            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1683803168320-ab1162844e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.login__right}>
          <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
            <h1 className={styles.form__title}>Register</h1>
            <input type="email" name="email" placeholder="Email" {...register("email")} />
            <p className={styles.errors}>{errors.email?.message}</p>
            <input type="password" name="password" placeholder="Password" {...register("password")} />
            <p className={styles.errors}>{errors.password?.message}</p>
            <input className={styles.login__btn} type="submit" value="Sign up" aria-label="sign up" />
            <p className={styles.alt}>
              Already have an account?
              <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
