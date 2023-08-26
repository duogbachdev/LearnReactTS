import React from "react";
import Header from "./layout/header/Header";
import Sidebar from "./layout/main/SideBar";
import Product from "./layout/main/Product";
import Footer from "./layout/footer/Footer";
import TopBar from "./layout/topbar/TopBar";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <div className="topbar">
        <TopBar />
      </div>
      <div className="container mx-auto">
        <div className="header">
          <Header />
        </div>

        <div className="main flex gap-5">
          <div className="sidebar w-1/6">
            <Sidebar />
          </div>
          <div className="product w-5/6">
            <Product />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
