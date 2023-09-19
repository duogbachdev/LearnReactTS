import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIdproducts } from "../../../api/product.servcies";
import { Iproduct } from "../../../interface/product";
import {
  BsFillStarFill,
  BsCartCheck,
  BsMessenger,
  BsFacebook,
  BsPinterest,
  BsTwitter,
  BsHeart,
} from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { convert } from "html-to-text";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config.firebase";

const Product = () => {
  const [data, setData] = useState<Iproduct | null>(null);
  const colRefDb = collection(db, "product");
  const { id } = useParams();
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchDataDetails = async (id: number) => {
  //     try {
  //       const res = await getIdproducts(id);
  //       setData(res.data);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  //   if (id) {
  //     fetchDataDetails(Number(id));
  //   }
  // }, [id]);

  useEffect(() => {
    if (id) {
      const unsubscribe = onSnapshot(colRefDb, (snapshot) => {
        snapshot.docs.forEach((product) => {
          const productdata = product.data() as Iproduct;
          if (product.id === id) {
            setData({
              ...productdata,
              id: product.id,
            });
          }
        });
      });

      // Unsubscribe from the snapshot listener when the component unmounts
      return () => unsubscribe();
    }
  }, [id]);

  return (
    <div className="flex gap-8">
      <Helmet>
        <title> {data?.description || "Shopee 09/09"} </title>
        <meta
          name="description"
          content={convert(data?.description || "", {
            limits: {
              maxInputLength: 100,
            },
          })}
        />
      </Helmet>
      <div className="basis-5/6">
        <img className="mb-5 w-full" src={data?.image} alt="" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl">
            <p>Chia sẻ : </p>
            <ul className="flex items-center gap-3 ">
              <li className="text-[#0384FF] cursor-pointer">
                <BsMessenger />
              </li>
              <li className="text-[#3B5999] cursor-pointer">
                <BsFacebook />
              </li>
              <li className="text-[#DE0217] cursor-pointer">
                <BsPinterest />
              </li>
              <li className="text-[#10C2FF] cursor-pointer">
                <BsTwitter />
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[#ff656f]">
              <BsHeart />
            </p>
            <p>Đã thích (15)</p>
          </div>
        </div>
      </div>

      <div className="basis-1/6">
        <h1 className="text-2xl w-[1000px] mb-3">{data?.description}</h1>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-5">
            <p className="flex text-[14px] gap-1 text-[#ee4d2d]">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </p>

            <p>
              <span>{data?.sell_product}</span> đã bán
            </p>
          </div>

          <p>Tố cáo</p>
        </div>

        <p className="text-[#ee4d2d] mb-5  pl-10 py-2 rounded text-2xl bg-[#d3d3d37e]">
          ₫ <span className="text-3xl">{data?.price}</span>
        </p>

        <div className="flex gap-5 items-center mb-5">
          <p>Mã giảm giá của Shop</p>
          <p className="bg-[#FBEBED] rounded px-2 text-[#ee4d2d]">Giảm {data?.discount_price}₫</p>
        </div>

        <div className="flex gap-32 items-center mb-5">
          <p>Màu</p>
          <div className="flex gap-5">
            <button className="border px-8 py-3">ĐEN</button>
            <button className="border px-5 py-3">TRẮNG</button>
          </div>
        </div>

        <div className="flex gap-24 items-center mb-5">
          <p>Số lượng</p>
          <div className="flex text-xl items-center">
            <button className="border px-5 py-2">-</button>
            <span className="border px-7 py-2">0</span>
            <button className="border px-5 py-2">+</button>
          </div>
        </div>

        <div className="flex gap-5 border-b-gray-400 border-b pb-10 mb-5">
          <button className="flex items-center gap-5 capitalize bg-[#FFF5F1] text-[#ee4d2d] px-5 py-3 border border-[#ee4d2d] hover:opacity-95">
            <BsCartCheck />
            <p>thêm vào giỏ hàng</p>
          </button>

          <button className="flex items-center gap-5 capitalize bg-[#F05D40] text-white px-14 py-3 hover:opacity-95">
            <p>Mua ngay</p>
          </button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <img
              className="h-[20px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/83e10a1f95cb083579c089448ef8dd3b.png"
              alt=""
            />
            <p>Shopee Đảm Bảo</p>
          </div>

          <p className="text-[#757575]">3 Ngày Trả Hàng / Hoàn Tiền</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
