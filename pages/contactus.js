import { Image } from "@chakra-ui/react";
import React from "react";
import { SocialProfile } from "../components";

const Contact = () => {
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
        <h1 className="display-3 text-white p-5 col-md-5">
          FEEL FREE TO CONTACT US
        </h1>
      </div>
      <div className=" container-fluid m-0 p-0">
        <div className="row p-md-5 p-3 m-0 p-0">
          <div className="col-md-3 col-12 p-lg-5 p-3">
            <div className="d-flex flex-column">
              <Image
                src="/pics/icons/packet.png"
                alt="packet"
                height="65px"
                width="50px"
              />
              <h1 className="py-md-5 py-3 ">LOREM IPSUM</h1>
              <p className="">
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
                style={{ color: "orange" }}
              />
              <h1 className="py-md-5 py-3 ">LOREM IPSUM</h1>
              <p className="">
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
              <h1 className="py-md-5 py-3 ">LOREM IPSUM</h1>
              <p className="">
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
              <h1 className="py-md-5 py-3 ">LOREM IPSUM</h1>
              <p className="">
                Nulla nec tortor vitae eros iaculis hendrerit aliquet non urna.
                Nulla sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <div>
          <h1 className="text-center display-6 py-md-5 py-3 text-danger">
            OUR TEAM
          </h1>
          <h1 className="text-center display-3">MEET OUR TEAM</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <SocialProfile />
          </div>
          <div className="col-md-3">
            <SocialProfile />
          </div>
          <div className="col-md-3">
            <SocialProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
