import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAQva1hdM0W6e3gRLmZ3X5p4TVXA21QJE",
  authDomain: "clone-shope.firebaseapp.com",
  projectId: "clone-shope",
  storageBucket: "clone-shope.appspot.com",
  messagingSenderId: "543439269896",
  appId: "1:543439269896:web:6c1bfa8481059aaff8a1bd",
  measurementId: "G-PNZBRTY1YV",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
