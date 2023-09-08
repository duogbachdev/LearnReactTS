import React, { useEffect, useState } from "react";
import { Iproducts } from "../../../interface/product";
import { Deleteproducts, getAllData } from "../../../api/product.servcies";
import { Link, useNavigate } from "react-router-dom";

const ListProduct = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState<Iproducts[]>([]);
  useEffect(() => {
    const mapData = async () => {
      const { data } = await getAllData();
      setItem(data);
    };
    mapData();
  }, [item]);
  const handelRemove = async (id: number) => {
    await Deleteproducts(id);
  };
  return (
    <div className="px-8 py-8 h-screen">
      <h1 className="text-3xl uppercase font-semibold mb-8">List Products</h1>
      <Link to="/admin/addproduct"><button>Them San Pham</button></Link>
      <button onClick={()=> navigate("/admin/addproduct")}>Add Product</button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Release Year
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {item?.map((newItem: Iproducts) => (
              <tr
                key={newItem.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {newItem.image}
                </th>
                <td className="px-6 py-4">{newItem.title}</td>
                <td className="px-6 py-4">{newItem.releaseyear}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-10">
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </p>
                    <p
                      onClick={() => handelRemove(newItem.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
