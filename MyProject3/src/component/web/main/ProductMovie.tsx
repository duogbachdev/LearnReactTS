import React, { useEffect, useState } from "react";
import { Iproducts } from "../../../interface/product";
import { getAllData } from "../../../api/product.servcies";

const ProductMovie = () => {
  const [item, setItem] = useState<Iproducts[]>([]);
  useEffect(() => {
    const mapData = async () => {
      const { data } = await getAllData();
      setItem(data);
    };
    mapData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center gap-5 mb-10">
        <p className="border-[#4b4b4b] border w-[360px]"></p>
        <h1 className="text-white text-center text-4xl font-semibold">Phim Kinh Dị</h1>
        <p className="border-[#4b4b4b] border w-[360px]"></p>
      </div>

      <h2 className="text-white font-semibold border-l-2 border-[#408BEA] pl-3 mb-8">
        Phim Kinh Dị mới cập nhật
      </h2>

      <div className="grid grid-cols-5 gap-5 text-white pb-5 border-b mb-5">
        {item?.map((newItem: Iproducts) => (
          <div key={newItem.id} className="px-[10px] py-[10px]">
            <img className="mb-3" src={newItem.image} alt="" />
            <h3 className=" hover:text-[#408bea] cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis">
              {newItem.title}
            </h3>
            <p className="text-[12px] text-[#777575] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
              {newItem.releaseyear}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center text-white gap-2">
        <button className="rounded-md py-1 px-3 text-[#408BEA] bg-[#000000] hover:bg-[#151414] hover:text-white cursor-pointer border border-[#000000]">
          1
        </button>
        <button className="rounded-md py-1 px-3 bg-[#151414] hover:bg-[#000000] hover:text-[#408BEA] cursor-pointer border border-[#000000]">
          2
        </button>
        <button className="rounded-md py-1 px-3 bg-[#151414] hover:bg-[#000000] hover:text-[#408BEA] cursor-pointer border border-[#000000]">
          3
        </button>
        <button className="rounded-md py-1 px-3 bg-[#151414] hover:bg-[#000000] hover:text-[#408BEA] cursor-pointer border border-[#000000]">
          4
        </button>
        <button className="rounded-md py-1 px-3 bg-[#151414] hover:bg-[#000000] hover:text-[#408BEA] cursor-pointer border border-[#000000]">
          5
        </button>
      </div>
    </div>
  );
};

export default ProductMovie;
