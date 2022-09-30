import React from "react";
import { Button } from "react-bootstrap";

const Barista = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <div className="col-md-6 col-12 p-0 bg-barista "></div>
        <div
          className="col-md-6 col-12 p-md-5 p-4 m-0"
          style={{ backgroundColor: "#202738" }}
        >
          <div className="p-md-5 p-3">
            <h1
              className="text-white"
              style={{ color: "tomato", fontFamily: "Poppins-ExtraBold" }}
            >
              Our Team -
            </h1>
            <h1 className="display-3 text-white my-5">
              Mauris rhoncus orci in imperdiet placerat
            </h1>
            <p className="text-white">
              Vestibulum vehicula tempor nulla, sed hendrerit urna interdum in.
              Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
              quam quis quam venenatis fringilla. Morbi vestibulum id tellus.
            </p>
            <Button className="py-3 mt-3" variant="danger">
              WHO ARE WE?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barista;
