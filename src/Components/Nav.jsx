import React from "react";
import logo from "/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Nav = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5 md:px-20 md:py-10 mx-auto">
      <div className="flex items-center">
        <img src={logo} alt="" className="md:w-15 w-5" />
      </div>
      <div
        id="menu"
        className=" font-themunday text-2xl  text-white flex items-center gap-2 "
      >
        <h1 className="text-3xl"></h1>{" "}
        {/* <RiMenu4Fill className="relative bottom-[1px]" /> */}
      </div>
    </div>
  );
};




export default Nav;
