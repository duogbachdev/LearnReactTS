import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postproducts } from "../../../api/product.servcies";

const AddProduct = () => {
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [releaseyear, setReleaseYear] = useState<string>("");
  const navigate = useNavigate();
  const handelSubmit = async (event: any) => {
    event.preventDefault();
    await postproducts({ image, title, releaseyear } as any);
    alert("Add Products Success");
    navigate("/admin/product");
  };
  return (
    <div>
      <div className="px-8 py-8 h-screen">
        <h1 className="text-3xl uppercase font-semibold mb-8">Add Products</h1>
        <form onSubmit={handelSubmit}>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image
            </label>
            <input
              onChange={(event) => setImage(event.target.value)}
              type="text"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Release Year
            </label>
            <input
              onChange={(event) => setReleaseYear(event.target.value)}
              type="text"
              id="releaseyear"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 uppercase focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            AddNew
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
