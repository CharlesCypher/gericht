import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./form.module.css";

function Login() {
  const [err, setErr] = useState(null);
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
  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      setErr("");
      navigate("/");
    } catch (error) {
      setErr(error.message);
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
              src="https://res.cloudinary.com/cyher/image/upload/v1689622673/photo-1506368249639-73a05d6f6488_qggd9v.jpg"
              alt="An image of a restaurant kitchen"
            />
          </div>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.login__right}>
          <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
            <h1 className={styles.form__title}>Welcome</h1>
            <input type="email" name="email" placeholder="Email" {...register("email")} />
            <p className={styles.errors}>{errors.email?.message}</p>
            <input type="password" name="password" placeholder="Password" {...register("password")} />
            <p className={styles.errors}>{errors.password?.message}</p>
            <input className={styles.login__btn} type="submit" value="login" aria-label="login" />
            <p className={styles.alt}>
              Don't have an account?
              <Link to={"/register"}>Register</Link>
            </p>
            {err && <p className={styles.errors}>{err}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
