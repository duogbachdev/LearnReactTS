import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/phimmoi.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="bg-[#202020]">
        <img className="w-[250px] px-2 py-3" src={logo} alt="" />
      </div>
      <ul className="flex gap-20 items-center text-[#c0c0c0ea] text-base leading-5">
        <li className=" hover:text-[#408bea]">
          <Link to={""}>Phimmoi</Link>
        </li>
        <li className=" hover:text-[#408bea]">
          <Link to={""}>Phim lẻ</Link>
        </li>
        <li className=" hover:text-[#408bea]">
          <Link to={""}>Phim bộ</Link>
        </li>
        <li className=" hover:text-[#408bea]">
          <Link to={""}>Thể loại</Link>
        </li>
        <li className=" hover:text-[#408bea]">
          <Link to={""}>Quốc gia</Link>
        </li>
      </ul>

      <div className=" relative">
        <input className="w-[300px] bg-[#2D2D2D] text-white py-2 pl-3 rounded-md" type="text" placeholder="Tìm kiếm..." />
        <button className="text-white absolute right-3 top-3 cursor-pointer">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
