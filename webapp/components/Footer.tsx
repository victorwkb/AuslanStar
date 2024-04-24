import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-8">
      <div className="padding-container max-container flex w-full flex-col gap-y-8 mt-6">
        <div className="flex flex-row w-full items-center justify-between gap-[10%] lg:gap-[20%] sm:pl-8 md:pl-20 lg:pl-32">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={180} height={70} />
          </Link>

          <div className="flex flex-row justify-start gap-[20%] flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className="hover:underline hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          2024 Auslan Star | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;

