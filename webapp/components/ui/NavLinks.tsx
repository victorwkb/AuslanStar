'use client'

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from "@radix-ui/react-icons";

import { RESOURCE_LINKS } from "@/constants";

type NavLinkProps = {
  href: string;
  icon: string;
  label: string;
  linkKey: string;
  children: React.ReactNode;
};

export default function NavLink({ href, icon, label, linkKey, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const resourcePath = `${usePathname().split("/")[1]}`;
  const subpath = `${usePathname().split("/")[2]}`;
  const active = pathname === href;

  return (
    <div>
      {label === "Resources" && (
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>
                <Link
                  className={clsx("flex flex-row ml-8 gap-x-2 hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100 items-center",
                    (resourcePath === linkKey) ? "text-orange-300 font-bold" : "text-gray-600"
                  )}
                  href={href}
                >
                  <Image src={icon} alt={label} width={25} height={25} />
                  {children}
                  <CaretDownIcon
                    className="text-violet10 relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 h-full"
                    aria-hidden
                  />
                </Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-10 right-0 w-[350px] border border-black bg-yellow-50 flex flex-col z-10">
                {RESOURCE_LINKS.map((resource: any, index) => (
                  <NavigationMenu.Link
                    key={index}
                    href={resource.href}
                    className="text-center justify-center py-2 px-4">
                    <div
                      className={clsx(
                        "flex flex-row gap-x-2 hover:scale-110 hover:cursor-pointer justify-center active:scale-100 hover:font-bold transition-all duration-100",
                        (subpath === resource.key) ? "text-orange-300 font-bold" : "text-gray-600"
                      )}
                    >
                      <Image src={resource.icon} alt={resource.label} width={25} height={25} />
                      <p>
                        {resource.label}
                      </p>
                    </div>
                  </NavigationMenu.Link>
                ))}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      )}
      {label !== "Resources" && (
        <Link
          className={clsx("flex flex-row ml-8 gap-x-2 hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100",
            active ? "text-orange-300 font-bold" : "text-gray-600"
          )}
          href={href}
        >
          <Image src={icon} alt={label} width={25} height={25} />
          {children}
        </Link>
      )}
    </div>
  );
}
