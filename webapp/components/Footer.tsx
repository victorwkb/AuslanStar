import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flexCenter bg-indigo-900 text-white">
        <div className="padding-container max-container flex w-full flex-col gap-y-8 mt-6">
          <div className="flex flex-row w-full items-center justify-between gap-[10%] lg:gap-[20%] sm:pl-8 md:pl-20 lg:pl-32">
            <Link href="/">
              <Image src="/Logo.svg" alt="logo" width={180} height={70} />
            </Link>

            <div className="flex flex-row justify-start gap-[20%] flex-1">
              {FOOTER_LINKS.map((columns, idx) => (
                <div key={idx} className="flex flex-col gap-5 w-20">
                  <h4 className="font-bold">{columns.title}</h4>
                  <ul className="font-sm flex flex-col gap-4 text-white">
                    {columns.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          key={link.label}
                          className="hover:underline hover:font-bold"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border bg-white" />

          <p className="regular-14 w-full text-center text-white mb-8">
            2024 Auslan Star | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
