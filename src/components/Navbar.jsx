import React from 'react'
import Logo from '../assets/cmkLogo.png'
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-sxl font-bold hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          CMK Solutions
        </div>
        <div className="space-x-6">
          <a className="hover:text-gray-400"></a>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#services" className="hover:text-gray-400">
            Service
          </a>
          <a href="#whyus" className="hover:text-gray-400">
            Why Us
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar