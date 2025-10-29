import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const HeaderCard: React.FC = () => {
  return (
    <div className="w-[90%] sm:max-w-xl mx-auto mt-6 sm:mt-10 border-4 border-black bg-white shadow-[6px_6px_0_#000] relative font-pixel rounded-lg overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between p-4 sm:p-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Profile Image */}
          <img
            src="/Hlogo.png"
            alt="Harsh Bharat Dave"
            className="w-16 h-16 rounded-full border-4 border-black bg-black"
          />
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-black">
              Harsh Bharat Dave
            </h1>
            <p className="text-xs sm:text-sm text-black">
              Product Designer & Developer
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 bg-black text-white px-4 sm:px-6 py-3 border-t-4 border-black relative overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 opacity-15 bg-[url('/pixel-dragon.gif')] bg-cover bg-center pointer-events-none"></div>

        {/* Left: Status */}
        <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-5 relative z-10">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-xs sm:text-sm tracking-wide">
            Available for work
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center sm:justify-end items-center space-x-3 relative z-10">
          <a
            href="https://www.linkedin.com/in/harsh-dave-807508221"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-orange-500 rounded-full p-2 border-2 border-black 
                       shadow-[2px_2px_0_#000] hover:scale-110 
                       hover:shadow-[0_0_8px_#ff8c00] transition-all duration-200 flex items-center justify-center"
          >
            <FaLinkedin size={14} />
          </a>

          <a
            href="https://www.instagram.com/harshhehehe?igsh=c3Y2NGN2bGM4OWs2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-orange-500 rounded-full p-2 border-2 border-black 
                       shadow-[2px_2px_0_#000] hover:scale-110 
                       hover:shadow-[0_0_8px_#ff8c00] transition-all duration-200 flex items-center justify-center"
          >
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
