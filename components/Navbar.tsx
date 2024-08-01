"use client"
// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#FEFCE8] bg-opacity-50 p-6 m-3 sticky top-2" style={{ borderRadius: "40px" }}>
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-black text-lg font-bold">
        <Link href="/">MyWebsite</Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="text-black hover:text-red-400">Home</Link>
        <Link href="/products" className="text-black hover:text-red-400">Product</Link>
        <Link href="/services" className="text-black hover:text-red-400">Services</Link>
        <Link href="/blog" className="text-black hover:text-red-400">Blog</Link>
        <Link href="/contact" className="text-black hover:text-red-400">Contact</Link> 
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-red-400 focus:outline-none"
          >
            Dropdown
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-lg">
              <div className="grid grid-cols-3 gap-4 p-4">
                <div>
                  <Link href="/a" className="block px-4 py-2 hover:bg-gray-200">1</Link>
                  <Link href="/b" className="block px-4 py-2 hover:bg-gray-200">2</Link>
                  <Link href="/c" className="block px-4 py-2 hover:bg-gray-200">3</Link>
                </div>
                <div>
                  <Link href="/d" className="block px-4 py-2 hover:bg-gray-200">4</Link>
                  <Link href="/e" className="block px-4 py-2 hover:bg-gray-200">5</Link>
                  <Link href="/f" className="block px-4 py-2 hover:bg-gray-200">6</Link>
                </div>
                <div>
                  <Link href="/d" className="block px-4 py-2 hover:bg-gray-200">7</Link>
                  <Link href="/e" className="block px-4 py-2 hover:bg-gray-200">8</Link>
                  <Link href="/f" className="block px-4 py-2 hover:bg-gray-200">9</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="md:hidden text-white focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </nav>
  
  
  );
};

export default Navbar;
