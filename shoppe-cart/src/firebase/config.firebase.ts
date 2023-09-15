import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE2wvN2i6sqOvuz4EWs-yTY2uYYnUr9BQ",
  authDomain: "shoppe-clone-d082f.firebaseapp.com",
  projectId: "shoppe-clone-d082f",
  storageBucket: "shoppe-clone-d082f.appspot.com",
  messagingSenderId: "361567874739",
  appId: "1:361567874739:web:8e8692ea3c16c1b30c4ac6",
  measurementId: "G-VDT730PNSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
