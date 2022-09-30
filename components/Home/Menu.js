import { Image } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-bootstrap";

const Menu = () => {
  return (
    <section className="bg-white p-0 m-0 my-5 p-md-5 p-3">
      <h1 className="text-center font-bold text-danger">Our Menu -</h1>
      <div className="d-flex justify-content-center p-md-5 p-3">
        <div className="d-flex flex-column">
          <div className="overflow-hidden">
            <Image src="/pics/coffee.jpg" alt="coffee" className="menu-img" />
          </div>
          <div>
            <h1 className="display-3 mt-5 mb-3">Aliquam fringilla</h1>
            <p className="py-3">Proin risus erat Rs.120</p>
            <p className="py-3 text-secondary">
              Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
              nibh magna. Proin risus erat, fringilla vel purus.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="overflow-hidden">
            <Image src="/pics/muffin.jpg" alt="coffee" className="menu-img" />
          </div>
          <div>
            <h1 className="display-3 mt-5 mb-3">Quisque lorem</h1>
            <p className="py-3">Proin risus erat Rs.120</p>
            <p className="py-3 text-secondary">
              Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
              nibh magna. Proin risus erat, fringilla vel purus.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="danger" className="px-5 py-3">
          SEE FULL MENU
        </Button>
      </div>
    </section>
  );
};

export default Menu;
