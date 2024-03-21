import React from 'react'
import NavLink from './NavLink';

export default function MenuOverlay({links}) {
  return (
    <ul className='flex flex-col py-4 items-center'>{links.map((link, index) => 
    (
    <li key={index} ><NavLink href={link.href} title={link.title} /></li>))}

    </ul>
  );
};
