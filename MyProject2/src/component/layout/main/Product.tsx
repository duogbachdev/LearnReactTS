import React, { useState } from "react";
import { SiWindows11 } from "react-icons/si";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import axios from "axios";

type Props = {
  id: number;
  image: string;
  title: string;
  price: string;
  sale: string;
  city: string;
};

const Product = (props: Props) => {
  const [products, setProducts] = useState<Props[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Gọi fetchData khi component được khởi tạo
  fetchData();
  return (
    <>
      <div className="border-b border-b-[#EFF0F5] py-8">
        <h1 className="mb-3 text-xl">Điện Thoại Di Động, Smartphone Chính Hãng, Bảo Hành Uy Tín</h1>
        <div className="flex justify-between items-center">
          <p>
            2444 items found in <span>Smartphones</span>
          </p>
          <div className="flex gap-10">
            <div className="flex items-center gap-5">
              <p>Sort By : </p>
              <select className="border py-2 px-4" name="" id="">
                <option value="">Best Match</option>
                <option value="">Price low to high</option>
                <option value="">Price low to how</option>
              </select>
            </div>
            <div className="flex items-center gap-5">
              <p>View : </p>
              <SiWindows11 />
              <BsLayoutTextSidebarReverse />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[24px] ml-[16px] grid grid-cols-4 gap-y-20">
        {products.map((product) => (
          <div className="px-2 hover:shadow-xl ">
            <div className="flex justify-center">
              <img className="mb-10" src={product.image} alt="" />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="w-[30px] border-orange-300 border rounded cursor-pointer"
                src="https://lzd-img-global.slatic.net/g/p/5a6e44698706146e63037006e3927ed7.jpg_80x80q80.jpg_.webp"
                alt=""
              />
              <img
                className="w-[30px] rounded cursor-pointer hover:border-orange-300 hover:border"
                src="https://lzd-img-global.slatic.net/g/p/41e9780fea915e6905232277633a59ee.jpg_80x80q80.jpg_.webp"
                alt=""
              />
              <img
                className="w-[30px] rounded cursor-pointer hover:border-orange-300 hover:border"
                src="https://lzd-img-global.slatic.net/g/p/155ab2029e9fc653e1148983595e2291.jpg_80x80q80.jpg_.webp"
                alt=""
              />
              <img
                className="w-[30px] rounded cursor-pointer hover:border-orange-300 hover:border"
                src="https://lzd-img-global.slatic.net/g/p/7d2efda830173c0bba59c52f15fe5ae8.jpg_80x80q80.jpg_.webp"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
                {product.title}
              </p>
            </div>
            <div>
              <p className="text-lg text-[#f57224] font-semibold">
                ₫<span>{product.price}</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] text-[#757575]">
                <span>{product.sale}</span>% Off
              </p>
            </div>
            <div>
              <p className="text-[10px] text-[#9e9e9e] text-end">{product.city}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
