import React from 'react'

import resqbite from "../Assets/Images/resQbite.png";
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden">
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        
        {/* Left*/}
        <div className="max-w-xl">
          
          <p className="text-orange-400 text-sm mb-3">
            Affordable and very filling
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
            Hot, fresh{" "}
            <span className="text-orange-500">Food</span>
            <br />
            made for any time cravings
          </h1>
          <p  class="text-gray-500">
            Discover affordable meals from nearby restaurants while reducing food waste.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button  class="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg  hover:shadow-yl hover:shadow-white/5 hover:scale-105 hover:text-black transition duration-300">
              Pickup Order
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg  hover:shadow-yl hover:shadow-white/5 hover:scale-105 hover:text-black transition duration-300">
              See Available Food
            </button>
          </div>
        </div>
          {/* Image Logo  or content for now image of logo*/}
        <div className="relative mt-16 md:mt-0 w-full md:w-1/2 flex items-center justify-center">
        <img src={resqbite} className='w-95 ' alt="empty" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
