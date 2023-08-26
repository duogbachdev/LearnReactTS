import React from "react";
import Header from "./header/Header";
import LabelNoti from "./labelnoti/LabelNoti";
import ProductMovie from "./main/ProductMovie";
import SideBar from "./main/SideBar";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#424040]">
      <div className="bg-[#151414] font-Roboto">
        <Header />
      </div>
      <div className="container mx-auto font-Roboto">
        <>
          <LabelNoti />
        </>
        <div className="flex bg-[#151414]">
          <div className="w-4/6 border-r border-b  py-5 px-5">
            <ProductMovie />
          </div>
          <div className="w-2/6 border-b  px-[30px] py-[30px]">
            <SideBar />
          </div>
        </div>

        <div className=" bg-[#151414]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
