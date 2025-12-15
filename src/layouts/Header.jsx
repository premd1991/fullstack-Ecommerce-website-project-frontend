import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <header className='flex justify-items-start px-5 items-center h-[50px] bg-white text-orange-500 sticky top-0 z-50'>
    <div className='flex items-center gap-5'>
        <img className='h-10 rounded-3xl' src={"https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"} alt="LOGO" />
   <p> </p>
    </div>
    <nav>
        <ul className='flex items-center gap-5 font-bold'>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/About">About</NavLink></li>
            <li> <NavLink to="/Blogs">Blogs</NavLink></li>
            <li> <NavLink to="/Contact">Contact</NavLink></li>
            <li> <NavLink to="/Login" className="bg-white text-orange-600 font-semi bold rounded-2xl p-2 border-2">Login</NavLink></li>

        </ul>
    </nav>
   </header>
   
   </>
  )
}

export default Header

