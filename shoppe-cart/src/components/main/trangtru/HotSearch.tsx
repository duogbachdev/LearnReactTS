import React from "react";
import { BsChevronRight } from "react-icons/bs";

const HotSearch = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 border-b border-b-gray-400 pb-3 mb-5">
        <h1 className="uppercase text-[#ee4d2d] text-lg cursor-pointer">Tìm kiếm hàng đầu</h1>
        <p className="flex items-center gap-2 text-[#ee4d2d] cursor-pointer">
          <span>Xem tất cả</span>
          <BsChevronRight />
        </p>
      </div>

      <div className="grid grid-cols-6 gap-5 px-5">
        <div className="cursor-pointer">
          <div className="relative mb-5">
            <img
              src="https://down-vn.img.susercontent.com/file/2d4674fe6aa97a7ef75db3ef8a079896"
              alt=""
            />
            <p className="bg-[#BDBABB] text-white text-center absolute bottom-0 w-full opacity-80">
              Bán 75k+ / tháng
            </p>
            <img
              className="absolute top-0 h-[50px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
              alt=""
            />
          </div>
          <p className="text-xl text-[#555]">Sữa Rửa Mặt</p>
        </div>
        <div className="cursor-pointer">
          <div className="relative mb-5">
            <img
              src="https://down-vn.img.susercontent.com/file/be6723742b492aa48555588ea5cb5fc9"
              alt=""
            />
            <p className="bg-[#BDBABB] text-white text-center absolute bottom-0 w-full opacity-80">
              Bán 113k+ / tháng
            </p>
            <img
              className="absolute top-0 h-[50px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
              alt=""
            />
          </div>
          <p className="text-xl text-[#555]">Tinh Dầu Bưởi Cocoon</p>
        </div>
        <div className="cursor-pointer">
          <div className="relative mb-5">
            <img
              src="https://down-vn.img.susercontent.com/file/30a8c88309e8f1c95f0f32fd3e368bb5"
              alt=""
            />
            <p className="bg-[#BDBABB] text-white text-center absolute bottom-0 w-full opacity-80">
              Bán 115k+ / tháng
            </p>
            <img
              className="absolute top-0 h-[50px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
              alt=""
            />
          </div>
          <p className="text-xl text-[#555]">Giấy Ăn Gấu Trúc</p>
        </div>
        <div className="cursor-pointer">
          <div className="relative mb-5">
            <img
              src="https://down-vn.img.susercontent.com/file/2c9dab61383d096c78823f9f8b5c3f82"
              alt=""
            />
            <p className="bg-[#BDBABB] text-white text-center absolute bottom-0 w-full opacity-80">
              Bán 71k+ / tháng
            </p>
            <img
              className="absolute top-0 h-[50px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
              alt=""
            />
          </div>
          <p className="text-xl text-[#555]">Bao Cao Su</p>
        </div>
        <div className="cursor-pointer">
          <div className="relative mb-5">
            <img
              src="https://down-vn.img.susercontent.com/file/4add5fd1b593fbfab327ec86d2197635"
              alt=""
            />
            <p className="bg-[#BDBABB] text-white text-center absolute bottom-0 w-full opacity-80">
              Bán 115k+ / tháng
            </p>
            <img
              className="absolute top-0 h-[50px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
              alt=""
            />
          </div>
          <p className="text-xl text-[#555]">Gậy Bẻ Tập Cơ Tay</p>
        </div>
        <div className="cursor-pointer">
          <div className="relative mb-5">
            <img
              src="https://down-vn.img.susercontent.com/file/dd04d586b56434a0e88e151dbd018322"
              alt=""
            />
            <p className="bg-[#BDBABB] text-white text-center absolute bottom-0 w-full opacity-80">
              Bán 46k+ / tháng
            </p>
            <img
              className="absolute top-0 h-[50px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/06720e49514cbd94b7552496b4de454a.png"
              alt=""
            />
          </div>
          <p className="text-xl text-[#555]">Đèn Led Để Bàn</p>
        </div>
      </div>
    </div>
  );
};

export default HotSearch;
