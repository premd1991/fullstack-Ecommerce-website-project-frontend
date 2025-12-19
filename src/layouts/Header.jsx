import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <header className='flex justify-items-start px-5 items-center h-[50px] bg-white text-orange-500 sticky top-0 z-50 shadow-md'>
    <div className='flex items-center gap-5'>
        <img className='h-10 rounded-3xl' src={"https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"} alt="LOGO" />
   <p> </p>
    </div>


    <nav>
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex items-center justify-between py-4 font-bold">

          {/* LEFT MENU */}
          <div className="flex items-center gap-15">

            <li>
              <NavLink to="/" className="text-black">
                Home
              </NavLink>
            </li>

            {/* MEN DROPDOWN */}
            <li className="relative group">
                <li> <NavLink to="/Men"  className="text-black">Men</NavLink></li>
              <ul className="absolute left-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">T-Shirts</li>
                <li className="px-4 py-2 hover:bg-gray-100">Shirts</li>
                <li className="px-4 py-2 hover:bg-gray-100">Jeans</li>
              </ul>
            </li>

            {/* WOMEN DROPDOWN */}
            <li className="relative group">
              <li> <NavLink to="/Women" className="text-black">Women</NavLink></li>
              <ul className="absolute left-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Dresses</li>
                <li className="px-4 py-2 hover:bg-gray-100">Tops</li>
                <li className="px-4 py-2 hover:bg-gray-100">Jeans</li>
              </ul>
            </li>

            {/* KIDS DROPDOWN */}
            <li className="relative group"> 
              <li> <NavLink to="/Kids" className="text-black">Kids</NavLink></li>
              <ul className="absolute left-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Boys</li>
                <li className="px-4 py-2 hover:bg-gray-100">Girls</li>
                <li className="px-4 py-2 hover:bg-gray-100">Infants</li>
              </ul>
            </li>
          </div>

          {/* CENTER SEARCH */}
          <li className="flex-1 ml-30 mr-5 ">
            <input
              type="text"
              placeholder="Search for product and more"
              className="w-[420px] h-11 px-4 text-base rounded-lg border border-gray-300 focus:outline-none"
            />
          </li>

          {/* RIGHT MENU */}
          <div className="flex  gap-2">

            {/* PROFILE DROPDOWN */}
            <li className="relative group">
              <span className="cursor-pointer text-black ml-5">Profile</span>
              <ul className="absolute right-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">
                <li> <NavLink to="/Login" >Login</NavLink></li>

                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">Orders</li>
              </ul>
            </li>

            <li>
              <NavLink to="/wishlist" className="text-black mx-5">
                Wishlist
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="text-black">
                Bag
              </NavLink>
            </li>
          </div>

        </ul>
      </div>
    </nav>


   </header>
   
   </>
  )
}

export default Header

