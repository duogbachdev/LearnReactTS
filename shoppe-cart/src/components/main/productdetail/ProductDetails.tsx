import React from "react";
import LinkTitle from "./LinkTitle";
import Product from "./Product";
import ComboSale from "./ComboSale";
import UserShop from "./UserShop";
import InfoProduct from "./InfoProduct";
import RateProduct from "./RateProduct";
import ShopProducts from "./ShopProducts";
import Footer from "../../footer/Footer";

const ProductDetails = () => {
  return (
    <div>
      <div className="mb-5">
        <LinkTitle />
      </div>

      <>
        <div className="bg-white px-5 py-5 mb-5">
          <Product />
        </div>

        <div className="bg-white px-5 py-5 mb-5">
          <ComboSale />
        </div>
        <div className="bg-white px-5 py-5 mb-5">
          <UserShop />
        </div>
        <div className="bg-white px-5 py-5 mb-5">
          <InfoProduct />
        </div>
        <div className="bg-white px-5 py-5 mb-5">
          <RateProduct />
        </div>
        <div className="bg-white px-5 py-5 mb-5">
          <ShopProducts />
        </div>
      </>
    </div>
  );
};

export default ProductDetails;
