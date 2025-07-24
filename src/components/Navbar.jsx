import React from "react";

const Navbar = () => (
  <header className="w-full bg-white shadow-sm flex items-center h-20 px-8">
    {/* Logo */}
    <div className="flex items-center gap-2 flex-shrink-0">
      <img src="/vite.svg" alt="Logo" className="h-7 w-7" />
      <span className="font-bold text-lg tracking-wide">AFRILANCER</span>
    </div>
    {/* Spacer */}
    <div className="flex-1" />
    {/* Nav Links */}
    <nav className="flex gap-10 text-gray-700 font-medium mr-8">
      <a href="#" className="hover:text-black">Home</a>
      <a href="#" className="hover:text-black">Transactions</a>
      <a href="#" className="hover:text-black">Services</a>
      <a href="#" className="hover:text-black">About</a>
    </nav>
    {/* Avatar */}
    <img src="/vite.svg" alt="User" className="h-11 w-11 rounded-full object-cover border-2 border-gray-200" />
  </header>
);

export default Navbar; 