import React from "react";
import { MainNavbar, LargeWithLogoCentered, SmallNav } from "./index";
const Layout = ({ children }) => {
  return (
    <>
      <main className="">
        <div className="container-fluid p-0">
          <div className="flex-xl-nowrap">
            <div className=" bd-sidebar  p-0">
              <MainNavbar />
            </div>
            <div className=" bd-navbar d-lg-none p-0">
              <SmallNav />
            </div>
            <div className=" bd-content p-0">{children}</div>
            <LargeWithLogoCentered />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
