import React, { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#about");

  return (
    <header className="sticky top-0 left-0 w-full z-50 shadow-md bg-gray-800 text-slate-50">
      <nav className="px-4 py-2 flex justify-between items-center flex-grow">
        <span className="font-bold text-xl lgl:ml-12 italic">Portfolio</span>
        <Menu />
        <ul className="md:flex md:gap-8 text-lg hidden">
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? "font-bold text-xl" : ""}
              onClick={() => setActiveLink("#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeLink === "#skills" ? "font-bold text-xl" : ""}
              onClick={() => setActiveLink("#skills")}
            >
              Skills
            </a>
          </li>
        </ul>
        <button className="md:inline-flex items-center px-4 py-2 bg-transparent border-2 border-blue-850 text-white rounded-full hover:bg-slate-400 hidden">
          <span className="mr-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/asutosh24595"
            >
              GitHub Profile
            </a>
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
