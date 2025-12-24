import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import MenDropdown from "./MenDropdown";
import WomenDropdown from "./WomenDropdown";
import KidsDropdown from "./KidsDropdown"

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [showKids, setShowKids] = useState(false);

  return (
    <header className="px-5 h-[60px] bg-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            className="h-10 rounded-full"
            src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
            alt="LOGO"
          />
        </div>

        {/* MENU */}
        <ul className="flex items-center gap-18 font-bold text-black ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {/* MEN */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <NavLink to="/Men" className="hover:text-orange-600 gap-3">
              Men
            </NavLink>

            {open && <MenDropdown />}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowWomen(true)}
            onMouseLeave={() => setShowWomen(false)}
          >
            <NavLink to="/Women" className="hover:text-orange-600">
              Women
            </NavLink>

            {showWomen && <WomenDropdown />}
          </li>

          <li>
            <div
              className="relative"
              onMouseEnter={() => setShowKids(true)}
              onMouseLeave={() => setShowKids(false)}
            >
              <NavLink
                to="/Kids"
                className="font-semibold hover:text-orange-600"
              >
                Kids
              </NavLink>

              {showKids && <KidsDropdown />}
            </div>
          </li>
        </ul>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search for products"
          className="w-[420px] h-11 px-4 rounded-lg border border-gray-300 focus:outline-none"
        />

        {/* RIGHT MENU */}
        <ul className="flex items-center gap-8 text-black">
          {/* PROFILE */}
          <li className="relative group flex flex-col items-center cursor-pointer">
            <FaUser className="text-xl" />
            <span className="text-xs mt-1">Profile</span>

            {/* Profile Dropdown */}
            <ul className="absolute right-0 top-full mt-2 hidden w-40 bg-white shadow-md group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </li>

          {/* WISHLIST */}
          <li className="flex flex-col items-center cursor-pointer">
            <FaHeart className="text-xl" />
            <NavLink to="/wishlist" className="text-xs mt-1">
              Wishlist
            </NavLink>
          </li>

          {/* BAG */}
          <li className="flex flex-col items-center cursor-pointer">
            <FaShoppingBag className="text-xl" />
            <NavLink to="/cart" className="text-xs mt-1">
              Bag
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
