"use client";
import Button from "@/Components/Tags/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [pathName, setpathName] = useState();
  useEffect(() => {
    const path = window.location.pathname;
    setpathName(path);
  }, []);
  return (
    <nav className=" h-navbar_Height w-auto bg-Blue px-navbarPadding flex items-center justify-between ">
      <Image
        src={"/Images/Navbar/sitelogo.png"}
        className=""
        height={28}
        width={122}
        alt="navbar logo"
      />

      <div className="flex gap-navMenuGap items-center ">
        <ul className="flex gap-8">
          <li>
            <Link
              href={"/"}
              className={`${
                pathName === "/" ? " text-white " : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`${
                pathName === "/about"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              about us
            </Link>
          </li>
          <li>
            <Link
              href={"/features"}
              className={`${
                pathName === "/features"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              features
            </Link>
          </li>
          <li>
            <Link
              href={"/pricing"}
              className={`${
                pathName === "/pricing"
                  ? " text-white "
                  : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              pricing
            </Link>
          </li>
          <li>
            <Link
              href={"/faq"}
              className={`${
                pathName === "/faq" ? " text-white " : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className={`${
                pathName === "/blog" ? " text-white " : " text-navLinkTxtColor "
              } Navbar-Link `}
            >
              blog
            </Link>
          </li>
        </ul>
        <Button className=" NavBtn" text={"contact us"} />
      </div>
    </nav>
  );
};

export default Navbar;
