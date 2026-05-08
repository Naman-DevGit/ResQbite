import React from 'react'
import { FaFacebookF,FaInstagram,FaYoutube} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-orange-400 to-orange-600 text-black py-11">
        <div className='max-w-6xl mx-auto px-6'>
             <div className="grid md:grid-cols-3 gap-8">
                
    {/* i have divided footer in 3 section that is left , right , bootom  imported react-icons for social symbols , imported Fachevron for symbols(<) for quick lines*/
    }
                {/*for left */}
                <div>
                    <h1 className="text-2xl font-bold">ResQbite</h1>
                    <p className="mt-3 text-sm">
                        Saving good food.<br/>
                        Feeding more people.<br/>
                        Building a better tomorrow.
                    </p>
                    <div className='mt-6'>
                      <h3 className="font-semibold mb-3">Follow Us</h3>
                      <div className='flex gap-4'>
                        <div className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"><FaFacebookF /></div>
                         <div className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"><FaInstagram /></div>
                        <div className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"><FaYoutube /></div>
                        <div className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black transition"><MdEmail /></div>
                      </div>
                    </div>
                </div>

                {/*for Middle*/}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li className='flex items-center gap-2 hover:translate-x-1 transition'>Home</li>
                        <li className='flex items-center gap-2 hover:translate-x-1 transition'> <FaChevronRight size = {10} /> 
                        
                        About Us</li>
                        <li className='flex items-center gap-2 hover:translate-x-1 transition'> <FaChevronRight size = {10} /> 
                        
                        How It Works</li>
                       <li className='flex items-center gap-2 hover:translate-x-1 transition'>
                          <FaChevronRight size={10} />
                          <Link to="/contact">
                            Contact Us
                          </Link>
                        </li>
                        <li className='flex items-center gap-2 hover:translate-x-1 transition'> <FaChevronRight size = {10} /> 
                        
                        FAQs</li>
                        <li className='flex items-center gap-2 hover:translate-x-1 transition'> <FaChevronRight size = {10} /> 
                         
                        Privacy Policy</li>
                        <li className='flex items-center gap-2 hover:translate-x-1 transition'> <FaChevronRight size = {10} /> 
                        
                        Terms & Conditions</li>
                    </ul>
                </div>
               {/*for Right*/}
               <div>
                <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
                <p className="mb-4">
                   Subscribe to our newsletter and never miss an update.
                </p>

                <input
                   type="email"
                   placeholder="Enter your email address"
                  className="w-full p-4 border-2 border-black rounded-xl bg-transparent placeholder-black focus:outline-none mb-3"
                />
                <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition">
                   SUBSCRIBE
                </button>
               </div>
            </div>
        </div>
        <div className='border-t border-black mt-10 pt-5 text-center text-sm'>
             © 2026 ResQbite. All rights reserved. | Made with ❤️ for a better future.
        </div>
    </footer>
)
}
export default Footer
  



                        


               



               




















