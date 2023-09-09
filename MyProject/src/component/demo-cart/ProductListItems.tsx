import React, { useState } from "react";

const ProductListItems = (props) => {
  const [success, setSucess] = useState(false);
  const { sanPham, addToCard } = props;

  return (
    <div>
      <img className="w-[300px]" src={sanPham.images} alt="" />

      <div className="text-center pt-5">
        <p>{sanPham.tenSP}</p>
        <p className="pt-2">{sanPham.price.toLocaleString()} VND</p>
        <button
          onClick={() => {
            setSucess(true);
            return addToCard(sanPham);
          }}
          className="mt-4 py-3 w-[100px] bg-green-500 rounded-md text-white font-bold"
        >
          {" "}
          add to cart{" "}
        </button>
      </div>

      {success && (
        <div>
          <button>đã thêm vào giỏ hàng</button>
        </div>
      )}
    </div>
  );
};

export default ProductListItems;
