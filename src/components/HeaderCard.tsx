import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const HeaderCard: React.FC = () => {
  return (
    <div className="w-[92%] sm:w-[90%] md:max-w-2xl mx-auto mt-6 sm:mt-10 border-4 border-black bg-white shadow-[5px_5px_0_#000] font-pixel rounded-lg overflow-hidden transition-all duration-300">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-3 sm:gap-4 p-4 sm:p-6 text-center sm:text-left">
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4">
          {/* Profile Image */}
          <img
            src="/Hlogo.png"
            alt="Harsh Bharat Dave"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-black bg-black object-cover"
          />

          {/* Name + Role */}
          <div>
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-black leading-tight">
              Harsh Bharat Dave
            </h1>
            <p className="text-[11px] sm:text-sm md:text-base text-black">
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
        <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 relative z-10">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-[10px] sm:text-xs md:text-sm tracking-wide">
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
            className="bg-orange-500 rounded-full p-2 sm:p-2.5 border-2 border-black 
                       shadow-[2px_2px_0_#000] hover:scale-110 
                       hover:shadow-[0_0_8px_#ff8c00] transition-all duration-200 flex items-center justify-center"
          >
            <FaLinkedin size={14} className="sm:w-4 sm:h-4" />
          </a>

          <a
            href="https://www.instagram.com/harshhehehe?igsh=c3Y2NGN2bGM4OWs2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-orange-500 rounded-full p-2 sm:p-2.5 border-2 border-black 
                       shadow-[2px_2px_0_#000] hover:scale-110 
                       hover:shadow-[0_0_8px_#ff8c00] transition-all duration-200 flex items-center justify-center"
          >
            <FaInstagram size={14} className="sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
