"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import NavLink from "./ui/NavLinks";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <nav className="w-full h-24 bg-yellow-50 font-comic text-xl z-10">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Link href="/" className="flex flex-row items-center hover:scale-110 transition duration-300">
            <Image
                src="/Logo.svg"
                alt="logo"
                width={90}
                height={90}
                style={{objectFit: 'contain', marginRight: '40px'}} // 调整这里的 marginRight 来改变图像和文本之间的距离
                className="cursor-pointer"
            />
            <p className="font-extrabold text-4xl text-orange-300 uppercase tracking-wide transform ">Auslan
              Star</p>
          </Link>


          <div className="hidden md:flex">
            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((navItems) => (
                  <li key={navItems.key}>
                    <NavLink
                        linkKey={navItems.key}
                        href={navItems.href}
                        icon={navItems.icon}
                        label={navItems.label}
                    >{navItems.label}</NavLink>
                  </li>
              ))}
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            <Menu size={25}/>
          </div>
          <div className={
            menuOpen
                ? "fixed z-10 right-0 top-0 w-[35%] md:hidden h-screen bg-red-50 p-10 ease-in duration-300"
                : "fixed z-10 right-[-100%] top-0 p-10 ease-in duration-500"
          }>
            <div className="flex w-full items-center justify-end">
              <div onClick={handleNav} className="cursor-pointer">
                <X size={25}/>
              </div>
            </div>
            <div className="flex-col py-4">
              <ul>
                <Link href="/">
                  <li
                      className="flex flex-row justify-center py-4 gap-x-2 hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100"
                      onClick={() => setMenuOpen(false)}
                  >
                    <Image src="/navbar/homeicon.png" alt="home icon" width={25} height={25}
                           style={{width: 25, height: 25}}/>
                    Home
                  </li>
                </Link>
                <Link href="/dictionary">
                  <li
                      className="flex flex-row justify-center py-4 gap-x-2 hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100"
                      onClick={() => setMenuOpen(false)}
                  >
                    <Image src="/navbar/dictionaryicon.png" alt="dictionary icon" width={25} height={25}/>
                    Dictionary
                  </li>
                </Link>
                <Link href="/spelling">
                  <li
                      className="flex flex-row justify-center py-4 gap-x-2 hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100"
                      onClick={() => setMenuOpen(false)}
                  >
                    <Image src="/navbar/spellingicon.png" alt="spelling icon" width={25} height={25}/>
                    Spelling
                  </li>
                </Link>
                <Link href="/resources/simulator">
                  <li
                      className="flex flex-row justify-center py-4 gap-x-2 hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100"
                      onClick={() => setMenuOpen(false)}
                  >
                    <Image src="/navbar/resourcesicon.png" alt="resources icon" width={25} height={25}/>
                    Resources
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
