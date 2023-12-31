import React, { useState } from "react";
import Button from "./Button";
import '../styles.css';

// import { HomeIcon } from "@heroicons/react/24/solid";

function Nav() {
 
  let Links = [
    { name: "Newin", link: "/" },
    { name: "Clothing ", link: "/" },
    { name: "Dresses", link: "/" },
    { name: "Shop the gram ", link: "/" },
    { name: "Accessories", link: "/" },
    { name: "Sale", link: "/" },
    { name: "Blog", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full">
        <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            AswaniStore
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            id="xe"
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7" id="navi">
                <a href={link.link} className="text-gray-800 hover:text-color">
                  {link.name}
                </a>
              </li>
            ))}

            <Button>Get Started </Button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
