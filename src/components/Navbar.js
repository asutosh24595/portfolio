import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gray-600 text-slate-50">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <span className="font-bold text-xl ml-12">Portfolio</span>
        <ul className="flex gap-8 text-lg">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
        <button className="inline-flex items-center px-4 py-2 bg-transparent border-2 border-blue-950 text-white rounded-full hover:bg-slate-400">
          <span className="mr-2"><a target="_blank" rel="noopener noreferrer" href='https://github.com/asutosh24595'>GitHub Profile</a></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
