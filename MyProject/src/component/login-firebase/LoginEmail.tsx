import { auth, db } from "../firebase/config.firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginEmail = () => {
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
    displayName: "",
  });
  const navigate = useNavigate();
  const userRef = collection(db, "users");
  const [userInfor, setUserInfor] = useState<any>("");
  useEffect(() => {
    onAuthStateChanged(auth, (currenAuth) => {
      console.log(currenAuth);
      if (currenAuth) {
        setUserInfor(currenAuth);
      } else {
        setUserInfor("");
      }
    });
  }, [userRef]);
  const handelCreateUSer = async (e: any) => {
    e.preventDefault();
    try {
      const created: any = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth?.currentUser, {
        displayName: values.displayName,
      });
      setUserInfor(created);
      await addDoc(userRef, {
        email: values.email,
        id: created.user.uid,
        password: values.password,
        createAt: serverTimestamp(),
      });
      navigate("/sigin-firebase");
    } catch (error) {
      console.log(error);
    }
  };
  const handelIputChangle = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handeLogin = async (e: any) => {
    e.preventDefault();
    const created: any = await signInWithEmailAndPassword(auth, values.email, values.password);
    setUserInfor(created);
    navigate("/sigin-firebase");
  };

  const handelSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <form className="mt-10" onSubmit={handelCreateUSer}>
        <p>display name</p>
        <input
          className="border border-gray-500"
          type="text"
          name="displayName"
          placeholder="enter your display name"
          onChange={handelIputChangle}
        />
        <br />
        <p>name</p>
        <input
          className="border border-gray-500"
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={handelIputChangle}
        />
        <br />
        <p>price</p>
        <input
          className="border border-gray-500"
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={handelIputChangle}
        />
        <br />
        <button type="submit" className="w-[100px] bg-green-500 text-white font-bold mt-5">
          {" "}
          sign up user{" "}
        </button>
      </form>

      <form className="mt-10" onSubmit={handeLogin}>
        <p>name</p>
        <input
          className="border border-gray-500"
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={handelIputChangle}
        />
        <br />
        <p>pass word</p>
        <input
          className="border border-gray-500"
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={handelIputChangle}
        />
        <br />
        <button type="submit" className="w-[100px] bg-green-500 text-white font-bold mt-5">
          {" "}
          sign in user{" "}
        </button>
      </form>

      <button onClick={handelSignOut} className="w-[100px] bg-green-500 text-white font-bold mt-5">
        {" "}
        log out user{" "}
      </button>
      <div className="text-right">
        <p>{userInfor?.displayName}</p>
      </div>
    </div>
  );
};

export default LoginEmail;
