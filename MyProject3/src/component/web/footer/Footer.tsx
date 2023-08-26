import React from "react";
import image from "../../../assets/img/phimmoi.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between px-5 py-5 text-xs border-b">
        <div className="w-1/6">
          <img className="mb-5" src={image} alt="" />
          <p className="text-[#636363] font-semibold">
            <span className="text-[#408BEA]">Phimmoi </span>- Trang xem phim Online với giao diện
            mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các
            website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
          </p>
        </div>

        <ul className="flex flex-col gap-3 text-[#408BEA]">
          <li className="text-base text-white">Phim mới</li>
          <li>Phim Khoa Học</li>
          <li>Phim Kinh Dị</li>
          <li>Phim Chiếu Rạp</li>
          <li>Phim Hình Sự</li>
          <li>Phim Hành Động</li>
        </ul>

        <ul className="flex flex-col gap-3 text-[#408BEA]">
          <li className="text-base text-white">Phim hay</li>
          <li>Phim Âu Mỹ</li>
          <li>Phim Hàn Quốc</li>
          <li>Phim Trung Quốc</li>
          <li>Phim Nhật Bản</li>
          <li>Phim Thái Lan</li>
        </ul>

        <ul className="flex flex-col gap-3 text-[#408BEA]">
          <li className="text-base text-white">Thông tin</li>
          <li>Giới thiệu</li>
          <li>Liên hệ chúng tôi</li>
          <li>Điều khoản sử dụng</li>
          <li>Chính sách riêng tư</li>
          <li>Khiếu nại bản quyền</li>
        </ul>
      </div>

      <div className="flex justify-between  px-5  items-center text-white py-10">
        <p className="text-xs">© Phimmoi</p>
        <div className="flex gap-5 items-center text-white">
          <p className=" cursor-pointer hover:text-[#408BEA]">
            <BsFacebook />
          </p>
          <p className=" cursor-pointer hover:text-[#408BEA]">
            <BsTwitter />
          </p>
          <p className=" cursor-pointer hover:text-[#408BEA]">
            <BsInstagram />
          </p>
          <p className=" cursor-pointer hover:text-[#408BEA]">
            <BsYoutube />
          </p>
          <p className=" cursor-pointer px-2 py-2 bg-[#9b9797] rounded-md">
            <BsFillArrowUpSquareFill />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
