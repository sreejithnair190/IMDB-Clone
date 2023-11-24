import React from "react";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./menuItem";
import DarkModeSwitch from "./darkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 py-2 max-w-6xl sm:mx-auto items-center">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={IoHomeSharp} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className='text-2xl'>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
