import React, { useState } from "react";
import ModelCart from "./ModelCart";
import ProductList from "./ProductList";

const AddToCart = () => {
  const [gioHang, setGioHang] = useState<any>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  let addToCard = (sanPham: any) => {
    let spcart = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      price: sanPham.price,
      images: sanPham.images,
      soLuong: 1,
    };

    let index = gioHang.findIndex((spGH: any) => spGH.maSP === spcart.maSP);
    if (index !== -1) {
      gioHang[index].soLuong += 1;
    } else {
      gioHang.push(spcart);
    }
    setGioHang([...gioHang]);
    console.log(sanPham);
  };
  const checkSLCart = () =>
    gioHang.reduce((total, SP) => {
      return (total += SP.soLuong);
    }, 0);
  const remoteProduct = (maSP: number) => {
    let index = gioHang.findIndex((spGioHang: any) => spGioHang.maSP === maSP);
    if (index !== -1) {
      gioHang.splice(index, 1);
      setGioHang([...gioHang]);
    }
  };
  const updateGioHang = (maSP: number, number: number) => {
    let updateGiohangTotal = [...gioHang];
    let index = updateGiohangTotal.findIndex((spGioHang) => spGioHang.maSP === maSP);
    if (index !== -1) {
      if (updateGiohangTotal[index].soLuong <= 1 && number === -1) {
        alert("sản phẩm tối thiểu là 1");
        return;
      }
      updateGiohangTotal[index].soLuong += number;
      setGioHang(updateGiohangTotal);
    }
  };

  return (
    <div>
      <center> shopee 9/9 sale lớn mua ngay </center>

      <div className="text-right pr-10">
        <p onClick={() => setShowCart(!showCart)}> {checkSLCart()} gio hang</p>
      </div>

      <ModelCart
        gioHang={gioHang}
        showCart={showCart}
        updateGioHang={updateGioHang}
        remoteProduct={remoteProduct}
      />

      <ProductList addToCard={addToCard} />
    </div>
  );
};

export default AddToCart;
