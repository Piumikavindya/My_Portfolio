import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
  <nav> 
    <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href ={"/"} className="text-5xl text-white font-semibold"> LOGO
        </Link>
        <div className='menu'>
            <ul>
                <li>
                    <Link href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'></Link>
                </li>
            </ul>

        </div>
    </div>

  </nav>
  )
}
