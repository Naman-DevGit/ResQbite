import React from 'react'
import logo from "../Assets/Logos/logoFinal.png";
const Navbar = () => {
  return (
    <>
      <header class='bg-[#000000]'>
        <nav className="flex justify-between items-center px-4 py-0.5 ">
            <div className="flex items-center gap-3">
        <img
            src={logo}
            alt="logo"
            className="h-15 w-auto object-contain translate-y-[3px]"
        />
        <span className="text-2xl font-semibold text-orange-500">
            ResQbite
        </span>
        </div>
            <div className="flex items-center gap-5 font-medium">
                <a href="#" className='text-white'>HOME</a>
                <a href='#' className='text-white'>ABOUT US</a>
                <a href='#' className='text-white'>CONTACT US</a>
                <a href='#' className='text-white'>LOGIN</a>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar