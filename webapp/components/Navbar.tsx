"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, RESOURCE_LINKS } from "@/constants";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isResourcesActive = pathname.startsWith("/resources");

  return (
    <nav className="border-5 container mx-auto flex flexBetween py-2">
      <div className='container mx-auto flex flex-row items-center'>
        <Link href={NAV_LINKS.find((item) => item.key === "home")?.href ?? "/"}>
          <Image src="/logo.svg" alt="logo" width={90} height={50} />
        </Link>
        <Link href={NAV_LINKS.find((item) => item.key === "home")?.href ?? "/"}>
          <p className="font-comic italic text-4xl font-bold text-orange-300 ">Auslan Star</p>
        </Link>

      </div>
      <ul className="font-comic hidden h-full text-xl lg:flex lg:flex-row gap-x-14">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="group">
            <Link href={link.href}>
              <div className={`flex hover:scale-125 hover:font-bold transition-all duration-100 items-center cursor-pointer ${pathname === link.href || pathname.startsWith(`${link.href}/`) || (link.key === "resources" && pathname.startsWith("/resources")) ? "font-semibold text-orange-300" : "text-gray-600"}`}>
                <Image src={link.icon} alt={`${link.label} icon`} width={24} height={24} />
                <div className="container mx-auto pl-2">{link.label}</div>
                {link.key === "resources" && <span aria-hidden="true" className="container mx-auto">&#9662;</span>}
              </div>
            </Link>
            {link.key === "resources" && (
              <ul className="absolute hidden group-hover:block w-[350px] transform top-7 -right-5 z-10 border border-gray-200 rounded-lg bg-amber-50">
                {RESOURCE_LINKS.map((resourceLink) => (
                  <li
                    key={resourceLink.key}
                    className={`px-4 py-2 hover:bg-orange-100 ${pathname.startsWith(`${resourceLink.href}`) ? "font-semibold text-orange-300" : "text-gray-600"}`}>
                    <Link href={resourceLink.href} className="flex flex-between w-full justify-center hover:font-bold transition-all duration-100">
                      <Image src={resourceLink.icon} alt={`${resourceLink.label} icon`} width={24} height={24} />
                      {/*<span className="ml-2">{resourceLink.label}</span>*/}
                      <div>
                        {resourceLink.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
