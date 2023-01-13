import React from "react";


const Navbar = () => {
  return (
    <div>
      <a href="/">
        <img className="h-40 W-40" src="Logo.jpeg" alt="" />
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
