import React from "react";

const Slider = () => {
  return (
    <div className="flex gap-5 mb-3">
      <div className="basis-5/6">
        <img className="w-full"
          src="https://cf.shopee.vn/file/vn-50009109-7262c9f37ce4e874967f07a12857be1d_xxhdpi"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5">
        <img className=""
          src="https://cf.shopee.vn/file/vn-50009109-e8bee97d5fb118c56292f6e8bedcca44_xhdpi"
          alt=""
        />

        <img className=""
          src="https://cf.shopee.vn/file/vn-50009109-9e898dbd5125e869f3c64bb2f4574a12_xhdpi"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
