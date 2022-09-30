import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
const MainNavbar = () => {
  return (
    <div
      className="p-0 m-0 navbar-wrap flex-column flex-center d-lg-flex d-none"
      style={{ backgroundColor: "#202738" }}
    >
      <Image
        src="/pics/logo.png"
        alt="Grinders Logo"
        height={150}
        width={100}
      />
      <div className="flex-column  flex-center text-white my-5">
        <ul>
          <li className="p-2 text-center">
            <Link href={"/home"}>HOME</Link>
          </li>
          <li className="p-2 text-center">
            <Link href={"/home"}>ABOUT</Link>
          </li>
          <li className="p-2 text-center">
            <Link href={"/home"}>MENU</Link>
          </li>
          <li className="p-2 text-center">
            <Link href={"/home"}>CONTACT</Link>
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
  );
};

export default MainNavbar;
