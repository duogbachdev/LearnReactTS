import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TrangTru from "../../components/main/trangtru/TrangTru";

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div>
        <Header />
      </div>
      <div className="container mx-auto font-Roboto">
        <div>
          <TrangTru />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
