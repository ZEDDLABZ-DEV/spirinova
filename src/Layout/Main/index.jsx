import React from "react";
import { Header } from "../../Components/Common/Header";
import { Sidebar } from "../../Components//Common/Sidebar";
import { Footer } from "../../Components/Common/Footer";
import "./index.scss";
const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="main-wrapper">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
