import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <header className='flex justify-between px-5 items-center h-[50px] bg-orange-500 text-white'>
    <div className='flex items-center gap-5'>
        <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fe-commerce-ecommerce-web-banner-on-blue-and-pink-background-various-shopping-icons-online-shopping-concept-image467976076.html&psig=AOvVaw1-nD3Zi0ezxCvQOR7ywd1e&ust=1764488455594000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPjdouztlpEDFQAAAAAdAAAAABAE"} alt="LOGO" />
   <p> </p>
    </div>
    <nav>
        <ul className='flex items-center gap-5'>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/About">About</NavLink></li>
            <li> <NavLink to="/Blogs">Blogs</NavLink></li>
            <li> <NavLink to="/Contact">Contact</NavLink></li>
            <li> <NavLink to="/Login" className="bg-white text-orange-400 rounded-2xl p-2">Login</NavLink></li>

        </ul>
    </nav>
   </header>
   
   </>
  )
}

export default Header

