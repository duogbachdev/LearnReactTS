import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config.firebase";
import { useNavigate } from "react-router-dom";
interface IDAta {
  id: string;
  name: string;
  price: number;
}
const FirebaseLearn = () => {
  const navigate = useNavigate();
  const colRefDb = collection(db, "product");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [productData, setProductData] = useState<IDAta[]>([]);
  useEffect(() => {
    // getDocs(colRefDb).then((snapshot) => {
    //   let data : any[] = []
    //   snapshot.docs.forEach((product) => {
    //     data.push({
    //       id: product.id,
    //       ...product.data()
    //       })
    //   })
    //   setProductData(data)
    // })
    onSnapshot(colRefDb, (snapshot) => {
      let data: any[] = [];
      snapshot.docs.forEach((product) => {
        data.push({
          id: product.id,
          ...product.data(),
        });
      });
      setProductData(data);
    });
  }, []);

  const handelAddData = (event: any) => {
    event.preventDefault();
    addDoc(colRefDb, {
      name,
      price,
      createAt: serverTimestamp(),
    }).then(() => {
      console.log("create success");
    });
  };
  const handelRemoveData = async (id: string) => {
    const checkRemoveID = doc(db, "product", id);
    await deleteDoc(checkRemoveID);
    console.log("delete success");
  };
  return (
    <div>
      {productData?.map((data) => (
        <div key={data?.id}>
          <p>{data.name}</p>
          <p>{data.price}</p>
          <button
            onClick={() => handelRemoveData(data?.id)}
            className="w-[100px] bg-red-500 text-white font-bold mt-5"
          >
            {" "}
            delete data{" "}
          </button>

          <button
            onClick={() => navigate(`/data/${data?.id}/edit`)}
            className="w-[100px] bg-blue-500 text-white font-bold mt-5"
          >
            {" "}
            edit data{" "}
          </button>
        </div>
      ))}
      <form className="mt-10" onSubmit={handelAddData}>
        <p>name</p>
        <input
          className="border border-gray-500"
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <p>price</p>
        <input
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

export default FirebaseLearn;
