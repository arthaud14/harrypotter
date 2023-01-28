import React from "react";


const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-500">
      <a href="/">
        <img className="h-40 W-40" src="Logobg.webp" alt="" />
      </a>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto" role="navigation">
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-primary hover:bg-white hover:text-third" href="/" aria-label="Home">
            <span className="">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-primary hover:bg-white hover:text-third" href="/allperso" aria-label="Personnages">
            <span className="">Personnages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-primary hover:bg-white hover:text-third" href="/contact" aria-label="Contact">
            <span className="">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
