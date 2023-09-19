import { auth } from "../firebase/config.firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";

const LoginGoogle = () => {
  const GoogleLOgin = new GoogleAuthProvider();
  const siginGoogle = async (checkLogin: any) => {
    const { user } = await signInWithPopup(auth, checkLogin);
    console.log(user);
  };
  return (
    <div>
      <button onClick={() => siginGoogle(GoogleLOgin)}>login with google</button>
    </div>
  );
};

export default LoginGoogle;
