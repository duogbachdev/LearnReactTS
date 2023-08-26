import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="border-b border-b-[#EFF0F5] py-8 text-sm">
        <p className="mb-3">Category</p>
        <p className="text-[#f57224]">Mobiles</p>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Brand</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="lazPick"
              id=""
            />
            <p className=" hover:text-orange-500">Zip Mobile</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="cashback" id="" />
            <p className=" hover:text-orange-500">Cashback</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="fulfilled" id="" />
            <p className=" hover:text-orange-500">Fulfilled By Lazada</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="instant" id="" />
            <p className=" hover:text-orange-500">Instant Delivery</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="lazMall" id="" />
            <p className=" hover:text-orange-500">LazMall</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="cash" id="" />
            <p className=" hover:text-orange-500">Cash On Delivery</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="free" id="" />
            <p className=" hover:text-orange-500">Free Shipping</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="redmi" id="" />
            <p className=" hover:text-orange-500">Redmi</p>
          </li>
        </ul>
        <p className="text-[#1a9cb7] uppercase text-[13px] mt-2 font-semibold cursor-pointer">
          View more
        </p>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Service & Promotion</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="zipmobile"
              id=""
            />
            <p className=" hover:text-orange-500">LazPick</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="ulefone" id="" />
            <p className=" hover:text-orange-500">Ulefone</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="kyocera" id="" />
            <p className=" hover:text-orange-500">Kyocera</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="infinix" id="" />
            <p className=" hover:text-orange-500">Infinix</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="iplay" id="" />
            <p className=" hover:text-orange-500">Iplay</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="nokia" id="" />
            <p className=" hover:text-orange-500">Nokia</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="vivo" id="" />
            <p className=" hover:text-orange-500"> Vivo</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="coins" id="" />
            <p className=" hover:text-orange-500">Coins</p>
          </li>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Price</p>
        <div className="flex items-center justify-between">
          <input
            className=" border w-[100px] py-1 pl-2"
            type="number"
            name=""
            id=""
            placeholder="Min"
          />
          <input
            className=" border w-[100px] py-1 pl-2"
            type="number"
            name=""
            id=""
            placeholder="Max"
          />
          <p className="bg-[#F57224] py-[9px] px-3 text-white rounded-md hover:bg-[#40A9FF] cursor-pointer">
            <FaPlay />
          </p>
        </div>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Rating</p>
        <ul className="flex items-center gap-1 text-[#FACA51] mb-2">
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
        </ul>
        <ul className="flex items-center gap-1 text-[#FACA51] mb-2">
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <p className="text-[#808080] text-sm">And Up</p>
        </ul>
        <ul className="flex items-center gap-1 text-[#FACA51] mb-2">
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <p className="text-[#808080] text-sm">And Up</p>
        </ul>
        <ul className="flex items-center gap-1 text-[#FACA51] mb-2">
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <p className="text-[#808080] text-sm">And Up</p>
        </ul>
        <ul className="flex items-center gap-1 text-[#FACA51]">
          <li>
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <li className="text-[#E9E9E9]">
            <AiFillStar />
          </li>
          <p className="text-[#808080] text-sm">And Up</p>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Phone Features</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="wifi"
              id=""
            />
            <p className=" hover:text-orange-500">Wifi</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="GPS" id="" />
            <p className=" hover:text-orange-500">GPS</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Fingerprint" id="" />
            <p className=" hover:text-orange-500">Fingerprint Sensor</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Touchscreen" id="" />
            <p className=" hover:text-orange-500">Touchscreen</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Expandable" id="" />
            <p className=" hover:text-orange-500">Expandable Memory</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="NFC" id="" />
            <p className=" hover:text-orange-500">NFC</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Dustproof" id="" />
            <p className=" hover:text-orange-500">Dustproof / Waterproof</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="BLUETOOTH" id="" />
            <p className=" hover:text-orange-500">BLUETOOTH</p>
          </li>
        </ul>
        <p className="text-[#1a9cb7] uppercase text-[13px] mt-2 font-semibold cursor-pointer">
          View more
        </p>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Battery Capacity</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name=""
              id=""
            />
            <p className=" hover:text-orange-500">4000 - 4999 mAh</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <p className=" hover:text-orange-500">5000 mAh & Above</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <p className=" hover:text-orange-500">3000 - 3999 mAh</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <p className=" hover:text-orange-500">2000 - 2999 mAh</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <p className=" hover:text-orange-500">1000 - 1999 mAh</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <p className=" hover:text-orange-500">Under 1000 mAh</p>
          </li>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Color Family</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="Black"
              id=""
            />
            <p className=" hover:text-orange-500">Black</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Blue" id="" />
            <p className=" hover:text-orange-500">Blue</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Gold" id="" />
            <p className=" hover:text-orange-500">Gold</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Silver" id="" />
            <p className=" hover:text-orange-500">Silver</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Red" id="" />
            <p className=" hover:text-orange-500">Red</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Purple" id="" />
            <p className=" hover:text-orange-500">Purple</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="White" id="" />
            <p className=" hover:text-orange-500">White</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Pink" id="" />
            <p className=" hover:text-orange-500">Pink</p>
          </li>
        </ul>
        <p className="text-[#1a9cb7] uppercase text-[13px] mt-2 font-semibold cursor-pointer">
          View more
        </p>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Network Connections</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="3G"
              id=""
            />
            <p className=" hover:text-orange-500">3G</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="4G" id="" />
            <p className=" hover:text-orange-500">4G</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="2G" id="" />
            <p className=" hover:text-orange-500">2G</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="5g" id="" />
            <p className=" hover:text-orange-500">5g</p>
          </li>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Number_of_Camera</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="Dual"
              id=""
            />
            <p className=" hover:text-orange-500">Dual</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Single" id="" />
            <p className=" hover:text-orange-500">Single</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Quad" id="" />
            <p className=" hover:text-orange-500">Quad</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Triple" id="" />
            <p className=" hover:text-orange-500">Triple</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="FIVE" id="" />
            <p className=" hover:text-orange-500">FIVE</p>
          </li>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Resolution</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="FullHD"
              id=""
            />
            <p className=" hover:text-orange-500">Full HD</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="HD" id="" />
            <p className=" hover:text-orange-500">HD</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="4K" id="" />
            <p className=" hover:text-orange-500">4K UHD</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="2K" id="" />
            <p className=" hover:text-orange-500">2K UHD</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="QuadHD" id="" />
            <p className=" hover:text-orange-500">QuadHD</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="qHD" id="" />
            <p className=" hover:text-orange-500">qHD</p>
          </li>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">SIM card Slots</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="2"
              id=""
            />
            <p className=" hover:text-orange-500">2</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="1" id="" />
            <p className=" hover:text-orange-500">1</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="3 and up" id="" />
            <p className=" hover:text-orange-500">3 and up</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Single" id="" />
            <p className=" hover:text-orange-500">Single</p>
          </li>
        </ul>
      </div>

      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Operating System</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="Android"
              id=""
            />
            <p className=" hover:text-orange-500">Android</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="iOS" id="" />
            <p className=" hover:text-orange-500">iOS</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Windows Mobile" id="" />
            <p className=" hover:text-orange-500">Windows Mobile</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="Blackberry OS" id="" />
            <p className=" hover:text-orange-500">Blackberry OS</p>
          </li>
        </ul>
      </div>
      <div className="py-5 border-b border-b-[#EFF0F5]">
        <p className="mb-3">Phone Type</p>
        <ul>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input
              className="cursor-pointer border border-[#757575]"
              type="checkbox"
              name="Smartphone"
              id=""
            />
            <p className=" hover:text-orange-500">Smartphone</p>
          </li>
          <li className="flex items-center gap-3 text-[#757575] text-[13px] cursor-pointer">
            <input className="cursor-pointer" type="checkbox" name="feature phone" id="" />
            <p className=" hover:text-orange-500">feature phone</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
