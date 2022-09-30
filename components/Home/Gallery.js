import { Image } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-bootstrap";

const Gallery = () => {
  return (
    <div className="p-md-5 bg-white">
      <div className="container-fluid">
        <div className="row p-md-5">
          <div className="col-md-3 col-6 p-0 overflow-hidden">
            <Image
              src="/pics/gallery1.jpg"
              alt="coffeegallery"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            className="col-md-6 p-5 flex-center d-none d-md-flex"
            style={{ backgroundColor: "#202738" }}
          >
            <div className="flex-center flex-column">
              <h1 className="text-white text-center display-3">
                Photo Gallery
              </h1>
              <p
                className="text-white text-center my-5 ltr-spacing-1"
                style={{ lineHeight: "30px", letterSpacing: "2px" }}
              >
                Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
                amet elementum. Proin bibendum sollicitudin feugiat ut justo.
              </p>
              <div className="flex-center">
                <Button variant="danger" className="p-3 px-5">
                  VIEW MORE
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0 col-6 overflow-hidden">
            <Image
              src="/pics/gallery2.jpg"
              alt="coffeegallery2"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            className="col-md-6 p-5 flex-center d-flex d-md-none"
            style={{ backgroundColor: "#202738" }}
          >
            <div className="flex-center flex-column">
              <h1 className="text-white text-center display-3">
                Photo Gallery
              </h1>
              <p
                className="text-white text-center my-5"
                style={{ lineHeight: "30px", letterSpacing: "2px" }}
              >
                Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
                amet elementum. Proin bibendum sollicitudin feugiat ut justo.
              </p>
              <div className="flex-center">
                <Button variant="danger" className="p-3 px-5">
                  VIEW MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
