import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import GridBlurredBackdrop from "../Home/Testimonials";
const MainNavbar = () => {
  return (
    <>
      <div
        className="p-0 m-0 navbar-wrap flex-column flex-center d-lg-flex d-none"
        style={{ backgroundColor: "#202738" }}
      >
        <Image
          src="/pics/logowhite.png"
          alt="Grinders Logo"
          height={150}
          width={150}
          style={{ color: "white" }}
        />
        <div className="flex-column  flex-center text-white my-5">
          <ul>
            <li className="p-2 text-center">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="p-2 text-center">
              <Link href={"/aboutus"}>ABOUT</Link>
            </li>
            <li className="p-2 text-center">
              <Link href={"/menu"}>MENU</Link>
            </li>
            <li className="p-2 text-center">
              <Link href={"/contactus"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <Button className="py-3 mt-3" variant="danger">
          SEE MENU
        </Button>
        <p className="text-white text-center mt-5 p-3">
          Narayani kinar, Near ram mandir, Narayangarh, chitwan, 55254
        </p>
      </div>
    </>
  );
};

export default MainNavbar;
