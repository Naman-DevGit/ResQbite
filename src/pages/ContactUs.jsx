import React from "react";

function ContactUs() {
  return (
    // Full Background
    <div className="min-h-screen bg-[#f5efe6] flex justify-center items-center">

      {/* Card  */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Contact Us
        </h1>

        <p className="text-center text-gray-500 mb-6">
          We’d love to hear from you
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg 
                       hover:bg-orange-600 transition duration-200"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactUs;