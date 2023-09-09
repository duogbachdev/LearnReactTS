import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TrangTru from "../../components/main/trangtru/TrangTru";

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
