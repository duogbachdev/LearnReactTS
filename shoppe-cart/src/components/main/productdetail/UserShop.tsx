import React from "react";
import { BsFillChatLeftDotsFill, BsShopWindow } from "react-icons/bs";

const UserShop = () => {
  return (
    <div>
      <div className="flex gap-5">
        <img
          className="rounded-full h-[78px] w-[78px]"
          src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-ll49u6au88mu73_tn"
          alt=""
        />

        <div className="border-r pr-10">
          <p>Store Táo xanh</p>
          <p className="text-xs mb-5 text-[#999999]">Online 43 phút trước</p>

          <div className="flex gap-3 items-center text-xs font-semibold">
            <button className="flex gap-3 items-center border border-[#ee4d2d] text-[#ee4d2d] bg-[#FFF5F1] px-2 py-2 capitalize">
              <BsFillChatLeftDotsFill />
              <span>Chat ngay</span>
            </button>

            <button className="flex gap-3 items-center border px-2 py-[8.8px] capitalize">
              <BsShopWindow />
              <span>xem shop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShop;
