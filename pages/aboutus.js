import React from "react";
import { GridBlurredBackdrop, SocialProfile } from "../components";

const AboutUs = () => {
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
          FEW WORDS ABOUT US
        </h1>
      </div>
      <div className="container-fluid px-md-5 px-3" style={{ lineHeight: "30px" }}>
        <h1 className="text-center display-3 py-md-5 py-3 mt-5 underline">
          ABOUT US
        </h1>
        <p className="px-md-5 pb-5 text-justify p-0">
          Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh
          magna. Proin risus erat, fringilla vel purus sit amet, mattis porta
          enim. Duis fermentum faucibus. Sed vehicula velit sodales vitae.
          Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam
          ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci
          fermentum ultricies. Mauris maximus velit commodo, varius ligula vel,
          consequat est. Curabitur sed iaculis dolor, non congue ligula.
          Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero,
          congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend,
          scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit accumsan.
        </p>
      </div>
      <div>
        <h1 className="text-center display-3 py-md-5 py-3">OUR TEAM</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <SocialProfile />
        </div>
        <div className="col-md-4">
          <SocialProfile />
        </div>
      </div>
      <div>
        {" "}
        <GridBlurredBackdrop />
      </div>
    </div>
  );
};

export default AboutUs;
