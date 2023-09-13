import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ProductDetails from "../../components/main/productdetail/ProductDetails";
import Footer from "../../components/footer/Footer";

const ProductDetail = () => {
  return (
    <div className="bg-[#F5F5F5] font-Roboto">
      <div>
        <Header />
      </div>

      <div className="container mx-auto">
        <ProductDetails />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
