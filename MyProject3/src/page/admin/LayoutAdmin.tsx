import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div className="flex gap-[300px]">
      <div className="bg-gray-600  px-8 py-8 h-screen w-1/6">
        <h1 className=" uppercase text-2xl mb-5">DuogBachDev</h1>
        <div>
          <Link to="">Dashboard</Link>
        </div>
        <div>
          <Link to="product"> product</Link>
        </div>
        <div>
          <Link to="addproduct">add product</Link>
        </div>

        <div>
          <Link to="product/:id/edit">edit product</Link>
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
