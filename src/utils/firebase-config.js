// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FB_API_KEY,
  authDomain: "gericht-e0296.firebaseapp.com",
  projectId: "gericht-e0296",
  storageBucket: "gericht-e0296.appspot.com",
  messagingSenderId: "295213953649",
  appId: "1:295213953649:web:755099c8d82153e43821d0",
  measurementId: "G-KP2PEZ4809",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
