// 'use client'
// import { usePathname } from 'next/navigation';
// import Image from 'next/image'
// import Link from 'next/link'
// import {NAV_LINKS,RESOURCE_LINKS} from "@/constants";
// import React from 'react';
//
//
// const Navbar = () => {
//     const pathname = usePathname();
//
//     return (
//         <nav className='border-5 border-red-300 flexBetween max-container padding-container relative z-30 py-5'>
//             <Link href={NAV_LINKS.find((item) => item.key === 'home')?.href ?? '/'}>
//               <Image src="/Auslanlogo.jpg" alt='logo' width={60} height={25} />
//             </Link>
//
//             <ul className='hidden h-full gap-12 lg:flex'>
//                     {NAV_LINKS.map((link) => (
//                       <li key={link.key} className="relative group">
//                         <Link href={link.href}>
//                           <span className={`cursor-pointer ... ${(pathname === link.href || pathname.startsWith(`${link.href}/`)) ? 'text-red-500' : ''}`}>
//                             {link.label} {link.key === 'resources' ? <span aria-hidden="true">&#9662;</span> : null}
//                           </span>
//                         </Link>
//                         {link.key === 'resources' && (
//                           <ul className="absolute hidden group-hover:block">
//                             {RESOURCE_LINKS.map((resourceLink) => (
//                               <li key={resourceLink.key} className={`bg-white text-black px-4 py-2 hover:bg-gray-100 ${pathname.startsWith(`${resourceLink.href}`) ? 'text-red-500' : ''}`}>
//                                 <Link href={resourceLink.href}>
//                                   {resourceLink.label}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                 </ul>
//
//         </nav>
//
// )
// }
//
// export default Navbar

'use client'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import {NAV_LINKS,RESOURCE_LINKS} from "@/constants";
import React from 'react';


const Navbar = () => {
    const pathname = usePathname();
    const isResourcesActive = pathname.startsWith('/resources');

    return (
        <nav className='border-5 border-red-300 flexBetween max-container padding-container relative z-30 py-5'>
            <Link href={NAV_LINKS.find((item) => item.key === 'home')?.href ?? '/'}>
              <Image src="/Auslanlogo.jpg" alt='logo' width={60} height={25} />
            </Link>

            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <li key={link.key} className="relative group">
                        <Link href={link.href}>
                            <span className={`cursor-pointer ... ${(pathname === link.href || pathname.startsWith(`${link.href}/`) || (link.key === 'resources' && isResourcesActive)) ? 'font-semibold text-purple-400' : 'text-gray-600'}`}>
                                {link.label} {link.key === 'resources' ? <span aria-hidden="true">&#9662;</span> : null}
                            </span>
                        </Link>
                        {link.key === 'resources' && (
                            <ul className="absolute hidden group-hover:block w-48 left-1/2 transform -translate-x-1/2 border border-gray-200">
                                {RESOURCE_LINKS.map((resourceLink) => (
                                    <li key={resourceLink.key} className={`px-4 py-2 hover:bg-blue-50 ${pathname.startsWith(`${resourceLink.href}`) ? 'font-semibold text-purple-400' : 'text-gray-600'}`}>
                                        <Link href={resourceLink.href}>
                                            {resourceLink.label}
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
}
export default Navbar
