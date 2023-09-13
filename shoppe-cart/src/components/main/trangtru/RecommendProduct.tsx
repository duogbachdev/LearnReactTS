import React, { useEffect, useState } from "react";
import { Iproduct } from "../../../interface/product";
import { getAllData } from "../../../api/product.servcies";
import { useNavigate } from "react-router-dom";

const RecommendProduct = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState<Iproduct[]>([]);
  useEffect(() => {
    const mapData = async () => {
      const { data } = await getAllData();
      console.log(data);

      setItem(data);
    };
    mapData();
  }, []);
  return (
    <div>
      <div className="border-b-4 border-b-[#ee4d2d] text-xl bg-white mb-5 py-5">
        <h1 className="text-center text-[#ee4d2d]">GỢI Ý HÔM NAY</h1>
      </div>

      <div className="grid grid-cols-6 gap-3">
        {item?.map((newItem: Iproduct) => (
          <div className="relative bg-white cursor-pointer" onClick={()=>navigate(`/product/${newItem?.id}`)} key={newItem.id}>
            <img className="mb-3" src={newItem.image} alt="" />
            <img className="absolute top-0" src={newItem.image_url} alt="" />
            <p className="absolute top-2 bg-red-500 text-xs text-white px-2">
              {newItem.love_title}
            </p>
            <p className="absolute py-2 rounded-l w-[50px] text-center top-0 right-0 bg-yellow-300 text-white">
              <span className="text-red-500">{newItem.discount}%</span> giảm
            </p>
            <div className="px-5">
              <p className="overflow-hidden whitespace-nowrap text-ellipsis mb-2">
                {newItem.description}
              </p>
              <p className="bg-[#F69113] text-white w-[30%] text-center text-[12px] mb-2">
                {newItem.discount_price}% Giảm
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#ee4d2d]">
                  ₫<span>{newItem.price}</span>
                </p>
                <p className="text-[#0f0f0f91]">Đã bán {newItem.sell_product}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendProduct;
