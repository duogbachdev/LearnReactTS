import React from "react";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import TopBarMenu from "../main/TopBarMenu";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div className="logo">
          <img
            className="h-[40px]"
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
            alt=""
          />
        </div>
        <div className="inputSeach relative">
          <input
            className="bg-[#EFF0F5] w-[1000px] px-3 py-2 mb-1"
            type="text"
            placeholder="Search in Lazada..."
          />
          <button className="bg-[#F57224] px-3 py-3 text-white absolute right-0">
            <BsSearch />
          </button>
          <ul className="flex text-[12px] text-[#757575] font-semibold absolute">
            <li className="hover:text-[#f57224] cursor-pointer border-r px-2 border-r-[#757575]">
              sengoku astray gundam hg
            </li>
            <li className="hover:text-[#f57224] cursor-pointer border-r px-2 border-r-[#757575]">
              srarbucks
            </li>
            <li className="hover:text-[#f57224] cursor-pointer border-r px-2 border-r-[#757575]">
              lego transformers
            </li>
            <li className="hover:text-[#f57224] cursor-pointer border-r px-2 border-r-[#757575]">
              rubik 7 x 7
            </li>
            <li className="hover:text-[#f57224] cursor-pointer px-2">xiaomi redmi k50 pro 5g</li>
          </ul>
        </div>
        <div className="cart">
          <img
            className="h-[26px]"
            src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png"
            alt=""
          />
        </div>
        <div className="logoBank">
          <img
            className="h-[45px]"
            src="https://icms-image.slatic.net/images/ims-web/0030a6f2-1ede-40ab-a107-2f6bda40de8d.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center gap-10 mb-3">
        <div
          className="flex items-center gap-3 text-sm text-[#0f136d] font-semibold ml-20
        "
        >
          <p>Categories</p>
          <BsChevronDown />
        </div>
        <ul className="flex gap-10">
          <li className="flex gap-3 items-center">
            <img
              className="rounded-full w-[25px]"
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png"
              alt=""
            />
            <p className="text-sm">LazMall</p>
          </li>
          <li className="flex gap-3 items-center">
            <img
              className="rounded-full w-[25px]"
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png"
              alt=""
            />
            <p className="text-sm">Vouchers</p>
          </li>
          <li className="flex gap-3 items-center">
            <img
              className="rounded-full w-[25px]"
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png"
              alt=""
            />
            <p className="text-sm">Top Up & eCoupon</p>
          </li>
          <li className="flex gap-3 items-center">
            <img
              className="rounded-full w-[25px]"
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png"
              alt=""
            />
            <p className="text-sm">LazGlobal</p>
          </li>
        </ul>
      </div>
      <div className="topbarmenu">
        <TopBarMenu />
      </div>
    </>
  );
};

export default Header;
