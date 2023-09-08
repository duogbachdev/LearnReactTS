import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const LayoutAdmin = () => {
  return (
    <div className="flex">
      <div className="bg-[#212B36]  px-8 py-8 h-screen w-1/6">
        <h1 className=" uppercase text-2xl mb-8 text-white">DuogBachDev</h1>
        <div className="flex items-center gap-5 text-white text-xl mb-10">
          <AiFillHome className=" cursor-pointer" />
          <Link to="" className=" uppercase">
            Dashboard
          </Link>
        </div>
        <div className="text-white mb-5">
          <Link to="product">Product Management</Link>
        </div>
        <div className="text-white mb-2">
          <Link to="addproduct">Add Product</Link>
        </div>
        <div className="text-white mb-2">
          <Link to="product/:id/edit">Edit Product</Link>
        </div>
      </div>
      <div className="w-5/6">
        <Outlet />
      </div>
      {/* hien thi thanh phan con ben trong router  */}
    </div>
  );
};

export default LayoutAdmin;




