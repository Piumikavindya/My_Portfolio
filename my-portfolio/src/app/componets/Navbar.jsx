"use client";
import React,{useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MenuOverlay from './MenuOverlay';



const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
  <nav className='fixed top-0 left-0 right-0 z-10 bd-[#121212] bg-opacity-100'> 
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href ={"/"} className="text-lg md:text-5xl text-white font-semibold"> LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
           !navbarOpen ? (
              <button onClick={()=> setNavbarOpen(true)} className='flex items-centerpx-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                <MenuIcon className="h-5 w-5"/></button>
            ) : (
              <button onClick={()=> setNavbarOpen(false)} className='flex items-centerpx-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                <XIcon className="h-5 w-5"/></button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto ' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))}
            </ul>

        </div>
    </div>
{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  </nav>
  )
}
