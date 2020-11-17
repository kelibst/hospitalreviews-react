import React from "react";
import Icofont from "react-icofont";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className=" bg-default-blue col-sm-4 col-md-3 col-xl-2">
      <aside className="text-white d-sm-none">
        <header className="header-container">
          <div className="header-content">
            <div className="header-content-image">
              <Icofont icon="pigeon-2" className="text-center" />
            </div>
            <h1 className="header-title font-weight-bolder text-center">
              Hospital Reviews
            </h1>
          </div>
        </header>

        <MobileNavBar />
      </aside>

      <aside className="sidebar d-none d-sm-block">
        <header className="mt-5">
          <div className="header-content">
            <div className="header-content-image">
              <Icofont icon="pigeon-2" className="text-center" />
            </div>
            <h1 className="header-title font-weight-bolder text-center">
              Hospital Reviews
            </h1>
          </div>
          <div className="header-description">
            The right place to tell the world how a hospital treated you.
          </div>
        </header>

        <NavBar />

        <Footer />
      </aside>
    </div>
  );
};

export default SideBar;
