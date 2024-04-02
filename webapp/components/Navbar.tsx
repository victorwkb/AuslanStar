'use client'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import {NAV_LINKS} from "@/constants";




const Navbar = () => {
    const pathname = usePathname();


    return (
        <nav className='border-5 border-red-300 flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/">
                <Image src="/Auslanlogo.jpg" alt='logo' width={60} height={25}></Image>
            </Link>
            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}>
                        <a className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                            pathname === link.href ? 'text-red-500' : ''
                        }`}>
                            {link.label}
                        </a>
                    </Link>
                ))}
            </ul>
            <Image
                src="menu.svg"
                alt='menu'
                width={32}
                height={32}
                className='inline-block cursor-pointer lg:hidden'
            />

        </nav>

    )
}

export default Navbar






