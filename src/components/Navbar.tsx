import React from "react";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div>
          <img
            src="Images/NavLogo.png"
            alt="Navigation Logo"
            className="w-auto h-8 md:h-10"
          />
        </div>

        {/* Mobile Navigation Bar */}
        <div className="block md:hidden w-full">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-black" // Black color for dropdown button
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-96 flex items-center justify-center">
          <div className="flex w-full bg-[#f0f1f1] rounded-md">
            <input
              type="search"
              placeholder="Search"
              className="w-full border-none bg-transparent px-4 py-2 text-gray-900 outline-none focus:outline-none text-[10px]"
            />
            <FaSearch className="m-3 text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Right Side Icons and User Info */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-8">
          {/* Inspirations */}
          <div className="flex items-center gap-2">
            <img
              src="Images/Icon.png"
              alt="Inspirations Icon"
              className="w-5 h-5"
            />
            <span className="text-[10px] font-bold text-gray-700">
              Inspirations
            </span>
          </div>

          {/* Favorites */}
          <div className="flex items-center gap-2">
            <img
              src="Images/heart.png"
              alt="Favorites Icon"
              className="w-5 h-5"
            />
            <span className="text-[10px] font-bold text-gray-700">
              Mes favoris
            </span>
            <h2 className="mt-2 bg-gray-300 text-gray-900 rounded-lg px-2 py-0.5 text-[10px]">
              24
            </h2>
          </div>

          {/* Cart */}
          <div className="bg-[#0093D0] flex items-center gap-2 w-20 md:w-20 h-8 md:h-8 rounded-md justify-center text-white">
            <img
              src="Images/shopping-cart-01.png"
              alt="Shopping Cart Icon"
              className="w-5 h-5"
            />
            <span className="text-[10px] font-bold">Panier</span>
          </div>

          {/* Language and Avatar */}
          <div className="flex items-center gap-3">
            <img
              src="Images/Avatar.png"
              alt="User Avatar"
              className="w-9 h-9 md:w-8 md:h-8 rounded-full"
            />
            <span className="flex items-center text-[10px] font-bold text-gray-700 gap-1">
              FR
              <img
                src="Images/chevron-down.png"
                alt="Expand dropdown"
                className="w-2 h-2"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="hidden md:block">
        <ul className="flex text-[10px] font-bold justify-between p-3 text-black relative">
          {[
            "ART DE LA TABLE",
            "MOBILIER",
            "NAPPAGE",
            "MATERIEL DE SALLE",
            "CUISINE",
            "BARBECUE",
            "TENTE",
            "CHAUFFAGE",
            "PODIUM-PISTE DANSE",
            "SON ET LUMIERE",
            "PACKS",
            "CONSUMABLES",
          ].map((item) => (
            <li key={item} className="relative px-2 hover:text-blue-500 group">
              {item}
              <span className="absolute bottom-[-33.5px] left-0 right-0 h-[10px] bg-transparent group-hover:bg-blue-500"></span>
            </li>
          ))}
        </ul>
        <hr className="border-gray-500 h-2" />
      </div>
    </div>
  );
};

export default Navbar;
