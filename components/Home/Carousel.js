import { Image } from "@chakra-ui/react";
import React from "react";

const Carousel = () => {
  return (
    <div className="img-wrap">
      <Image
        src="/pics/cafe-bg.jpg"
        alt="cafe-bg"
        objectFit="cover"
        style={{ height: "100%" }}
      />

      <div className="overlay-carousel">
        <div className="overlay-child p-5">
          <h1 className="px-4 mb-3 display text-white cafe">GRINDERS CAFE —</h1>
          <h1 className="px-4 display-3 mb-3 text-white">
            Welcome to Our Cafe
          </h1>
          <p className="px-4 text-white">
            Our goal is to offer great coffee at a reasonable price while
            maintaining great quality. Enjoy a selection of appetizers,
            sandwiched, fresh salads, desserts and daily specials
          </p>
        </div>
        <div className="overlay-child-2 p-5">
          <div className="d-flex align-items-center">
            <p
              className="px-4 text-white col-6"
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: "0.8rem",
                lineHeight: "14px",
                letterSpacing: "4px",
              }}
            >
              WE ARE OPEN 7 DAYS A WEEK
            </p>
            <p
              className="px-4 text-white col-7"
              style={{ fontFamily: "Poppins-ExtraBold", fontSize: "2rem" }}
            >
              8 AM - 9 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
