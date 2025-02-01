import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className='flex justify-between items-center text-white px-6 pt-2 pb-4 mt-2  md:px-20'> 
      
      <span className='text-xl font-bold tracking-wide cursor-pointer'>Portfolio</span>

      <ul
        className={`md:flex items-center gap-6 font-semibold ${
          menuOpen ? "block" : "hidden"
        } md:static absolute top-14 left-1/2 transform -translate-x-1/2 w-3/4 md:w-auto bg-gray-600 mt-6 bg-opacity-80 md:bg-transparent md:p-0 px-4 py-5 md:rounded-none rounded-xl transition-all duration-300`}
      >
        
        <li className='text-md cursor-pointer hover:bg-white hover:rounded-md hover:text-gray-600 px-2 py-1 transition-all'>
          <a href="#about">About</a>
        </li>
        <li className='text-md cursor-pointer hover:bg-white hover:rounded-md hover:text-gray-600 px-2 py-1 transition-all'>
          <a href="#skill">Skill</a>
        </li>
        <li className='text-md cursor-pointer hover:bg-white hover:rounded-md hover:text-gray-600 px-2 py-1 transition-all'>
          <a href="#projects">Projects</a>
        </li>
        <li className='text-md cursor-pointer hover:bg-white hover:rounded-md hover:text-gray-600 px-2 py-1 transition-all'>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className='md:hidden z-20 cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <RiCloseLine size={30} className='transition-all duration-300' />
        ) : (
          <RiMenu2Line size={30} className='transition-all duration-300' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
