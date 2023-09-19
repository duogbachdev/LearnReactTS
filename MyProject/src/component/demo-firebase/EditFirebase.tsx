import { db } from "../../firebase/config.firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFirebase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const docRef = doc(db, "product", id);
  useEffect(() => {
    const showDataID = async () => {
      if (id) {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name);
          setPrice(data.price);
        }
      }
    };
    showDataID();
  }, [id]);
  const handelUpdate = async (event: any) => {
    event.preventDefault();
    await updateDoc(docRef, {
      name,
      price,
      createAt: serverTimestamp(),
    });
    navigate("/firebase");
  };
  return (
    <div>
      <form className="mt-10" onSubmit={handelUpdate}>
        <p>name</p>
        <input
          value={name}
          className="border border-gray-500"
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <p>price</p>
        <input
          value={price}
          className="border border-gray-500"
          type="number"
          name="price"
          placeholder="enter your price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button className="w-[100px] bg-green-500 text-white font-bold mt-5"> add data </button>
      </form>
    </div>
  );
};

export default EditFirebase;
