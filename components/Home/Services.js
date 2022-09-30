import { Image } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <div className="bg-danger container-fluid m-0 p-0">
      <div className="row p-5 m-0 p-0">
        <div className="col-md-3 col-12 p-lg-5 p-3">
          <div className="d-flex flex-column">
            <Image
              src="/pics/icons/packet.png"
              alt="packet"
              height="65px"
              width="50px"
            />
            <h1 className="py-md-5 py-3 text-white">LOREM IPSUM</h1>
            <p className="text-white">
              Nulla nec tortor vitae eros iaculis hendrerit aliquet non urna.
              Nulla sit amet.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-12 p-lg-5 p-3">
          <div className="d-flex flex-column">
            <Image
              src="/pics/icons/coffee.png"
              alt="packet"
              height="65px"
              width="65px"
            />
            <h1 className="py-md-5 py-3 text-white">LOREM IPSUM</h1>
            <p className="text-white">
              Nulla nec tortor vitae eros iaculis hendrerit aliquet non urna.
              Nulla sit amet.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-12 p-lg-5 p-3">
          <div className="d-flex flex-column">
            <Image
              src="/pics/icons/coffeemachine.png"
              alt="packet"
              height="65px"
              width="60px"
            />
            <h1 className="py-md-5 py-3 text-white">LOREM IPSUM</h1>
            <p className="text-white">
              Nulla nec tortor vitae eros iaculis hendrerit aliquet non urna.
              Nulla sit amet.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-12 p-lg-5 p-3">
          <div className="d-flex flex-column">
            <Image
              src="/pics/icons/coffeeart.png"
              alt="packet"
              height="65px"
              width="75px"
            />
            <h1 className="py-md-5 py-3 text-white">LOREM IPSUM</h1>
            <p className="text-white">
              Nulla nec tortor vitae eros iaculis hendrerit aliquet non urna.
              Nulla sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
