import React from 'react'
import logo from "../Assets/Logos/logoFinal.png";
const Navbar = () => {
  return (
    <>
      <header class='bg-[#000000]'>
        <nav className="flex justify-between items-center px-4 py-0.5 ">
          <div className="flex items-center gap-0">
            <div className='relative w-25 h-15 overflow-visible'>
              <img
                src={logo}
                alt="logo"
                className="absolute top-[50%] left-[50%] w-25 h-25 translate-[-50%] translate-y-[-40%]"
              />
            </div>
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