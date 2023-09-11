import React from "react";
import Slider from "./Slider";
import IconShoppe from "./IconShoppe";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import ShoppeVourcher from "./ShoppeVourcher";
import ShoppeMail from "./ShoppeMail";
import HotSearch from "./HotSearch";
import RecommendProduct from "./RecommendProduct";

const TrangTru = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="bg-white mb-8">
        <IconShoppe />
      </div>
      <div className="bg-white mb-5">
        <Categories />
      </div>
      <div className="bg-white mb-5 px-5 py-5">
        <FlashSale />
      </div>
      <div className="bg-white mb-5">
        <ShoppeVourcher />
      </div>
      <div className="bg-white mb-5 px-5 py-5">
        <ShoppeMail />
      </div>
      <div>
        <HotSearch />
      </div>
      <div>
        <RecommendProduct />
      </div>
    </div>
  );
};

export default TrangTru;
