import React from "react";
import ProductListItems from "./ProductListItems";

const ProductList = (props) => {
  const { addToCard } = props;
  const productItems = [
    {
      maSP: 1,
      tenSP: "Iphone 13 promax",
      price: 100000,
      images: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
    },
    {
      maSP: 2,
      tenSP: "Iphone 13 promax",
      price: 100000,
      images: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-1.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone 13 promax",
      price: 100000,
      images: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone13-pro-max-xanh-la-1.jpg",
    },
  ];
  const renderProduct = () =>
    productItems.map((sanPham) => (
      <div key={sanPham.maSP}>
        <ProductListItems sanPham={sanPham} addToCard={addToCard} />
      </div>
    ));
  return <div className="flex gap-5">{renderProduct()}</div>;
};

export default ProductList;
