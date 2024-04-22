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
      <nav className="border-5 border-red-300 flexBetween max-container padding-container relative z-30 py-5">
          <div className='flex items-center'>
              <Link href={NAV_LINKS.find((item) => item.key === "home")?.href ?? "/"}>
                  <Image src="/logo.svg" alt="logo" width={90} height={50}/>
              </Link>
              <Link href={NAV_LINKS.find((item) => item.key === "home")?.href ?? "/"}>
                  <p className="font-mono ml-3 text-4xl font-bold italic text-purple-300 ">Auslan Star</p>
              </Link>

          </div>
          <ul className="font-mono hidden h-full text-xl gap-12 lg:flex">
                  {NAV_LINKS.map((link) => (
                      <li key={link.key} className="relative group">
                          <Link href={link.href}>
                              <p className={`flex items-center cursor-pointer ... ${(pathname === link.href || pathname.startsWith(`${link.href}/`)) ? 'text-red-500' : ''}`}>
                                  {/* Render the icon image next to the label */}
                                  <Image src={link.icon} alt={`${link.label} icon`} width={24} height={24}/>
                                  <span className="ml-2">{link.label}</span>
                                  {link.key === 'resources' && <span aria-hidden="true">&#9662;</span>}
                              </p>
                          </Link>
                          {link.key === "resources" && (
                              <ul className="absolute hidden group-hover:block w-48 left-1/2 transform -translate-x-1/2 border border-gray-200 bg-white">
                                  {RESOURCE_LINKS.map((resourceLink) => (
                                      <li
                                          key={resourceLink.key}
                                          className={`px-4 py-2 hover:bg-purple-100 ${pathname.startsWith(`${resourceLink.href}`) ? "font-semibold text-purple-300" : "text-gray-600"}`}
                                      >
                                          <Link href={resourceLink.href}>{resourceLink.label}</Link>
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
