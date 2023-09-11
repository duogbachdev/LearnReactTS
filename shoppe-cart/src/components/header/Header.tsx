import React from "react";
import { BsFacebook, BsInstagram, BsCartDash, BsSearch } from "react-icons/bs";
import logoShoppe from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div className="py-3 bg-gradient-to-b from-[#f6422ef8] to-[#FE6233] mb-8">
      <div className="flex justify-between items-center gap-5 container mx-auto text-xs mb-5">
        <ul className="flex justify-between items-center gap-5 font-semibold text-white ">
          <li>Kênh Người Bán</li>
          <li>Trở thành Người bán Shopee</li>
          <li>Tải ứng dụng</li>
          <li>Kết nối</li>
          <li className="flex justify-between items-center gap-5">
            <BsFacebook />
            <BsInstagram />
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-5 font-semibold text-white ">
          <li>Thông báo</li>
          <li>Hỗ Trợ</li>
          <li>Tiếng Việt</li>
          <li>Đăng Ký</li>
          <li>Đăng Nhập</li>
        </ul>
      </div>

      <div className="container mx-auto flex justify-between">
        <img className="h-[50px]" src={logoShoppe} alt="" />

        <div>
          <div className=" relative mb-2">
            <input
              className="w-[1000px] py-2 pl-5 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
            />
            <button className="absolute right-1 top-1 text-white bg-[#fb5533] py-2 px-4 rounded-sm">
              <BsSearch />
            </button>
          </div>
          <ul className="flex gap-5 text-sm text-white px-5">
            <li>Áo 1k</li>
            <li>Đồ 1k</li>
            <li>Dép</li>
            <li>iPhone 14 Pro Max</li>
            <li>Điện Thoại Giá Rẻ 1k</li>
            <li>Ố</li>
            <li>Balo</li>
            <li>Son</li>
            <li>Giày</li>
            <li>Đồ 1k Free Ship</li>
            <li>Lò Xo Tập Cơ Tay</li>
            <li>Quần Ống Loe</li>
          </ul>
        </div>

        <p className="text-white text-[30px]">
          <BsCartDash />
        </p>
      </div>
    </div>
  );
};

export default Header;
