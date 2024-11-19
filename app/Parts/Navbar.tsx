import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const sour = localFont({
  src: "../fonts/SourGummy_Expanded-BoldItalic.ttf",
  variable: "--font-sour",
  weight: "100 900",
});

function Navbar() {
  return (
    <div>
      <div className="logo flex justify-between items-center py-3 px-2 bg-transparent">
        <Link href="/">
          <h1 className={`text-4xl ml-5 ${sour.className} cursor-pointer`}>
            Shorten
          </h1>
        </Link>
        <ul className="w-[50%] flex justify-evenly items-center text-lg">
          <Link href={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href={"/shorten"}>
            <li className="cursor-pointer">Custom Short Links</li>
          </Link>
          <Link href={"/"}>
            <li className="cursor-pointer">Features</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
