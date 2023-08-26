import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="mb-3 text-[#5C5C5C] font-semibold">Năm phát hành</h2>
        <ul className="grid grid-cols-4 gap-5">
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2023
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2022
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2021
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2020
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2019
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2018
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2017
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2016
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2015
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2014
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2013
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2012
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2011
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2010
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2009
          </li>
          <li className="bg-[#000000a8] text-[#5C5C5C] text-center font-semibold py-1 rounded-md hover:text-white hover:bg-[#408BEA] cursor-pointer">
            2008
          </li>
        </ul>
      </div>

      <div>
        <div className="group flex h-[100px] gap-5 bg-[#0f0f0f] hover:bg-[#000000] cursor-pointer">
          <img
            className="h-auto"
            src="https://phimmoiyyy.net/wp-content/uploads/2023/08/Ragnarok.jpg"
            alt=""
          />
          <div>
            <p className="text-white py-3">Ragnarok: Hoàng Hôn Của Chư Thần Phần 3</p>
            <div className="flex gap-8 items-center text-[#424040] font-semibold">
              <p className="flex gap-3 items-center border border-[#424040] px-3 rounded-md">
                <BsFillStarFill className="group-hover:text-[#408BEA]"/>
                <span>6</span>
              </p>
              <p>2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
