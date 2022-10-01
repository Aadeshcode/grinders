import React from "react";
import { MainNavbar, LargeWithLogoCentered, SmallNav } from "./index";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Grinders Cafe || A perfect place for coffee lovers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Grinders Cafe || A perfect place for coffee lovers"
          key="title"
        />
        <link
          rel="shortcut icon"
          href="/logowhite.ico"
          type="image/x-icon"
        ></link>
      </Head>
      <main className="">
        <div className="container-fluid p-0">
          <div className="flex-xl-nowrap">
            <div className=" bd-sidebar  p-0">
              <MainNavbar />
            </div>
            <div className=" bd-navbar d-lg-none p-0">
              <SmallNav />
            </div>
            <div className=" bd-content p-0">{children}</div>
            <LargeWithLogoCentered />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
