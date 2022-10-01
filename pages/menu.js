import React from "react";
import { Product } from "../components";

const Menu = () => {
  return (
    <div>
      <div
        className="bg-image-aboutus d-flex align-items-center"
        style={{
          backgroundImage: "url(/pics/aboutus.jpg)",
          minHeight: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="display-3 text-white p-5 col-md-5 ">
          ENJOY THE REAL TASTE OF COFFEE
        </h1>
      </div>

      <h1 className="display-3 text-center p-5">OUR MENU</h1>
      <div className="row px-md-5 px-3">
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 col-12">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Menu;
