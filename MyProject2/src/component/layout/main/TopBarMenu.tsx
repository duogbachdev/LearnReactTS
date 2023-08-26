import React from "react";
import { GrNext } from "react-icons/gr";

type Props = {};

const TopBarMenu = (props: Props) => {
  return (
    <div className="border-b border-b-[#EFF0F5] py-3">
      <ul className="flex items-center gap-3">
        <li className="flex items-center gap-3 text-blue text-[12px]">
          <p className="text-sm text-[#1a9cb7]">Home</p>
          <GrNext />
        </li>
        <li className="flex items-center gap-3  text-[12px]">
          <p className="text-sm text-[#1a9cb7]">Mobiles & Tablets</p>
          <GrNext />
        </li>
        <li className="flex items-center gap-3">
          <p className="text-sm text-[#757575]">Smartphones</p>
        </li>
      </ul>
    </div>
  );
};

export default TopBarMenu;
