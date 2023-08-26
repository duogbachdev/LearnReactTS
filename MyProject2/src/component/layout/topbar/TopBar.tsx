import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="py-1 bg-[#F7F7F7] mb-2">
      <ul className="container flex justify-end gap-10 uppercase text-[12px] text-[#9e9e9e] cursor-pointer font-semibold">
        <li className="text-[#0f1568]">SAVE MORE ON APP</li>
        <li className="text-[#0f1568]">sell on lazada</li>
        <li>CUSTOMER CARE</li>
        <li>Track my order</li>
        <li>login</li>
        <li>signup</li>
        <li>THAY ĐỔI NGÔN NGỮ</li>
      </ul>
    </div>
  );
};

export default TopBar;
