import React from "react";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
const FewWords = () => {
  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 2000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };
  return (
    <div className="container-fluid  bg-white p-0 m-0">
      <div className="row m-0 ">
        <div className="col-xl-6 col-lg-5 col-md-8 p-xl-5">
          <div className="d-flex flex-column p-md-5 p-4">
            <p style={{ color: "tomato", fontFamily: "Poppins-ExtraBold" }}>
              ABOUT US -
            </p>
            <h1 className="display-3 my-3">A few words about our cafe</h1>
            <p className="" style={{ lineHeight: "30px" }}>
              Our goal is to offer great coffee at a reasonable price while
              maintaining great quality. Enjoy a selection of appetizers,
              sandwiched, fresh salads, desserts and daily specials
            </p>
            <ul className="list-with-style mt-4">
              <li style={{ lineHeight: "30px" }}>— Open Also in Week days</li>
              <li style={{ lineHeight: "30px" }}>
                — All kinds of Coffee Items
              </li>
            </ul>
            <div>
              <Button className="py-3 mt-3" variant="danger">
                MORE ABOUT US
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 py-md-5 d-flex flex-md-column justify-content-evenly">
          <div>
            <div className="display-3 pt-5">
              <Number n={100} />
            </div>
            <div className="pb-5">
              <p>Type Sth</p>
            </div>
          </div>
          <div>
            <div className="display-3 pt-5 ">
              <Number n={500} />
            </div>
            <div className="pb-5">
              <p>Type Sth</p>
            </div>
          </div>
          <div>
            <div className="display-3 pt-5">
              <Number n={200} />
            </div>
            <div className="pb-5">
              <p>Type Sth</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-3 col-0 d-none d-lg-block side-image py-5">
          <div className="py-5">
            <Image
              src="/pics/cafe.jpg"
              alt="cafe"
              width={250}
              height={400}
              className="sideimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FewWords;
